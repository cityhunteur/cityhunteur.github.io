/**
 * Format a date into a readable string
 * @param date The date to format
 * @returns Formatted date string (e.g., "January 24, 2016")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
