import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    cover: z.string(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.date(),
    category: z.string(),
    tagline: z.string(),
    image: z.string(),
    theme: z.object({
      background: z.string(),
      textColor: z.string(),
      accentColor: z.string(),
      imagePosition: z.enum(['right', 'bottom']).optional(),
    }),
  }),
});

export const collections = {
  posts,
  news,
};

