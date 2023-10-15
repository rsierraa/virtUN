/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [{ hostname: "images.unsplash.com" },],
  // },
};

module.exports = nextConfig;

module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
};
