/**
 * Determine whether cookies should be marked as `secure`.
 * In production we only force secure cookies when the public URL
 * is using HTTPS (or when explicitly overridden via env).
 */
export function shouldUseSecureCookies(): boolean {
  if (process.env.FORCE_SECURE_COOKIES === 'true') {
    return true;
  }

  if (process.env.NODE_ENV !== 'production') {
    return false;
  }

  const publicUrl = process.env.NEXTAUTH_URL || process.env.APP_URL || '';
  return publicUrl.startsWith('https://');
}
