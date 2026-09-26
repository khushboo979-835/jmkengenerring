import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | JMK Engineering & Developers Patna',
  description:
    'JMK Engineering & Developers is an ISO 9001:2015 & IndiaMART TrustSEAL verified manufacturer of Heavy Infrastructure Formwork, Shuttering, Bridge Bearings & Scaffolding in Patna, Bihar.',
  alternates: {
    canonical: 'https://www.jmkengineering.in/about',
  },
  openGraph: {
    title: 'About Us | JMK Engineering & Developers',
    description:
      'ISO 9001:2015 certified manufacturer of heavy steel fabrication, bridge expansion joints, shuttering plates, and scaffolding systems.',
    url: 'https://www.jmkengineering.in/about',
    siteName: 'JMK Engineering & Developers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.jmkengineering.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About JMK Engineering & Developers Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jmkengineering',
    creator: '@jmkengineering',
    title: 'About Us | JMK Engineering & Developers',
    description:
      'ISO 9001:2015 certified manufacturer of heavy steel fabrication, bridge expansion joints, shuttering plates, and scaffolding systems.',
    images: ['https://www.jmkengineering.in/og-image.jpg'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
