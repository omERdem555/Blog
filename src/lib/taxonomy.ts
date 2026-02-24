import { getCollection } from "astro:content";

export async function getTaxonomy() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const categories = new Map<string, number>();
  const tags = new Map<string, number>();

  for (const post of posts) {
    // Category count
    const category = post.data.category;
    categories.set(
      category,
      (categories.get(category) || 0) + 1
    );

    // Tags count
    for (const tag of post.data.tags) {
      tags.set(tag, (tags.get(tag) || 0) + 1);
    }
  }

  return {
    categories: Array.from(categories.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count),

    tags: Array.from(tags.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  };
}