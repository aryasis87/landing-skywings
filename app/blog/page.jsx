// app/blog/page.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { blogPosts } from "../data/blog";

export default function Blog() {
  // Tampilkan semua artikel tanpa filter
  const posts = blogPosts;

  return (
      <section className="px-6 lg:px-16 py-10 lg:py-16 bg-sky">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-6xl font-extrabold mb-4 text-aviation"
          >
            Blog Terbaru
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-slate-ink"
          >
            Tips perjalanan, promo tiket, dan informasi terbaru untuk Anda
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Daftar Artikel */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {posts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                className="bg-sky rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-aviation">
                    {post.title}
                  </h2>
                  <p className="text-slate-ink mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-aviation-2 hover:text-aviation underline-offset-4 hover:underline font-medium flex items-center gap-2"
                  >
                    Baca Selengkapnya
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}
