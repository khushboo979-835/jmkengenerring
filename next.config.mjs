/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '5.imimg.com',
      '4.imimg.com',
      '3.imimg.com',
      'hm.imimg.com',
      'images.unsplash.com',
      'res.cloudinary.com',
      'via.placeholder.com',
    ],
  },
};

export default nextConfig;
