import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../data/blog";

const tanggal = (iso) => new Date(`${iso}T12:00:00+07:00`).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

export default function Blog() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const [utama, ...lain] = posts;
  return (
    <main className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="pass-label text-runway-ink">Blog perjalanan</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[1.02] font-extrabold text-aviation md:text-6xl">Catatan sebelum terbang</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Cara memesan, berburu harga, packing, dan apa yang terjadi di balik layar penerbangan.</p>

        <Link href={`/blog/${utama.slug}`} className="group mt-12 grid overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="relative aspect-[16/10] md:aspect-auto">
            <Image src={utama.image} alt="" fill priority sizes="(max-width: 768px) 100vw, 600px" className="object-cover" />
          </div>
          <div className="p-7 md:p-10">
            <p className="pass-label text-runway-ink">{utama.category} · {tanggal(utama.date)}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-aviation">{utama.title}</h2>
            <p className="mt-3 leading-relaxed">{utama.excerpt}</p>
            <span className="pass-label mt-6 inline-block border-b-2 border-aviation pb-1 text-aviation">Baca artikel</span>
          </div>
        </Link>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lain.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block h-full overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg">
                <div className="relative aspect-[16/10]">
                  <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, 360px" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="pass-label text-runway-ink">{p.category} · {tanggal(p.date)}</p>
                  <h2 className="mt-2 text-xl font-bold text-aviation">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed">{p.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs">Foto artikel: rawpixel, Wikimedia Commons, dan StockSnap (CC0).</p>
      </div>
    </main>
  );
}
