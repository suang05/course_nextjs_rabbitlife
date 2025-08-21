import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', //enable
  basePath: '',
  experimental: {
    globalNotFound: true,
  },
  // images: {
  //   loader: 'custom',
  //   loaderFile: './src/utils/loader.ts',
  // },
};

export default nextConfig;
