import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["500", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"SkyWings","description":"Maskapai penerbangan modern","url":"https://skywings.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://skywings.pintuweb.com"),
  title: "SkyWings — Rasakan Keajaiban Terbang",
  description: "SkyWings: solusi penerbangan modern — pesan tiket mudah, terbang cepat, aman, dan nyaman.",
  applicationName: "SkyWings",
  keywords: ["tiket pesawat", "maskapai", "penerbangan", "booking tiket", "pesan tiket"],
  authors: [{ name: "SkyWings" }],
  creator: "SkyWings",
  publisher: "SkyWings",
  alternates: { canonical: "https://skywings.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://skywings.pintuweb.com",
    siteName: "SkyWings",
    title: "SkyWings — Rasakan Keajaiban Terbang",
    description: "SkyWings: solusi penerbangan modern — pesan tiket mudah, terbang cepat, aman, dan nyaman.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "SkyWings — Rasakan Keajaiban Terbang" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyWings — Rasakan Keajaiban Terbang",
    description: "SkyWings: solusi penerbangan modern — pesan tiket mudah, terbang cepat, aman, dan nyaman.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
