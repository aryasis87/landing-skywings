// app/blog/[slug]/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { blogPosts } from "../../data/blog";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Komponen ClientOnly: memastikan konten hanya dirender di sisi client
function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return <>{children}</>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const found = blogPosts.find((p) => p.slug === slug);
    setPost(found);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-slate-ink">Artikel tidak ditemukan</p>
      </div>
    );
  }

  // Hitung waktu baca (1 menit per 1000 karakter)
  const readingTime = Math.ceil(post.content.length / 1000);
  // Ambil 3 artikel terkait (exclude artikel saat ini)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <ClientOnly>
      <section className="px-6 lg:px-16 py-10 lg:py-16 bg-sky">
        {/* Hero Header dengan background image dan gradient overlay */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-lg"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-2 opacity-70"></div>
          <motion.div variants={fadeInUp} className="absolute bottom-6 left-6 text-sky">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span>Terbit {post.date}</span>
              <span>•</span>
              <span>{readingTime} menit baca</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Konten Artikel */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="article-body mb-12">
            {/* Render HTML konten dengan dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          {/* Tombol Share Sosial */}
          <motion.div variants={fadeInUp} className="flex items-center space-x-4 mb-12">
            <span className="font-semibold">Share:</span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-boarding hover:text-aviation"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(post.url)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-boarding hover:text-boarding"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-aviation hover:text-aviation"
            >
              <FaLinkedinIn size={24} />
            </a>
          </motion.div>

          {/* Artikel Terkait */}
          <motion.div variants={fadeInUp} className="mt-12">
            <h2 className="text-3xl font-bold text-aviation mb-6">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link key={relPost.id} href={`/blog/${relPost.slug}`}>
                  <motion.div
                    variants={fadeInUp}
                    className="bg-sky rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-40">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-aviation mb-2">{relPost.title}</h3>
                      <p className="text-slate-ink text-sm">{relPost.excerpt}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          <Link href="/blog" className="mt-12 inline-block">
            <motion.button
              variants={fadeInUp}
              className="px-8 py-4 bg-boarding text-sky rounded-lg hover:bg-aviation transition"
            >
              Kembali ke Blog
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </ClientOnly>
  );
}
