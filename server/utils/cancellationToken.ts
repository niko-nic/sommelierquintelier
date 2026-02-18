import crypto from 'crypto';

const TOKEN_SECRET = process.env.CANCELLATION_TOKEN_SECRET || 'default-secret-please-change-in-production';
const TOKEN_EXPIRY_HOURS = 24;

export interface CancellationTokenData {
  subscriptionId: string;
  email: string;
  timestamp: number;
}

/**
 * Generate a secure two-part cancellation token
 * Token format: tokenId.secret
 * 
 * - tokenId: Opaque identifier for DB lookup (32 bytes hex = 64 chars)
 * - secret: Random value that gets hashed for verification (32 bytes hex = 64 chars)
 * 
 * Returns: { token, tokenId, tokenHash, expiresAt }
 */
export function generateCancellationToken(subscriptionId: string, email: string): {
  token: string;
  tokenId: string;
  tokenHash: string;
  expiresAt: Date;
} {
  const timestamp = Date.now();
  const expiresAt = new Date(timestamp + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);

  // Generate opaque tokenId (32 bytes = 64 hex chars)
  const tokenId = crypto.randomBytes(32).toString('hex');
  
  // Generate secret value (32 bytes = 64 hex chars)
  const secret = crypto.randomBytes(32).toString('hex');
  
  // Hash the secret for DB storage
  const tokenHash = hashToken(secret);
  
  // Combine tokenId and secret for the full token sent to user
  const token = `${tokenId}.${secret}`;

  return { token, tokenId, tokenHash, expiresAt };
}

/**
 * Split and validate a two-part cancellation token
 * Returns: { tokenId, secret } if format is valid, null otherwise
 * 
 * Does NOT verify against database - only validates token structure
 */
export function splitCancellationToken(token: string): { tokenId: string; secret: string } | null {
  try {
    // Split token into tokenId and secret
    const parts = token.split('.');
    if (parts.length !== 2) {
      console.warn('Invalid token format: expected tokenId.secret');
      return null;
    }

    const [tokenId, secret] = parts;

    // Validate format (should be hex strings of correct length)
    if (!tokenId || !secret || tokenId.length !== 64 || secret.length !== 64) {
      console.warn('Invalid token format: incorrect length');
      return null;
    }

    if (!/^[0-9a-f]{64}$/i.test(tokenId) || !/^[0-9a-f]{64}$/i.test(secret)) {
      console.warn('Invalid token format: not hex');
      return null;
    }

    return { tokenId, secret };
  } catch (error) {
    console.error('Error splitting token:', error);
    return null;
  }
}

/**
 * Legacy function kept for backwards compatibility
 * Now simply validates token format
 * 
 * @deprecated Use splitCancellationToken instead
 */
export function verifyCancellationToken(token: string): CancellationTokenData | null {
  const split = splitCancellationToken(token);
  if (!split) return null;
  
  // Return minimal data for backwards compatibility
  // Actual verification happens in DB lookup
  return {
    subscriptionId: '',
    email: '',
    timestamp: Date.now()
  };
}

/**
 * Hash a token for secure storage in database
 * Uses SHA-256 to create a one-way hash
 */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

/**
 * Compare a plaintext token with a hashed token using constant-time comparison
 * Prevents timing attacks
 */
export function compareTokenHash(token: string, hashedToken: string): boolean {
  const tokenHash = hashToken(token);
  
  // Use crypto.timingSafeEqual for constant-time comparison
  try {
    const tokenHashBuffer = Buffer.from(tokenHash, 'hex');
    const hashedTokenBuffer = Buffer.from(hashedToken, 'hex');
    
    if (tokenHashBuffer.length !== hashedTokenBuffer.length) {
      return false;
    }
    
    return crypto.timingSafeEqual(tokenHashBuffer, hashedTokenBuffer);
  } catch (error) {
    console.error('Error comparing token hashes:', error);
    return false;
  }
}

/**
 * Generate a random 6-character confirmation code (for UI display)
 */
export function generateConfirmationCode(): string {
  return crypto.randomBytes(3).toString('hex').toUpperCase();
}
