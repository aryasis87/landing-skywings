import Image from "next/image";
import { ARMADA, BANDARA, JADWAL, OTP, SITE } from "@/lib/penerbangan";

export const metadata = {
  title: "Tentang & Armada",
  description: "SkyWings: maskapai antarkota fiktif dengan hub di Jakarta, dua belas pesawat, dan satu ukuran keberhasilan — berangkat tepat waktu.",
  alternates: { canonical: `${SITE}/tentang` },
};

const PRINSIP = [
  ["Gerbang ditutup tepat waktu", "Satu penumpang yang terlambat tidak boleh membuat 179 penumpang lain ikut terlambat."],
  ["Harga utuh sejak awal", "Pajak bandara dan biaya layanan sudah masuk di harga yang Anda lihat pertama kali."],
  ["Angka diterbitkan", "Ketepatan waktu tiap bulan kami tulis di beranda, termasuk bulan yang buruk."],
];

export default function Tentang() {
  const pesawat = ARMADA.reduce((s, a) => s + a.jumlah, 0);
  const kursi = ARMADA.reduce((s, a) => s + a.jumlah * a.kursi, 0);
  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="pass-label text-runway-ink">Tentang SkyWings</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[1.02] font-extrabold text-aviation md:text-6xl">Maskapai kecil yang terobsesi pada jam</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">SkyWings terbang dari Jakarta ke empat tujuan wisata, ditambah rute pendek dari Surabaya. Kami sengaja tidak melayani banyak kota: lebih sedikit rute berarti lebih banyak pesawat cadangan ketika ada yang perlu diperbaiki.</p>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-aviation/10 grid-cols-2 sm:grid-cols-4">
          {[["Pesawat", pesawat], ["Kursi", kursi.toLocaleString("id-ID")], ["Bandara", Object.keys(BANDARA).length], ["Penerbangan terjadwal", JADWAL.length]].map(([t, d]) => (
            <div key={t} className="bg-white p-6">
              <dt className="pass-label">{t}</dt>
              <dd className="pass-code mt-2 text-4xl text-aviation">{d}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section aria-labelledby="armada" className="mt-20 bg-aviation px-6 py-20 text-sky">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 id="armada" className="text-3xl font-extrabold text-sky md:text-4xl">Armada</h2>
            <ul className="mt-8 space-y-6">
              {ARMADA.map((a) => (
                <li key={a.tipe} className="border-t border-sky/20 pt-5">
                  <p className="flex items-baseline justify-between gap-4"><span className="text-xl font-bold">{a.tipe}</span><span className="pass-code text-3xl text-runway">{a.jumlah}×</span></p>
                  <p className="mt-1 text-sky/80">{a.kursi} kursi · {a.rute}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure>
            <Image src="/images/rute/pesawat-gerbang.webp" alt="Pesawat jet terparkir di gerbang bandara sementara petugas darat memuat bagasi" width={960} height={640} className="h-auto w-full rounded-2xl" />
            <figcaption className="mt-3 text-xs text-sky/70">Foto suasana: World Travel Adventures, StockSnap (CC0). Bukan pesawat SkyWings.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="prinsip" className="mx-auto mt-20 max-w-6xl px-6">
        <h2 id="prinsip" className="text-3xl font-extrabold text-aviation md:text-4xl">Tiga hal yang tidak kami tawar</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {PRINSIP.map(([j, d]) => (
            <li key={j} className="notch relative rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-aviation">{j}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm">Ketepatan waktu September 2026: {OTP[OTP.length - 1][1].toLocaleString("id-ID")}%. SkyWings adalah maskapai fiktif; semua angka di halaman ini contoh purwarupa desain.</p>
      </section>
    </main>
  );
}
