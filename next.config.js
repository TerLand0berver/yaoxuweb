/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // 禁用SWC以使用Babel
  swcMinify: false,
  experimental: {
    // 移除过时的appDir配置
  },
}

module.exports = nextConfig 