// app/blog/[slug]/page.jsx
// Server component: artikel di-prerender statis, lengkap dengan judul, deskripsi, dan gambar OG
// per artikel. Dulu seluruh isi dirender di browser (ClientOnly), sehingga HTML-nya kosong.
import { notFound } from "next/navigation";
import { blogPosts } from "../../data/blog";
import BlogArticle from "./BlogArticle";

const SITE = "https://landing-skywings.vercel.app";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const plain = post.content.replace(/<[^>]+>/g, " ");
  const readingTime = Math.max(1, Math.round(plain.split(/\s+/).filter(Boolean).length / 200));
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${SITE}${post.image}`,
    url: `${SITE}/blog/${post.slug}`,
    publisher: { "@type": "Organization", name: "SkyWings", url: SITE },
  };

  return (
    <>
      <BlogArticle post={post} related={related} readingTime={readingTime} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
