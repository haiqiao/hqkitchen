/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath: basePath || '',
  assetPrefix: basePath ? `${basePath}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;


