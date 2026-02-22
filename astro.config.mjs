import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://omererdemblog.vercel.app/", // Gerçek domain
  integrations: [sitemap()]
});