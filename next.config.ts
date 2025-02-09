import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "njepu16mie.ufs.sh",
        port: "",
      },
    ],
  },
};

export default nextConfig;
