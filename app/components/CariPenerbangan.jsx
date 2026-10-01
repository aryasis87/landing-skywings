'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BANDARA, JADWAL, mulaiDari, rp } from '@/lib/penerbangan';

const ASAL = [...new Set(JADWAL.map((f) => f.dari))];
const tujuanDari = (d) => [...new Set(JADWAL.filter((f) => f.dari === d).map((f) => f.ke))];

/* Formulir pencarian berbentuk pas naik: kode bandara besar, garis rute, sobekan. */
export default function CariPenerbangan() {
  const router = useRouter();
  const [dari, setDari] = useState('CGK');
  const [ke, setKe] = useState('DPS');
  const [penumpang, setPenumpang] = useState('1');
  const daftarKe = tujuanDari(dari);
  const gantiDari = (d) => { setDari(d); if (!tujuanDari(d).includes(ke)) setKe(tujuanDari(d)[0]); };
  const tukar = () => { if (tujuanDari(ke).includes(dari)) { const d = dari; setDari(ke); setKe(d); } };
  const pilih = 'w-full appearance-none rounded-lg border border-aviation/15 bg-white px-3 py-2.5 font-semibold text-aviation focus:border-boarding focus:outline-none';

  return (
    <form
      id="cari"
      onSubmit={(e) => { e.preventDefault(); router.push(`/jadwal?dari=${dari}&ke=${ke}`); }}
      className="notch relative scroll-mt-24 rounded-2xl bg-white shadow-[0_30px_60px_-30px_rgb(11_37_69/0.45)]"
      aria-label="Cari penerbangan"
    >
      <div className="flex items-center justify-between rounded-t-2xl bg-aviation px-6 py-3 text-sky">
        <span className="pass-label">Boarding pass · cari penerbangan</span>
        <span className="pass-label text-runway">SW</span>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-end gap-3 px-6 pt-6">
        <div>
          <label htmlFor="dari" className="pass-label text-slate-ink">Dari</label>
          <p aria-hidden="true" className="pass-code mt-1 text-5xl text-aviation">{dari}</p>
          <select id="dari" value={dari} onChange={(e) => gantiDari(e.target.value)} className={`${pilih} mt-2`}>
            {ASAL.map((k) => <option key={k} value={k}>{BANDARA[k].kota} ({k})</option>)}
          </select>
        </div>
        <button type="button" onClick={tukar} aria-label="Tukar asal dan tujuan" className="mb-1 grid h-10 w-10 place-items-center rounded-full border border-aviation/20 text-aviation hover:border-aviation">⇄</button>
        <div className="text-right">
          <label htmlFor="ke" className="pass-label text-slate-ink">Ke</label>
          <p aria-hidden="true" className="pass-code mt-1 text-5xl text-aviation">{ke}</p>
          <select id="ke" value={ke} onChange={(e) => setKe(e.target.value)} className={`${pilih} mt-2 text-right`}>
            {daftarKe.map((k) => <option key={k} value={k}>{BANDARA[k].kota} ({k})</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 px-6 pt-5">
        <div>
          <label htmlFor="penumpang" className="pass-label text-slate-ink">Penumpang</label>
          <select id="penumpang" value={penumpang} onChange={(e) => setPenumpang(e.target.value)} className={`${pilih} mt-2`}>
            {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} dewasa</option>)}
          </select>
        </div>
        <div className="text-right">
          <p className="pass-label text-slate-ink">Mulai dari</p>
          <p className="mt-2 font-[family-name:var(--font-outfit)] text-2xl font-extrabold text-aviation tabular-nums">{rp(mulaiDari(dari, ke) * Number(penumpang))}</p>
          <p className="text-xs">tarif Hemat · {penumpang} orang</p>
        </div>
      </div>
      <div aria-hidden="true" className="perforation mx-6 mt-6 text-aviation" />
      <div className="px-6 pt-4 pb-6">
        <button type="submit" className="w-full rounded-lg bg-runway-ink py-4 font-semibold text-white hover:bg-aviation">Lihat jadwal {dari} → {ke}</button>
      </div>
    </form>
  );
}
