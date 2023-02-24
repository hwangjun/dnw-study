/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll:true
    }
    return config;
  }
}

export default nextConfig