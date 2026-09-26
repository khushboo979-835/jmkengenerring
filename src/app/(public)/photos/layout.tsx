import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Photo Gallery | JMK Engineering & Developers',
  description:
    'Browse verified high-resolution manufacturing photos of Shuttering Plates, Centering Sheets, Scaffolding, and Bridge Bearings from JMK Engineering Patna plant.',
  alternates: {
    canonical: 'https://www.jmkengineering.in/photos',
  },
  openGraph: {
    title: 'Manufacturing Photo Gallery | JMK Engineering & Developers',
    description: 'Verified factory floor and product fabrication photography from Patna manufacturing plant.',
    url: 'https://www.jmkengineering.in/photos',
    siteName: 'JMK Engineering & Developers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.jmkengineering.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JMK Engineering Plant Photo Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jmkengineering',
    creator: '@jmkengineering',
    title: 'Manufacturing Photo Gallery | JMK Engineering & Developers',
    description: 'Verified factory floor and product fabrication photography from Patna manufacturing plant.',
    images: ['https://www.jmkengineering.in/og-image.jpg'],
  },
};

export default function PhotosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
