/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://bhuynh702.github.io/personal-site';
export const AUTHOR_NAME = "Michael D'Angelo";
export const TWITTER_HANDLE = '@dangelosaurus';

// Base path for assets (set during build for GitHub Pages)
export const BASE_PATH =
  process.env.NODE_ENV === 'production' ? '/personal-site' : '';

/**
 * Prepends the base path to a URL for static assets.
 * Use this for native <img> tags and other non-Next.js assets.
 */
export function getAssetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
