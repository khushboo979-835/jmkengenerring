import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/dashboard/', '/portal/', '/admin/', '/api/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/portal/', '/admin/', '/api/'],
      },
    ],
    sitemap: 'https://www.jmkengineering.in/sitemap.xml',
  };
}
