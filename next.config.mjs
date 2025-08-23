/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/public/upload/**",
      },
    ],
    domains: ["images.pexels.com", "tabascouae.com", "image.winudf.com"],
  },
};

export default nextConfig;
