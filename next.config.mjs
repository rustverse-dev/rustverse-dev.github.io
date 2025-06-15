/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  basePath: '/TrusteD-V', // Adjust this to your GitHub repository name if different
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export
  },
};

export default nextConfig;
