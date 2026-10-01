/* ==========================================================================
   SkyWings — maskapai antarkota fiktif dengan hub di Jakarta (CGK).
   Satu sumber isi: jadwal, tarif, papan keberangkatan, dan rute. Jam tiba
   DIHITUNG dari jam berangkat + durasi + selisih zona waktu.
   Nomor penerbangan, harga, dan angka ketepatan waktu adalah contoh
   purwarupa desain. Bandara adalah bandara sungguhan.
   ========================================================================== */

export const SITE = 'https://landing-skywings.vercel.app';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const BANDARA = {
  CGK: { kota: 'Jakarta', nama: 'Soekarno-Hatta', zona: 7 },
  YIA: { kota: 'Yogyakarta', nama: 'Yogyakarta International', zona: 7 },
  SUB: { kota: 'Surabaya', nama: 'Juanda', zona: 7 },
  DPS: { kota: 'Denpasar', nama: 'I Gusti Ngurah Rai', zona: 8 },
  LOP: { kota: 'Lombok', nama: 'Zainuddin Abdul Madjid', zona: 8 },
  LBJ: { kota: 'Labuan Bajo', nama: 'Komodo', zona: 8 },
};
export const ZONA = { 7: 'WIB', 8: 'WITA' };

export const HARI = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
const SETIAP = [1, 2, 3, 4, 5, 6, 7];

// no, dari, ke, berangkat (jam lokal), durasi (menit), hari (1 = Senin), pesawat, tarif Hemat
export const JADWAL = [
  ['SW 110', 'CGK', 'DPS', '05.40', 115, SETIAP, 'A320neo', 899000],
  ['SW 114', 'CGK', 'DPS', '11.20', 115, SETIAP, 'A320neo', 1049000],
  ['SW 118', 'CGK', 'DPS', '18.05', 115, SETIAP, 'A320neo', 979000],
  ['SW 111', 'DPS', 'CGK', '09.25', 120, SETIAP, 'A320neo', 899000],
  ['SW 115', 'DPS', 'CGK', '15.05', 120, SETIAP, 'A320neo', 1049000],
  ['SW 119', 'DPS', 'CGK', '21.20', 120, SETIAP, 'A320neo', 949000],
  ['SW 230', 'CGK', 'YIA', '06.30', 75, SETIAP, 'A320neo', 649000],
  ['SW 234', 'CGK', 'YIA', '15.45', 75, [1, 2, 3, 4, 5], 'A320neo', 729000],
  ['SW 231', 'YIA', 'CGK', '08.30', 75, SETIAP, 'A320neo', 649000],
  ['SW 235', 'YIA', 'CGK', '17.50', 75, [1, 2, 3, 4, 5], 'A320neo', 729000],
  ['SW 320', 'CGK', 'LOP', '07.15', 125, SETIAP, 'A320neo', 1049000],
  ['SW 321', 'LOP', 'CGK', '11.20', 125, SETIAP, 'A320neo', 1049000],
  ['SW 410', 'CGK', 'LBJ', '08.00', 145, [2, 4, 6], 'A320neo', 1399000],
  ['SW 411', 'LBJ', 'CGK', '12.25', 140, [2, 4, 6], 'A320neo', 1399000],
  ['SW 560', 'SUB', 'DPS', '07.00', 55, SETIAP, 'ATR 72-600', 549000],
  ['SW 561', 'DPS', 'SUB', '09.00', 55, SETIAP, 'ATR 72-600', 549000],
  ['SW 452', 'SUB', 'LBJ', '10.30', 100, [1, 3, 5], 'ATR 72-600', 1099000],
  ['SW 453', 'LBJ', 'SUB', '13.15', 100, [1, 3, 5], 'ATR 72-600', 1099000],
].map(([no, dari, ke, berangkat, durasi, hari, pesawat, hemat]) => {
  const [j, m] = berangkat.split('.').map(Number);
  const tibaMenit = j * 60 + m + durasi + (BANDARA[ke].zona - BANDARA[dari].zona) * 60;
  const besok = tibaMenit >= 1440;
  const t = tibaMenit % 1440;
  return { no, dari, ke, berangkat, tiba: `${String(Math.floor(t / 60)).padStart(2, '0')}.${String(t % 60).padStart(2, '0')}`, besok, durasi, hari, pesawat, hemat };
});

export const durasi = (m) => (m < 60 ? `${m}m` : `${Math.floor(m / 60)}j ${String(m % 60).padStart(2, '0')}m`);
export const mulaiDari = (dari, ke) => Math.min(...JADWAL.filter((f) => f.dari === dari && f.ke === ke).map((f) => f.hemat));

