import { BlogTeaser, FAQ, Hero, PapanKeberangkatan, Rute, Tarif, TepatWaktu } from "./components/Beranda";

export default function Home() {
  return (
    <main>
      <Hero />
      <PapanKeberangkatan />
      <Rute />
      <Tarif />
      <TepatWaktu />
      <FAQ />
      <BlogTeaser />
    </main>
  );
}
