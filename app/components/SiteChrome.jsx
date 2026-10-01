import Link from 'next/link';

const NAV = [['/jadwal', 'Jadwal & harga'], ['/layanan', 'Tarif & bagasi'], ['/tentang', 'Tentang'], ['/blog', 'Blog'], ['/kontak', 'Kontak']];

function Logo({ terang = false }) {
  return (
    <span className={`flex items-center gap-2 font-[family-name:var(--font-outfit)] text-xl font-extrabold tracking-tight ${terang ? 'text-sky' : 'text-aviation'}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 -rotate-45 fill-current text-runway"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" /></svg>
      SkyWings
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-aviation/10 bg-sky/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" aria-label="SkyWings, ke beranda"><Logo /></Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:flex">
          {NAV.map(([h, l]) => <Link key={h} href={h} className="text-sm font-semibold text-slate-ink hover:text-aviation">{l}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/#cari" className="hidden rounded-lg bg-runway-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-aviation sm:inline-flex">Cari penerbangan</Link>
          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-lg border border-aviation/20 px-3 py-2 text-sm font-semibold text-aviation [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">Menu</span><span className="hidden group-open:inline">Tutup</span>
            </summary>
            <nav aria-label="Navigasi seluler" className="absolute right-0 mt-2 w-56 rounded-xl border border-aviation/10 bg-white p-2 shadow-xl">
              {[['/#cari', 'Cari penerbangan'], ...NAV].map(([h, l]) => <Link key={h} href={h} className="block rounded-lg px-3 py-2.5 font-semibold text-aviation hover:bg-sky-2">{l}</Link>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-aviation px-6 text-sky">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <Logo terang />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-sky/80">Maskapai antarkota dengan hub di Jakarta. Enam bandara, delapan belas penerbangan terjadwal, satu janji: berangkat tepat waktu.</p>
        </div>
        <nav aria-label="Terbang">
          <p className="pass-label mb-4 text-sky/80">Terbang</p>
          <ul className="space-y-2.5 text-sm text-sky/80">
            <li><Link href="/jadwal" className="hover:text-sky">Jadwal & harga</Link></li>
            <li><Link href="/layanan" className="hover:text-sky">Tarif, bagasi & layanan khusus</Link></li>
            <li><Link href="/blog" className="hover:text-sky">Blog perjalanan</Link></li>
          </ul>
        </nav>
        <nav aria-label="Perusahaan">
          <p className="pass-label mb-4 text-sky/80">Perusahaan</p>
          <ul className="space-y-2.5 text-sm text-sky/80">
            <li><Link href="/tentang" className="hover:text-sky">Tentang & armada</Link></li>
            <li><Link href="/kontak" className="hover:text-sky">Kontak & bantuan</Link></li>
          </ul>
        </nav>
      </div>
      <div aria-hidden="true" className="perforation mx-auto max-w-6xl text-sky" />
      <p className="pass-label mx-auto max-w-6xl py-6 leading-[1.9] text-sky/70">© 2026 SkyWings · Maskapai fiktif — nomor penerbangan, harga, dan angka di situs ini adalah contoh purwarupa desain</p>
    </footer>
  );
}
