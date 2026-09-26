import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Depots | JMK Engineering & Developers',
  description:
    'Contact JMK Engineering & Developers Patna Works, Delhi NCR, Mumbai Western, and Kolkata Eastern logistics depots for bulk RFQ, technical specs, and instant manufacturing estimates.',
  alternates: {
    canonical: 'https://www.jmkengineering.in/contact',
  },
  openGraph: {
    title: 'Contact Us & Depots | JMK Engineering & Developers',
    description:
      'Direct Works Hotline: +91 7493916194 / +91 8651010370. Patna HQ Works, Delhi, Mumbai, Kolkata logistics hubs.',
    url: 'https://www.jmkengineering.in/contact',
    siteName: 'JMK Engineering & Developers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.jmkengineering.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact JMK Engineering & Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jmkengineering',
    creator: '@jmkengineering',
    title: 'Contact Us & Depots | JMK Engineering & Developers',
    description:
      'Direct Works Hotline: +91 7493916194 / +91 8651010370. Patna HQ Works, Delhi, Mumbai, Kolkata logistics hubs.',
    images: ['https://www.jmkengineering.in/og-image.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
