import Image from "next/image";
import Link from "next/link";

const tanggal = (iso) => new Date(`${iso}T12:00:00+07:00`).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

// Dirender di server: isi artikel ada di HTML awal untuk mesin pencari dan pembaca tanpa JavaScript.
export default function BlogArticle({ post, related, readingTime }) {
  const bagikan = [
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.url)}`],
    ["X", `https://twitter.com/intent/tweet?url=${encodeURIComponent(post.url)}&text=${encodeURIComponent(post.title)}`],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.url)}`],
  ];
  return (
    <main className="px-6 pt-28 pb-24">
      <article className="mx-auto max-w-3xl">
        <nav aria-label="Remah roti" className="pass-label flex gap-2">
          <Link href="/blog" className="text-runway-ink hover:text-aviation">Blog</Link>
          <span aria-hidden="true">/</span>
          <span>{post.category}</span>
        </nav>
        <h1 className="mt-5 text-[2.4rem] leading-[1.05] font-extrabold text-aviation md:text-5xl">{post.title}</h1>
        <p className="pass-label mt-4">{tanggal(post.date)} · {readingTime} menit baca</p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.image} alt="" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>
        <div className="article-body mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div aria-hidden="true" className="perforation mt-12 text-aviation" />
        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="font-semibold text-aviation">Bagikan:</span>
          {bagikan.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer" className="font-semibold text-aviation-2 underline underline-offset-4 hover:text-aviation">{n}<span className="sr-only"> (tab baru)</span></a>)}
        </p>
      </article>

      <section aria-labelledby="terkait" className="mx-auto mt-16 max-w-6xl">
        <h2 id="terkait" className="text-3xl font-extrabold text-aviation">Artikel lain</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block h-full rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg">
                <span className="pass-label text-runway-ink">{p.category}</span>
                <span className="mt-2 block text-xl font-bold text-aviation">{p.title}</span>
                <span className="mt-2 block text-sm leading-relaxed">{p.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
