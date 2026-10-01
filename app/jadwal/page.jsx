import { SITE } from "@/lib/penerbangan";
import JadwalSaring from "../components/JadwalSaring";

export const metadata = {
  title: "Jadwal & Harga",
  description: "Jadwal penerbangan SkyWings dari Jakarta, Surabaya, Denpasar, Yogyakarta, Lombok, dan Labuan Bajo — jam berangkat dan tiba waktu setempat, hari terbang, dan harga mulai.",
  alternates: { canonical: `${SITE}/jadwal` },
};

export default function Jadwal() {
  return (
    <main className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        <p className="pass-label text-runway-ink">Jadwal & harga</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[1.02] font-extrabold text-aviation md:text-6xl">Delapan belas penerbangan, semua langsung</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Jam berangkat dan tiba ditulis dalam waktu setempat. Penerbangan ke Bali, Lombok, dan Labuan Bajo tiba dalam WITA, satu jam lebih cepat dari WIB.</p>
        <JadwalSaring />
        <p className="mt-8 text-sm">Jadwal dan harga adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
