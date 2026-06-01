/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pipeline_surveillance',
  assetPrefix: '/pipeline_surveillance',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;