const BLOCK_SEPARATOR = /\r?\n\s*\n/;

const cleanBlock = (block: string) =>
  block
    .replace(/<[^>]*>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]\([^)]*\)/g, '$1')
    .replace(/[`*_>#~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const getPlaintextBlocks = (markdown: string): string[] =>
  markdown
    .split(BLOCK_SEPARATOR)
    .map(cleanBlock)
    .filter(Boolean);

export const getExcerptParagraphs = (markdown: string, limit = 2): string[] => {
  const blocks = getPlaintextBlocks(markdown);
  if (blocks.length === 0) {
    return [];
  }

  const candidates = blocks.filter((block) => block.split(' ').length > 4);
  const source = candidates.length > 0 ? candidates : blocks;
  return source.slice(0, limit);
};

export const getMetaDescription = (markdown: string, maxLength = 160): string => {
  const [first] = getExcerptParagraphs(markdown, 1);
  if (!first) {
    return '';
  }

  if (first.length <= maxLength) {
    return first;
  }

  const truncated = first.slice(0, maxLength + 1);
  const lastSpace = truncated.lastIndexOf(' ');
  const safe = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
  return `${safe.replace(/[.,;:-]+$/, '')}…`;
};

