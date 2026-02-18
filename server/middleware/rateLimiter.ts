import { Request, Response, NextFunction } from 'express';

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

interface RateLimiterOptions {
  windowMs: number;
  max: number;
}

const ipRecords: Map<string, Map<string, RateLimitRecord>> = new Map();

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded)) {
    return forwarded[0];
  }
  return req.socket.remoteAddress || req.ip || 'unknown';
}

function cleanupExpiredRecords(endpointKey: string): void {
  const now = Date.now();
  const endpointRecords = ipRecords.get(endpointKey);
  if (endpointRecords) {
    for (const [ip, record] of endpointRecords.entries()) {
      if (now > record.resetTime) {
        endpointRecords.delete(ip);
      }
    }
  }
}

export function createRateLimiter(options: RateLimiterOptions) {
  const { windowMs, max } = options;
  const endpointKey = `${windowMs}-${max}-${Math.random()}`;
  
  if (!ipRecords.has(endpointKey)) {
    ipRecords.set(endpointKey, new Map());
  }

  setInterval(() => cleanupExpiredRecords(endpointKey), windowMs);

  return (req: Request, res: Response, next: NextFunction) => {
    const ip = getClientIp(req);
    const now = Date.now();
    const endpointRecords = ipRecords.get(endpointKey)!;
    
    let record = endpointRecords.get(ip);
    
    if (!record || now > record.resetTime) {
      record = {
        count: 0,
        resetTime: now + windowMs
      };
      endpointRecords.set(ip, record);
    }
    
    record.count++;
    
    if (record.count > max) {
      const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader('Retry-After', retryAfterSeconds.toString());
      return res.status(429).json({
        success: false,
        error: {
          code: 'RATE_LIMITED',
          message: 'Too many requests, please try again later'
        }
      });
    }
    
    next();
  };
}

export const contactRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 5
});

export const newsletterRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 5
});

export const customPackageRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 5
});

export const paymentRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 3
});
