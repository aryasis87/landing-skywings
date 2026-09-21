export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://landing-skywings.vercel.app/sitemap.xml",
    host: "https://landing-skywings.vercel.app",
  };
}
