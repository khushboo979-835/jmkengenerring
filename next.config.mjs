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
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/portal/login',
        permanent: true,
      },
      {
        source: '/admin/:path*',
        destination: '/dashboard/:path*',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/portal/login',
        permanent: true,
      },
      {
        source: '/portal',
        destination: '/portal/login',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/super-admin',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
