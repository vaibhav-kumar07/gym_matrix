import { NextConfig } from "next";

const config: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["via.placeholder.com", "res.cloudinary.com"],
  },
  reactStrictMode: true,
};

export default config;
