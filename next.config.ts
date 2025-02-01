import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.prod.website-files.com"], // ✅ Add your image CDN here
  },
};

export default nextConfig;

module.exports = nextConfig;
