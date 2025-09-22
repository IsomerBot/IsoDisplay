import path from 'path';

const DEFAULT_UPLOAD_DIR = './uploads';

/**
 * Resolve the base uploads directory. This always returns an absolute path
 * and respects the FILE_STORAGE_PATH environment variable when present.
 */
export function getUploadsBasePath(customBasePath?: string): string {
  const rawPath = customBasePath ?? process.env.FILE_STORAGE_PATH ?? DEFAULT_UPLOAD_DIR;
  return path.isAbsolute(rawPath) ? rawPath : path.resolve(process.cwd(), rawPath);
}

/**
 * Helper to resolve paths within the uploads directory.
 */
export function resolveUploadsPath(...segments: string[]): string {
  return path.join(getUploadsBasePath(), ...segments);
}
