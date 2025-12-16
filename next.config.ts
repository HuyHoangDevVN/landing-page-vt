import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Cần thiết cho static export
  },
};

export default nextConfig;