// Contoh papan keberangkatan CGK untuk hari Kamis.
const STATUS_PAPAN = ['Mendarat', 'Tepat waktu', 'Boarding', 'Tepat waktu', 'Tepat waktu', 'Tepat waktu', 'Tepat waktu', 'Tepat waktu'];
export const PAPAN = JADWAL.filter((f) => f.dari === 'CGK' && f.hari.includes(4))
  .sort((a, b) => a.berangkat.localeCompare(b.berangkat))
  .map((f, i) => ({ ...f, gerbang: `D${3 + ((i * 3) % 7)}`, status: i === 0 ? 'Berangkat' : STATUS_PAPAN[i] }));

export const RUTE = [
  { kode: 'DPS', judul: 'Bali', foto: '/images/rute/bali.webp', alt: 'Pura di tepi danau dengan meru bertingkat dan pegunungan berkabut di belakangnya', ket: 'Tiga kali sehari dari Jakarta, sekali sehari dari Surabaya.' },
  { kode: 'YIA', judul: 'Yogyakarta', foto: '/images/rute/yogyakarta.webp', alt: 'Kompleks candi Prambanan dengan menara-menara batu runcing di bawah langit biru', ket: 'Penerbangan pagi untuk perjalanan dinas sehari.' },
  { kode: 'LOP', judul: 'Lombok', foto: '/images/rute/lombok.webp', alt: 'Pantai pasir putih yang panjang dan sepi dengan bukit hijau di ujung teluk', ket: 'Berangkat pagi, siang sudah di pantai.' },
  { kode: 'LBJ', judul: 'Labuan Bajo', foto: '/images/rute/labuan-bajo.webp', alt: 'Pemandangan pelabuhan Labuan Bajo dari bukit dengan pulau-pulau kecil di teluk', ket: 'Selasa, Kamis, dan Sabtu dari Jakarta.' },
];

export const TARIF = [
  { nama: 'Hemat', tambah: 0, isi: [['Bagasi kabin', '7 kg'], ['Bagasi tercatat', '—'], ['Ubah jadwal', 'Rp 250.000 + selisih'], ['Pengembalian dana', '—'], ['Pilih kursi', 'Berbayar']] },
  { nama: 'Fleksibel', tambah: 350000, isi: [['Bagasi kabin', '7 kg'], ['Bagasi tercatat', '20 kg'], ['Ubah jadwal', 'Gratis 1×, + selisih'], ['Pengembalian dana', '75% sebagai saldo'], ['Pilih kursi', 'Kursi standar gratis']], unggul: true },
  { nama: 'Bisnis', tambah: 1990000, isi: [['Bagasi kabin', '2 × 7 kg'], ['Bagasi tercatat', '30 kg'], ['Ubah jadwal', 'Gratis, + selisih'], ['Pengembalian dana', '100% ke rekening'], ['Pilih kursi', 'Baris 1–3, kursi tengah kosong']] },
];

// Ketepatan waktu: % keberangkatan dalam 15 menit dari jadwal (contoh).
export const OTP = [['Apr', 90.4], ['Mei', 88.1], ['Jun', 91.7], ['Jul', 91.2], ['Agu', 89.7], ['Sep', 92.4]];

export const ARMADA = [
  { tipe: 'Airbus A320neo', jumlah: 8, kursi: 180, rute: 'Rute dari dan ke Jakarta' },
  { tipe: 'ATR 72-600', jumlah: 4, kursi: 72, rute: 'Rute pendek dari Surabaya' },
];

export const LAYANAN_KHUSUS = [
  ['Kursi roda', 'Gratis dari konter check-in sampai kursi pesawat. Beri tahu paling lambat 48 jam sebelum berangkat.'],
  ['Bayi di pangkuan', 'Untuk bayi di bawah 2 tahun, 10% dari tarif dewasa. Satu bayi per penumpang dewasa.'],
  ['Ibu hamil', 'Sampai usia kehamilan 32 minggu tanpa surat dokter; 32–35 minggu dengan surat dokter.'],
  ['Alat musik & sepeda', 'Gitar boleh di kabin bila muat di bagasi atas; sepeda dalam kotak dihitung bagasi tercatat 20 kg.'],
];

export const FAQ = [
  { t: 'Kapan check-in online dibuka?', j: 'Mulai 24 jam dan ditutup 60 menit sebelum keberangkatan. Konter bandara tutup 45 menit sebelum keberangkatan.' },
  { t: 'Bagaimana kalau penerbangan saya terlambat lebih dari dua jam?', j: 'Anda mendapat makanan ringan dan boleh pindah ke penerbangan SkyWings berikutnya di rute yang sama tanpa biaya, atau meminta pengembalian dana penuh.' },
  { t: 'Bisakah nama penumpang diganti?', j: 'Tidak bisa diganti ke orang lain. Salah ketik sampai tiga huruf dapat diperbaiki gratis lewat layanan pelanggan.' },
  { t: 'Apakah harga sudah termasuk pajak bandara?', j: 'Ya. Harga yang tampil sudah termasuk pajak bandara dan biaya layanan; tidak ada tambahan di halaman pembayaran.' },
];
