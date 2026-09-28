// app/blog/[slug]/BlogArticle.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../../utils/animations";

// Isi artikel sengaja TIDAK dianimasikan dari keadaan tersembunyi: teksnya harus terbaca
// di HTML awal (mesin pencari, pembaca tanpa JavaScript). Animasi hanya untuk hiasan.
export default function BlogArticle({ post, related, readingTime }) {
  return (
    <section className="px-6 lg:px-16 py-10 lg:py-16 bg-sky">
      <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
        <Image src={post.image} alt="" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 1100px" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aviation opacity-80"></div>
        <div className="absolute bottom-6 left-6 right-6 text-sky">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm">
            <span>Terbit {post.date}</span>
            <span aria-hidden="true">•</span>
            <span>{readingTime} menit baca</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="article-body mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="flex items-center space-x-4 mb-12">
          <span className="font-semibold">Bagikan:</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.url)}`} target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke Facebook" className="text-boarding hover:text-aviation">
            <FaFacebookF size={24} />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(post.url)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke X (Twitter)" className="text-boarding hover:text-aviation">
            <FaTwitter size={24} />
          </a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.url)}`} target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke LinkedIn" className="text-aviation hover:text-boarding">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12">
          <h2 className="text-3xl font-bold text-aviation mb-6">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((relPost) => (
              <Link key={relPost.id} href={`/blog/${relPost.slug}`}>
                <motion.div variants={fadeInUp} className="bg-sky rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-40">
                    <Image src={relPost.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
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

        <Link href="/blog" className="mt-12 inline-block px-8 py-4 bg-aviation text-sky rounded-lg hover:bg-aviation-2 transition">
          Kembali ke Blog
        </Link>
      </div>
    </section>
  );
}
