import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["public.readdy.ai","example.com"],
  },
  output: "standalone",
  distDir: ".next",
};

export default nextConfig;
