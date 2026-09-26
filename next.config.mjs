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
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/photos',
        permanent: true,
      },
      {
        source: '/photo',
        destination: '/photos',
        permanent: true,
      },
      {
        source: '/video',
        destination: '/videos',
        permanent: true,
      },
      {
        source: '/product',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/products',
        permanent: true,
      },
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
