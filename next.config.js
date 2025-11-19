/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // გამორთავს ESLint-ს production build-ის დროს
    ignoreDuringBuilds: true,
  },
  // თუ TypeScript ერორებიც გაქვს
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

