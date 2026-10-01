import Image from 'next/image';
import Link from 'next/link';
import { BANDARA, FAQ as DAFTAR, OTP, PAPAN, RUTE, TARIF, mulaiDari, rp } from '@/lib/penerbangan';
import { blogPosts } from '@/app/data/blog';
import CariPenerbangan from './CariPenerbangan';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#cfe2f5] to-sky px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="pass-label text-runway-ink">Maskapai antarkota · hub Jakarta</p>
          <h1 className="mt-5 text-[2.8rem] leading-[1.02] font-extrabold text-aviation sm:text-6xl">Berangkat tepat waktu, sampai dengan tenang.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Delapan belas penerbangan terjadwal ke Bali, Yogyakarta, Lombok, dan Labuan Bajo. Harga di layar sudah termasuk pajak bandara — tidak ada tambahan di halaman pembayaran.
          </p>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[['Tepat waktu', `${OTP[OTP.length - 1][1].toLocaleString('id-ID')}%`], ['Bandara', String(Object.keys(BANDARA).length)], ['Umur armada', '4,1 th']].map(([t, d]) => (
              <div key={t} className="border-l-2 border-runway pl-3">
                <dt className="pass-label">{t}</dt>
                <dd className="pass-code mt-1 text-2xl text-aviation">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <CariPenerbangan />
      </div>
    </section>
  );
}

