import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',

  // Set basePath for GitHub Pages subdirectory deployment
  basePath: isProd ? '/personal-site' : '',
  assetPrefix: isProd ? '/personal-site/' : '',

  // Allow dev server access from local network (mobile testing, etc.)
  allowedDevOrigins: ['http://192.168.*.*:3000'],

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  // Turbopack configuration (used in development)
  turbopack: {
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  // Experimental features
  experimental: {
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      '@fortawesome/fontawesome-svg-core',
    ],
  },
};

// Bundle analyzer for production build analysis
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
