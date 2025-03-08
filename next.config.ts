import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["public.readdy.ai"],
  },
  output: "standalone",
  distDir: ".next",
};

export default nextConfig;
