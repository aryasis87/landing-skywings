'use client';

import { useState } from 'react';

const TOPIK = ['Pemesanan baru', 'Ubah jadwal', 'Pengembalian dana', 'Bagasi', 'Layanan khusus', 'Lainnya'];

export default function FormKontak() {
  const [selesai, setSelesai] = useState(false);
  const [kode, setKode] = useState('');
  const input = 'w-full rounded-lg border border-aviation/15 bg-white px-4 py-3 text-aviation focus:border-boarding focus:outline-none';

  if (selesai) {
    return (
      <div role="status" className="notch relative self-start rounded-2xl bg-white p-8 shadow-sm">
        <p className="pass-label text-runway-ink">Pesan tercatat{kode ? ` · ${kode}` : ''}</p>
        <p className="mt-3 text-2xl font-bold text-aviation">Terima kasih. Kami membalas lewat surel.</p>
        <p className="mt-3 leading-relaxed">Ini purwarupa desain: tidak ada pesan yang benar-benar dikirim.</p>
        <button type="button" onClick={() => setSelesai(false)} className="pass-label mt-6 rounded-lg border border-aviation/25 px-4 py-3 text-aviation hover:border-aviation">Kirim pesan lain</button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="notch relative grid gap-5 self-start rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="k-nama" className="pass-label mb-2 block">Nama sesuai tiket</label>
        <input id="k-nama" required autoComplete="name" className={input} />
      </div>
      <div>
        <label htmlFor="k-kode" className="pass-label mb-2 block">Kode pemesanan (opsional)</label>
        <input id="k-kode" value={kode} onChange={(e) => setKode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6))} placeholder="KQ7RTM" className={`${input} pass-code tracking-[0.2em]`} aria-describedby="k-kode-b" />
        <span id="k-kode-b" className="mt-1 block text-xs">6 huruf/angka, ada di e-tiket</span>
      </div>
      <div>
        <label htmlFor="k-surel" className="pass-label mb-2 block">Surel</label>
        <input id="k-surel" type="email" required autoComplete="email" className={input} />
      </div>
      <div>
        <label htmlFor="k-topik" className="pass-label mb-2 block">Topik</label>
        <select id="k-topik" className={input}>{TOPIK.map((t) => <option key={t}>{t}</option>)}</select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="k-pesan" className="pass-label mb-2 block">Pesan</label>
        <textarea id="k-pesan" required rows={5} className={input} />
      </div>
      <button type="submit" className="rounded-lg bg-runway-ink py-4 font-semibold text-white hover:bg-aviation sm:col-span-2">Kirim pesan</button>
      <p className="text-xs leading-relaxed sm:col-span-2">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
    </form>
  );
}
