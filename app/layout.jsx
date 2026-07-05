import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["500", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "SkyWings — Rasakan Keajaiban Terbang",
  description: "SkyWings: solusi penerbangan modern — pesan tiket mudah, terbang cepat, aman, dan nyaman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
