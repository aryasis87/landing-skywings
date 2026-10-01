"use client";

export default function Error({ reset }) {
  return (
    <main className="flex min-h-[80vh] items-center px-6 pt-24">
      <div className="mx-auto max-w-md text-center">
        <p className="pass-label text-runway-ink">Penundaan teknis</p>
        <h1 className="mt-3 text-3xl font-extrabold text-aviation">Halaman ini gagal dimuat</h1>
        <p className="mt-3 leading-relaxed">Coba muat ulang. Bila masih gagal, kembali beberapa saat lagi.</p>
        <button type="button" onClick={reset} className="mt-6 rounded-lg bg-runway-ink px-6 py-3 font-semibold text-white hover:bg-aviation">Coba lagi</button>
      </div>
    </main>
  );
}