export function PapanKeberangkatan() {
  return (
    <section className="bg-aviation px-6 py-20 text-sky md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="pass-label text-runway">Keberangkatan · Soekarno-Hatta (CGK)</p>
            <h2 className="mt-3 text-[2.2rem] leading-[1.06] font-extrabold text-sky md:text-5xl">Papan hari Kamis</h2>
          </div>
          <Link href="/jadwal?dari=CGK" className="pass-label border-b border-sky/40 pb-1 text-sky hover:border-sky">Semua jadwal dari CGK</Link>
        </div>
        <div className="mt-10 overflow-x-auto rounded-xl bg-[#071a33] p-2" tabIndex={0} role="region" aria-label="Papan keberangkatan CGK">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <caption className="sr-only">Contoh papan keberangkatan SkyWings dari Jakarta pada hari Kamis</caption>
            <thead>
              <tr>{['Jam', 'Penerbangan', 'Tujuan', 'Gerbang', 'Status'].map((h) => <th key={h} scope="col" className="pass-label px-4 py-3 text-sky/70">{h}</th>)}</tr>
            </thead>
            <tbody className="pass-code text-lg">
              {PAPAN.map((f) => (
                <tr key={f.no} className="border-t border-sky/10">
                  <td className="px-4 py-3 text-[#ffd166]">{f.berangkat}</td>
                  <td className="px-4 py-3">{f.no}</td>
                  <td className="px-4 py-3">{BANDARA[f.ke].kota.toUpperCase()} <span className="text-sky/60">{f.ke}</span></td>
                  <td className="px-4 py-3">{f.gerbang}</td>
                  <td className={`px-4 py-3 ${f.status === 'Boarding' ? 'text-[#7cd4ff]' : f.status === 'Berangkat' ? 'text-sky/60' : 'text-[#8ee6a6]'}`}>{f.status.toUpperCase()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-sky/70">Contoh papan untuk purwarupa desain; jam dalam WIB.</p>
      </div>
    </section>
  );
}

export function Rute() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="pass-label text-runway-ink">Rute</p>
        <h2 className="mt-4 max-w-2xl text-[2.2rem] leading-[1.06] font-extrabold text-aviation md:text-5xl">Empat tujuan dari Jakarta</h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RUTE.map((r) => (
            <li key={r.kode}>
              <Link href={`/jadwal?dari=CGK&ke=${r.kode}`} className="group block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={r.foto} alt={r.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="flex items-baseline justify-between">
                    <span className="text-xl font-bold text-aviation">{r.judul}</span>
                    <span className="pass-code text-slate-ink">CGK → {r.kode}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{r.ket}</p>
                  <p className="mt-4 text-sm">mulai <strong className="text-aviation">{rp(mulaiDari('CGK', r.kode))}</strong></p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs">Foto: rawpixel & Wikimedia Commons (CC0).</p>
      </div>
    </section>
  );
}

export function Tarif() {
  const dasar = mulaiDari('CGK', 'DPS');
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="pass-label text-runway-ink">Tarif · contoh CGK → DPS</p>
            <h2 className="mt-4 max-w-2xl text-[2.2rem] leading-[1.06] font-extrabold text-aviation md:text-5xl">Tiga tarif, isinya tertulis jelas</h2>
          </div>
          <Link href="/layanan" className="pass-label shrink-0 border-b-2 border-aviation pb-1 text-aviation">Rincian tarif & bagasi</Link>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {TARIF.map((t) => (
            <li key={t.nama} className={`notch relative rounded-2xl p-7 ${t.unggul ? 'bg-aviation text-sky' : 'bg-sky'}`}>
              <h3 className={`text-2xl font-bold ${t.unggul ? 'text-sky' : 'text-aviation'}`}>{t.nama}</h3>
              <p className={`pass-code mt-3 text-3xl ${t.unggul ? 'text-sky' : 'text-aviation'}`}>{rp(dasar + t.tambah)}</p>
              <div aria-hidden="true" className={`perforation mt-5 ${t.unggul ? 'text-sky' : 'text-aviation'}`} />
              <dl className="mt-4 space-y-2.5 text-sm">
                {t.isi.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className={t.unggul ? 'text-sky/75' : ''}>{k}</dt>
                    <dd className={`text-right font-semibold ${t.unggul ? 'text-sky' : 'text-aviation'}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TepatWaktu() {
  const min = 80;
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="pass-label text-runway-ink">Ketepatan waktu</p>
          <h2 className="mt-4 text-[2.2rem] leading-[1.06] font-extrabold text-aviation md:text-5xl">Kami menerbitkan angkanya tiap bulan</h2>
          <p className="mt-5 max-w-md leading-relaxed">Persentase penerbangan yang lepas dari gerbang paling lambat 15 menit dari jadwal. Bila terlambat lebih dari dua jam, Anda boleh pindah penerbangan atau meminta uang kembali.</p>
        </div>
        <figure className="rounded-2xl bg-white p-4 shadow-sm sm:p-8">
          <ul className="flex h-56 items-end gap-1.5 sm:gap-5" aria-label="Ketepatan waktu per bulan">
            {OTP.map(([b, p]) => (
              <li key={b} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2">
                <span className="pass-code text-[0.68rem] text-aviation sm:text-sm">{p.toLocaleString('id-ID')}%</span>
                <span aria-hidden="true" className="w-full rounded-t-md bg-boarding" style={{ height: `${((p - min) / (100 - min)) * 100}%` }} />
                <span className="pass-label">{b}</span>
              </li>
            ))}
          </ul>
          <figcaption className="mt-5 border-t border-aviation/10 pt-4 text-sm">Sumbu dimulai dari 80%. Angka contoh purwarupa desain, April–September 2026.</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="pass-label text-runway-ink">Pertanyaan</p>
          <h2 className="mt-4 text-[2.2rem] leading-[1.06] font-extrabold text-aviation md:text-5xl">Sebelum ke bandara</h2>
        </div>
        <div className="divide-y divide-aviation/10 border-y border-aviation/10">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold text-aviation [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="pass-code text-runway-ink transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogTeaser() {
  const tampil = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="pass-label text-runway-ink">Blog</p>
            <h2 className="mt-4 text-[2.2rem] leading-[1.06] font-extrabold text-aviation md:text-5xl">Catatan sebelum terbang</h2>
          </div>
          <Link href="/blog" className="pass-label shrink-0 border-b-2 border-aviation pb-1 text-aviation">Semua artikel</Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {tampil.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block h-full rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg">
                <span className="pass-label text-runway-ink">{p.category}</span>
                <span className="mt-3 block text-xl font-bold text-aviation">{p.title}</span>
                <span className="mt-2 block text-sm leading-relaxed">{p.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

