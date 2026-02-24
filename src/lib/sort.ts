import type { CollectionEntry } from "astro:content";

export function sortPostsByDateDesc(
  posts: CollectionEntry<"blog">[]
) {
  return posts.sort(
    (a, b) =>
      b.data.publishDate.getTime() -
      a.data.publishDate.getTime()
  );
}