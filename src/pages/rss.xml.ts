import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const SITE_URL = "https://omererdemblog.vercel.app/";

export async function GET() {
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft === false;
  });

  posts.sort((a, b) =>
    b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  return rss({
    title: "Blog",
    description: "Kişisel ve teknik yazılar",
    site: SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}/`
    }))
  });
}