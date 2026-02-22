import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.enum(["tech", "personal"]),
    tags: z.array(z.string()),
    draft: z.boolean(),
    updatedDate: z.date().optional(),
    coverImage: z.string().optional()
  })
});

export const collections = { blog };