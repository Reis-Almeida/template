/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      'storage.allmatech.com.br',
      'dev.storage.allmatech.com.br'
    ],
  },

  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH
}