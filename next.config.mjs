/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rute lama berbahasa Inggris diarahkan ke halaman berbahasa Indonesia.
  async redirects() {
    return [
      { source: "/about", destination: "/tentang", permanent: true },
      { source: "/services", destination: "/layanan", permanent: true },
      { source: "/contact", destination: "/kontak", permanent: true },
    ];
  },
};

export default nextConfig;
