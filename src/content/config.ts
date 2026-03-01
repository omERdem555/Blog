import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(5),
    
    description: z
      .string()
      .min(20)
      .max(500),

    publishDate: z.date().refine(
      (date) => date <= new Date(),
      "publishDate gelecekte olamaz"
    ),

    updatedDate: z.date().optional(),

    category: z.string(),

    tags: z.array(z.string().min(2)).min(1),

    draft: z.boolean().default(false),

    coverImage: z
      .string()
      .optional()
  })
});

export const collections = { blog };