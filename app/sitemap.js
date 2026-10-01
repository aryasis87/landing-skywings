import { blogPosts } from "./data/blog";

const SITE = "https://landing-skywings.vercel.app";

export default function sitemap() {
  const pages = ["/jadwal", "/layanan", "/tentang", "/kontak", "/blog"].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const posts = blogPosts.map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [{ url: SITE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, ...pages, ...posts];
}
