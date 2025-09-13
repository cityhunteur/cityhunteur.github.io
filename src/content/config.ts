import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    category: z.string(),
    cover: z.string(),
  }),
});

export const collections = {
  posts,
};

