/**
 * Generate a lightweight placeholder image for a blog post.
 * The image is an SVG data URI containing the first letter of the title.
 * Colors are derived from the title so each post gets a unique visual.
 *
 * @param title Post title used to derive the placeholder.
 * @returns Data URI string representing the SVG image.
 */
export function generatePlaceholder(title: string): string {
  const hue = Array.from(title).reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 360;
  const color = `hsl(${hue}, 70%, 80%)`;
  const first = title.trim()[0] ?? '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90">
    <rect width="100%" height="100%" fill="${color}"/>
    <text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="sans-serif" font-size="48" fill="#555">${first}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}
