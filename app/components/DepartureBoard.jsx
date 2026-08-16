'use client';

import { motion } from 'framer-motion';

/* ============================================================================
   Bagian penanda SkyWings: PAPAN KEBERANGKATAN.
   Rute biasanya dipajang sebagai kartu bergambar pantai. Di sini dipakai
   bentuk yang benar-benar dikenal penumpang — papan keberangkatan bandara:
   kode tiga huruf, jam, gerbang, dan status. Informasinya padat, terbaca
   sekali lihat, dan tidak bisa tertukar dengan varian lain.
   ========================================================================== */

const penerbangan = [
  { kode: 'SW 214', ke: 'Denpasar', iata: 'DPS', jam: '06.20', durasi: '1j 50m', gerbang: 'A4', status: 'Tepat waktu', mulai: '748.000' },
  { kode: 'SW 331', ke: 'Yogyakarta', iata: 'JOG', jam: '08.05', durasi: '1j 15m', gerbang: 'B2', status: 'Tepat waktu', mulai: '512.000' },
  { kode: 'SW 502', ke: 'Lombok', iata: 'LOP', jam: '10.40', durasi: '2j 05m', gerbang: 'A9', status: 'Boarding', mulai: '835.000' },
  { kode: 'SW 118', ke: 'Labuan Bajo', iata: 'LBJ', jam: '13.15', durasi: '2j 30m', gerbang: 'C1', status: 'Tepat waktu', mulai: '1.240.000' },
  { kode: 'SW 447', ke: 'Sorong', iata: 'SOQ', jam: '16.50', durasi: '4j 10m', gerbang: 'C6', status: 'Tepat waktu', mulai: '1.890.000' },
];

const warnaStatus = {
  Boarding: 'text-runway',
  'Tepat waktu': 'text-sky/85',
};

export default function DepartureBoard() {
  return (
    <section id="rute" className="relative overflow-hidden bg-aviation py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="pass-label mb-5 text-runway">Papan Keberangkatan</p>
            <h2 className="text-[2rem] leading-[1.1] font-extrabold text-sky md:text-[2.7rem]">
              Lima rute yang paling sering diterbangkan
            </h2>
          </div>
          <p className="pass-label shrink-0 text-sky/65">Jakarta (CGK) · Hari ini</p>
        </div>

        {/* Papan: tabel di layar lebar, kartu bertumpuk di layar sempit */}
        <div className="border border-sky/15">
          {/* Kepala tabel — hanya muncul mulai md */}
          <div className="hidden border-b border-sky/15 bg-aviation-2 md:grid md:grid-cols-[auto_1.4fr_auto_auto_auto_auto] md:gap-6 md:px-6 md:py-4">
            {['Kode', 'Tujuan', 'Berangkat', 'Durasi', 'Gerbang', 'Status'].map((h) => (
              <span key={h} className="pass-label text-sky/65">
                {h}
              </span>
            ))}
          </div>

          <ul>
            {penerbangan.map((f, i) => (
              <motion.li
                key={f.kode}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="border-b border-sky/12 px-6 py-5 last:border-b-0 md:grid md:grid-cols-[auto_1.4fr_auto_auto_auto_auto] md:items-center md:gap-6"
              >
                <span className="pass-code text-sm text-runway md:text-base">{f.kode}</span>

                <span className="mt-2 flex items-baseline gap-3 md:mt-0">
                  <span className="pass-code text-lg text-sky">{f.iata}</span>
                  <span className="text-sm text-sky/85">{f.ke}</span>
                </span>

                {/* Di layar sempit, keempat data sisanya dirapikan jadi dua kolom */}
                <span className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 md:contents">
                  <span className="md:block">
                    <span className="pass-label block text-sky/65 md:hidden">Berangkat</span>
                    <span className="pass-code text-sky">{f.jam}</span>
                  </span>
                  <span className="md:block">
                    <span className="pass-label block text-sky/65 md:hidden">Durasi</span>
                    <span className="text-sm text-sky/85">{f.durasi}</span>
                  </span>
                  <span className="md:block">
                    <span className="pass-label block text-sky/65 md:hidden">Gerbang</span>
                    <span className="pass-code text-sky">{f.gerbang}</span>
                  </span>
                  <span className="md:block">
                    <span className="pass-label block text-sky/65 md:hidden">Status</span>
                    <span className={`pass-label ${warnaStatus[f.status] || 'text-sky/85'}`}>
                      {f.status}
                    </span>
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Harga mulai, dipisah agar papan di atas tetap bersih */}
        <dl className="mt-8 grid gap-px border border-sky/15 bg-sky/15 sm:grid-cols-3 lg:grid-cols-5">
          {penerbangan.map((f) => (
            <div key={f.kode} className="bg-aviation px-5 py-4">
              <dt className="pass-label text-sky/65">{f.iata} mulai</dt>
              <dd className="pass-code mt-1.5 text-sky">
                Rp {f.mulai}
              </dd>
            </div>
          ))}
        </dl>

        <p className="pass-label mt-8 leading-[1.7] text-sky/60">
          Jadwal, gerbang, dan harga di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  );
}
