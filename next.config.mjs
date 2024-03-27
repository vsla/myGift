/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nqlf3fajmhhx91c1.public.blob.vercel-storage.com",
        port: "",
        pathname: "/images/products/**",
      },
    ],
  },
};

export default nextConfig;
