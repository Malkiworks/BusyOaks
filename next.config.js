/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'biertempratuur.onrender.com',
      'zandri.onrender.com',
      'danette.onrender.com',
      'wc-cbgl.onrender.com',
      'tradewithcapitalbulls.com'
    ],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig 