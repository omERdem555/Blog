import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(["tech", "personal"]),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  blog,
};