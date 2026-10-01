import Link from "next/link";
import { LAYANAN_KHUSUS, SITE, TARIF, mulaiDari, rp } from "@/lib/penerbangan";

export const metadata = {
  title: "Tarif, Bagasi & Layanan Khusus",
  description: "Perbandingan tarif Hemat, Fleksibel, dan Bisnis SkyWings: bagasi, ubah jadwal, pengembalian dana, pilih kursi — plus check-in dan layanan untuk kursi roda, bayi, dan ibu hamil.",
  alternates: { canonical: `${SITE}/layanan` },
};

const CHECKIN = [
  ["Check-in online", "Dibuka 24 jam, ditutup 60 menit sebelum berangkat. Boarding pass langsung ke surel dan aplikasi."],
  ["Konter bandara", "Dibuka 3 jam, ditutup 45 menit sebelum berangkat. Bagasi tercatat diterima sampai konter tutup."],
  ["Gerbang", "Ditutup 15 menit sebelum berangkat. Kami tidak menunggu penumpang yang terlambat — itulah cara kami tetap tepat waktu."],
];

export default function Layanan() {
  const dasar = mulaiDari("CGK", "DPS");
  const baris = TARIF[0].isi.map(([k], i) => [k, ...TARIF.map((t) => t.isi[i][1])]);
  return (
    <main className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="pass-label text-runway-ink">Tarif & bagasi</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[1.02] font-extrabold text-aviation md:text-6xl">Bayar untuk yang Anda pakai, tahu sejak awal</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Semua harga sudah termasuk pajak bandara. Bagasi tambahan lebih murah dibeli saat memesan daripada di konter.</p>

        <div className="mt-12 overflow-x-auto rounded-2xl bg-white shadow-sm" tabIndex={0} role="region" aria-label="Tabel perbandingan tarif">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <caption className="sr-only">Perbandingan tarif Hemat, Fleksibel, dan Bisnis untuk rute Jakarta–Denpasar</caption>
            <thead>
              <tr className="border-b-2 border-aviation">
                <td className="p-5" />
                {TARIF.map((t) => (
                  <th key={t.nama} scope="col" className={`p-5 ${t.unggul ? "bg-aviation text-sky" : "text-aviation"}`}>
                    <span className="block text-xl font-bold">{t.nama}</span>
                    <span className="pass-code mt-1 block text-lg">{rp(dasar + t.tambah)}</span>
                    <span className={`text-xs font-normal ${t.unggul ? "text-sky/80" : ""}`}>CGK → DPS, mulai</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {baris.map(([k, ...v]) => (
                <tr key={k} className="border-b border-aviation/10 last:border-0">
                  <th scope="row" className="p-5 font-semibold text-aviation">{k}</th>
                  {v.map((x, i) => <td key={i} className={`p-5 ${TARIF[i].unggul ? "bg-aviation/5 font-semibold text-aviation" : ""}`}>{x}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section aria-labelledby="checkin" className="mt-20">
          <h2 id="checkin" className="text-3xl font-extrabold text-aviation md:text-4xl">Check-in & gerbang</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {CHECKIN.map(([j, d], i) => (
              <li key={j} className="notch relative rounded-2xl bg-white p-6 shadow-sm">
                <span className="pass-code text-4xl text-runway-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold text-aviation">{j}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="khusus" className="mt-20">
          <h2 id="khusus" className="text-3xl font-extrabold text-aviation md:text-4xl">Layanan khusus</h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-aviation/10 md:grid-cols-2">
            {LAYANAN_KHUSUS.map(([j, d]) => (
              <div key={j} className="bg-white p-6">
                <dt className="text-lg font-bold text-aviation">{j}</dt>
                <dd className="mt-2 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6">Butuh bantuan lain? <Link href="/kontak" className="font-semibold text-aviation-2 underline underline-offset-4 hover:text-aviation">Hubungi kami</Link> paling lambat 48 jam sebelum berangkat.</p>
        </section>
      </div>
    </main>
  );
}
