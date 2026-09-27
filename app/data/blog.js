// app/data/blog.js
// `content` berupa HTML sederhana (h2, p, ul, ol) yang dirender di app/blog/[slug]/page.jsx
// dan ditata oleh kelas .article-body di globals.css.
const SITE = "https://landing-skywings.vercel.app";

export const blogPosts = [
  {
    id: 1,
    slug: "cara-memesan-tiket",
    title: "Cara Memesan Tiket dengan Mudah",
    excerpt:
      "Pelajari cara memesan tiket dengan cepat dan mudah melalui platform kami.",
    content: `
<p>Memesan tiket pesawat sebenarnya hanya butuh beberapa menit, asal urutannya benar. Kesalahan kecil, misalnya nama yang tidak sesuai identitas, justru bisa membuat Anda tertahan di konter check-in. Berikut langkah yang kami sarankan.</p>
<h2>1. Tentukan rute dan tanggal</h2>
<p>Masukkan kota asal, kota tujuan, dan tanggal berangkat. Kalau jadwal Anda masih longgar, aktifkan tampilan kalender harga untuk melihat hari yang lebih murah dalam satu minggu yang sama.</p>
<h2>2. Bandingkan jadwal, bukan hanya harga</h2>
<p>Perhatikan jam berangkat, lama perjalanan, dan jumlah transit. Penerbangan termurah sering kali berangkat sangat pagi atau punya transit panjang. Hitung juga waktu tempuh ke bandara.</p>
<h2>3. Isi data penumpang sesuai identitas</h2>
<p>Tulis nama persis seperti di KTP atau paspor, termasuk urutan nama. Untuk penerbangan internasional, pastikan paspor masih berlaku setidaknya enam bulan dari tanggal kepulangan.</p>
<h2>4. Pilih kursi dan bagasi</h2>
<p>Tambahkan bagasi saat memesan, bukan di bandara, karena harganya biasanya lebih rendah. Pilih kursi lebih awal bila Anda bepergian bersama keluarga agar bisa duduk berdekatan.</p>
<h2>5. Bayar dan simpan e-tiket</h2>
<p>Setelah pembayaran terkonfirmasi, e-tiket berisi kode pemesanan akan muncul. Simpan kode itu, lalu lakukan check-in online saat dibuka untuk memperoleh boarding pass digital.</p>
`,
    image: "/images/yogyakarta.jpg",
    date: "2025-01-01",
    category: "Promo",
    url: `${SITE}/blog/cara-memesan-tiket`,
  },
  {
    id: 2,
    slug: "diskon-tiket-spesial",
    title: "Diskon Tiket Spesial untuk Liburan",
    excerpt:
      "Dapatkan promo diskon tiket spesial hanya untuk waktu terbatas.",
    content: `
<p>Harga tiket bergerak mengikuti permintaan. Kursi yang sama bisa berbeda harga jauh hanya karena waktu pemesanannya. Kabar baiknya, pola itu bisa dipelajari supaya liburan Anda tidak menguras anggaran.</p>
<h2>Pesan lebih awal untuk musim ramai</h2>
<p>Libur sekolah, akhir tahun, dan hari raya selalu padat. Untuk tanggal-tanggal ini, memesan jauh hari hampir selalu lebih murah daripada menunggu promo mendadak.</p>
<h2>Longgarkan tanggal</h2>
<p>Terbang di hari kerja, misalnya Selasa atau Rabu, umumnya lebih hemat daripada Jumat sore atau Minggu malam. Geser satu hari saja kadang sudah memberi selisih yang terasa.</p>
<h2>Aktifkan notifikasi promo</h2>
<p>Promo berdurasi singkat biasanya diumumkan lewat email dan aplikasi lebih dulu. Dengan notifikasi aktif, Anda bisa memesan sebelum kuota kursi promo habis.</p>
<h2>Baca syarat sebelum membayar</h2>
<ul>
  <li>Apakah tiket bisa dijadwalkan ulang, dan berapa biayanya?</li>
  <li>Apakah bagasi sudah termasuk atau harus dibeli terpisah?</li>
  <li>Apakah dana bisa dikembalikan bila perjalanan batal?</li>
</ul>
<p>Bandingkan harga total, bukan harga yang tertera di awal. Tiket yang sedikit lebih mahal tetapi sudah termasuk bagasi sering kali lebih hemat pada akhirnya.</p>
`,
    image: "/images/bali.jpg",
    date: "2025-01-15",
    category: "Promo",
    url: `${SITE}/blog/diskon-tiket-spesial`,
  },
  {
    id: 3,
    slug: "tips-perjalanan",
    title: "Tips Perjalanan untuk Liburan Anda",
    excerpt:
      "Beberapa tips dan trik untuk membuat perjalanan Anda lebih menyenangkan.",
    content: `
<p>Liburan yang menyenangkan dimulai jauh sebelum pesawat lepas landas. Persiapan kecil di rumah bisa menghemat banyak waktu dan tenaga di bandara.</p>
<h2>Datang lebih awal</h2>
<p>Untuk penerbangan domestik, usahakan tiba di bandara sekitar dua jam sebelum keberangkatan, dan lebih awal lagi untuk penerbangan internasional. Antrean pemeriksaan keamanan di jam sibuk sulit ditebak.</p>
<h2>Simpan dokumen di dua tempat</h2>
<p>Bawa identitas asli, lalu simpan salinan digital e-tiket, paspor, dan bukti pemesanan hotel di ponsel dan di email. Kalau ponsel mati atau hilang, salinan di email masih bisa dibuka dari perangkat lain.</p>
<h2>Cek kondisi tujuan</h2>
<p>Lihat prakiraan cuaca dan aturan setempat beberapa hari sebelum berangkat. Informasi ini menentukan pakaian yang dibawa dan rencana hari pertama Anda.</p>
<h2>Jaga tubuh selama penerbangan</h2>
<ul>
  <li>Minum air secukupnya, karena udara kabin cenderung kering.</li>
  <li>Berdiri dan regangkan kaki sesekali pada penerbangan panjang.</li>
  <li>Kenakan sabuk pengaman setiap kali duduk, meski lampu tanda sudah padam.</li>
</ul>
<h2>Pertimbangkan asuransi perjalanan</h2>
<p>Asuransi membantu bila terjadi keterlambatan panjang, bagasi hilang, atau sakit di perjalanan. Baca cakupannya dan simpan nomor layanan daruratnya.</p>
`,
    image: "/images/raja-ampat.jpg",
    date: "2025-02-15",
    category: "Tips",
    url: `${SITE}/blog/tips-perjalanan`,
  },
  {
    id: 4,
    slug: "panduan-packing",
    title: "Panduan Packing untuk Perjalanan",
    excerpt:
      "Cara packing yang efisien agar perjalanan Anda lebih nyaman.",
    content: `
<p>Koper yang tertata membuat perjalanan lebih ringan, secara harfiah. Kuncinya adalah membawa yang perlu saja dan tahu barang mana yang harus masuk kabin.</p>
<h2>Mulai dari daftar</h2>
<p>Tulis kebutuhan per hari: pakaian, perlengkapan mandi, obat, dan dokumen. Daftar mencegah dua masalah sekaligus, yaitu barang penting yang tertinggal dan barang tak perlu yang ikut terbawa.</p>
<h2>Gulung, jangan lipat</h2>
<p>Pakaian yang digulung lebih hemat ruang dan tidak mudah kusut. Masukkan pakaian dalam dan kaus kaki ke sela sepatu agar ruang kosong terpakai.</p>
<h2>Kenali aturan kabin</h2>
<ul>
  <li>Cairan di bagasi kabin umumnya dibatasi 100 ml per wadah, dikemas dalam kantong plastik bening.</li>
  <li>Power bank dan baterai litium cadangan wajib dibawa ke kabin, tidak boleh masuk bagasi tercatat.</li>
  <li>Simpan obat rutin, barang berharga, dan satu set pakaian ganti di tas kabin.</li>
</ul>
<h2>Timbang sebelum berangkat</h2>
<p>Cek batas bagasi di e-tiket Anda, lalu timbang koper di rumah. Kelebihan bagasi yang dibayar di bandara hampir selalu lebih mahal daripada membeli tambahan saat memesan.</p>
<h2>Beri tanda pada koper</h2>
<p>Pasang label berisi nama dan nomor telepon, serta pita atau stiker yang mudah dikenali. Koper Anda akan lebih cepat ditemukan di ban bagasi.</p>
`,
    image: "/images/lombok.jpg",
    date: "2025-03-01",
    category: "Tips",
    url: `${SITE}/blog/panduan-packing`,
  },
  {
    id: 5,
    slug: "keamanan-penerbangan",
    title: "Keamanan Penerbangan di Era Modern",
    excerpt:
      "Mengulas teknologi dan prosedur keamanan penerbangan saat ini.",
    content: `
<p>Keselamatan penerbangan tidak bergantung pada satu hal saja. Ia dibangun dari banyak lapisan yang saling menjaga, mulai dari bengkel perawatan hingga kabin tempat Anda duduk.</p>
<h2>Perawatan terjadwal</h2>
<p>Setiap pesawat menjalani pemeriksaan rutin sebelum terbang dan perawatan berkala yang lebih mendalam sesuai jam terbangnya. Komponen diganti mengikuti batas pemakaian, bukan menunggu rusak.</p>
<h2>Awak yang terus berlatih</h2>
<p>Pilot berlatih secara berkala di simulator untuk menghadapi situasi darurat yang jarang terjadi di dunia nyata. Awak kabin juga dilatih evakuasi, pertolongan pertama, dan penanganan penumpang.</p>
<h2>Teknologi di kokpit</h2>
<p>Pesawat modern dilengkapi sistem peringatan tabrakan di udara, radar cuaca, dan sistem peringatan kedekatan dengan daratan. Semuanya bekerja bersama pemandu lalu lintas udara di darat.</p>
<h2>Pemeriksaan di bandara</h2>
<p>Pemindaian penumpang dan bagasi memastikan barang berbahaya tidak masuk ke pesawat. Antrean pemeriksaan memang memakan waktu, tetapi itu salah satu lapisan pengaman terpenting.</p>
<h2>Peran penumpang</h2>
<ul>
  <li>Dengarkan peragaan keselamatan dan kenali pintu darurat terdekat.</li>
  <li>Kencangkan sabuk pengaman saat duduk untuk berjaga dari turbulensi.</li>
  <li>Ikuti instruksi awak kabin, terutama saat lepas landas dan mendarat.</li>
</ul>
`,
    image: "/images/city.jpg",
    date: "2025-03-10",
    category: "Inovasi",
    url: `${SITE}/blog/keamanan-penerbangan`,
  },
  {
    id: 6,
    slug: "teknologi-terbaru",
    title: "Teknologi Terbaru dalam Industri Penerbangan",
    excerpt:
      "Inovasi teknologi terkini yang mengubah wajah industri penerbangan.",
    content: `
<p>Industri penerbangan terus berubah. Sebagian perubahan terasa langsung oleh penumpang, sebagian lagi bekerja diam-diam di balik layar untuk membuat perjalanan lebih efisien dan ramah lingkungan.</p>
<h2>Boarding dengan pengenalan wajah</h2>
<p>Sejumlah bandara mulai memakai pemindai wajah untuk mencocokkan penumpang dengan data paspor atau boarding pass. Antrean di gerbang jadi lebih singkat karena pemeriksaan dokumen berlangsung otomatis.</p>
<h2>Bahan bakar penerbangan berkelanjutan</h2>
<p>Bahan bakar penerbangan berkelanjutan atau SAF dibuat dari sumber seperti minyak jelantah dan limbah biomassa. SAF bisa dicampur dengan avtur biasa dan menjadi salah satu cara utama industri menekan emisi karbon.</p>
<h2>Pesawat yang lebih hemat</h2>
<p>Generasi pesawat terbaru memakai material komposit yang lebih ringan, sayap yang lebih efisien, dan mesin yang lebih irit. Hasilnya, konsumsi bahan bakar per penumpang terus menurun.</p>
<h2>Terhubung selama terbang</h2>
<p>Wi-Fi di pesawat makin umum, sehingga penumpang bisa bekerja atau tetap berkabar selama perjalanan. Hiburan juga bergeser ke perangkat pribadi penumpang.</p>
<h2>Bagasi yang bisa dilacak</h2>
<p>Label bagasi digital dan pelacakan berbasis pemindaian membuat maskapai tahu posisi koper di setiap titik perjalanan. Kalau koper tertinggal, penelusurannya jadi jauh lebih cepat.</p>
`,
    image: "/images/mountain.jpg",
    date: "2025-04-01",
    category: "Inovasi",
    url: `${SITE}/blog/teknologi-terbaru`,
  },
];
