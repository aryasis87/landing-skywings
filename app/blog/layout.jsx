// app/blog/layout.jsx — metadata untuk /blog (halaman daftarnya client component).
// Halaman artikel menimpanya lewat generateMetadata di [slug]/page.jsx.
export const metadata = {
  title: { default: "Blog Perjalanan", template: "%s — SkyWings" },
  description: "Tips memesan tiket, berburu promo, packing, dan kabar teknologi penerbangan dari SkyWings.",
  alternates: { canonical: "https://landing-skywings.vercel.app/blog" },
};

export default function BlogLayout({ children }) {
  return children;
}
