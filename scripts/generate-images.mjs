import { promises as fs } from 'fs';
import path from 'path';

function generatePlaceholder(title) {
  const hue = Array.from(title).reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 360;
  const color = `hsl(${hue}, 70%, 80%)`;
  const first = title.trim()[0] ?? '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="288" height="192"><rect width="100%" height="100%" fill="${color}"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="sans-serif" font-size="96" fill="#555">${first}</text></svg>`;
  return svg;
}

async function run() {
  const postsDir = path.join('src', 'content', 'blog');
  const outDir = path.join('public', 'img', 'posts');
  await fs.mkdir(outDir, { recursive: true });
  const files = await fs.readdir(postsDir);
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const filePath = path.join(postsDir, file);
    const content = await fs.readFile(filePath, 'utf8');
    const match = content.match(/title:\s*(.+)/);
    const title = match ? match[1].replace(/^"|"$/g, '').trim() : path.basename(file, '.md');
    const slug = path.basename(file, '.md');
    const svg = generatePlaceholder(title);
    await fs.writeFile(path.join(outDir, slug + '.svg'), svg);
  }
}

run().catch(err => { console.error(err); process.exit(1); });
