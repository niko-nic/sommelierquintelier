export function sanitizeString(input: string): string {
  if (typeof input !== 'string') return input;
  return input
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export function sanitizeObject<T extends Record<string, unknown>>(
  obj: T,
  keys: (keyof T)[]
): T {
  const result = { ...obj };
  for (const key of keys) {
    const value = result[key];
    if (typeof value === 'string') {
      (result as Record<string, unknown>)[key as string] = sanitizeString(value);
    }
  }
  return result;
}
