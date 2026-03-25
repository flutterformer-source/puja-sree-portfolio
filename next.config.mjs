/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/puja-sree-portfolio' : '',
  assetPrefix: isProd ? '/puja-sree-portfolio/' : '',
  images: {
    unoptimized: true,
  }
};
export default nextConfig;
