import type { NextConfig } from "next";

// Static export so this can be hosted on GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
