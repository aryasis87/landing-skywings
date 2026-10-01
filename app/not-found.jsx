import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center px-6 pt-24">
      <div className="notch relative mx-auto w-full max-w-md rounded-2xl bg-white shadow-lg">
        <p className="pass-label rounded-t-2xl bg-aviation px-6 py-3 text-sky">Gerbang tidak ditemukan</p>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-6 pt-6">
          <p className="pass-code text-4xl text-aviation">SW</p>
          <div aria-hidden="true" className="route-dash w-16 text-aviation" />
          <p className="pass-code text-right text-4xl text-runway-ink">404</p>
        </div>
        <h1 className="px-6 pt-4 text-2xl font-extrabold text-aviation">Halaman ini tidak ada di jadwal kami</h1>
        <p className="px-6 pt-2 leading-relaxed">Mungkin alamatnya salah ketik, atau penerbangannya sudah lama tidak beroperasi.</p>
        <div aria-hidden="true" className="perforation mx-6 mt-6 text-aviation" />
        <div className="flex flex-wrap gap-3 px-6 pt-4 pb-6">
          <Link href="/jadwal" className="rounded-lg bg-runway-ink px-5 py-3 font-semibold text-white hover:bg-aviation">Lihat jadwal</Link>
          <Link href="/" className="rounded-lg border border-aviation/25 px-5 py-3 font-semibold text-aviation hover:border-aviation">Ke beranda</Link>
        </div>
      </div>
    </main>
  );
}
