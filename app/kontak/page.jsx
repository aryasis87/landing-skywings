import { SITE } from "@/lib/penerbangan";
import FormKontak from "../components/FormKontak";

export const metadata = {
  title: "Kontak & Bantuan",
  description: "Hubungi layanan pelanggan SkyWings untuk pemesanan, bagasi, perubahan jadwal, pengembalian dana, dan layanan khusus. Siapkan kode pemesanan enam huruf Anda.",
  alternates: { canonical: `${SITE}/kontak` },
};

const JAM = [
  ["Layanan pelanggan", "Setiap hari, 05.00–23.00 WIB"],
  ["Bagasi hilang atau rusak", "Laporkan sebelum meninggalkan area kedatangan, atau paling lambat 7 hari lewat formulir ini"],
  ["Kantor pusat", "Tangerang, Banten"],
];

export default function Kontak() {
  return (
    <main className="px-6 pt-32 pb-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="pass-label text-runway-ink">Kontak & bantuan</p>
          <h1 className="mt-4 text-[2.7rem] leading-[1.02] font-extrabold text-aviation md:text-5xl">Siapkan kode pemesanan Anda</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed">Enam huruf di e-tiket, misalnya <span className="pass-code text-aviation">KQ7RTM</span>. Dengan kode itu kami bisa langsung membuka pemesanan Anda.</p>
          <dl className="mt-10 space-y-5">
            {JAM.map(([t, d]) => (
              <div key={t} className="border-l-2 border-runway pl-4">
                <dt className="pass-label">{t}</dt>
                <dd className="mt-1 font-semibold text-aviation">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <FormKontak />
      </div>
    </main>
  );
}
