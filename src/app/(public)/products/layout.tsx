import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Industrial Products & Master Catalog | JMK Engineering & Developers',
  description:
    'Complete catalog of 60+ heavy civil engineering products: MS Shuttering Plates, Centering Sheets, H-Frame Scaffolding, POT-PTFE Bearings, Expansion Joints, and Drainage Spouts.',
  alternates: {
    canonical: 'https://www.jmkengineering.in/products',
  },
  openGraph: {
    title: 'All Industrial Products Catalog | JMK Engineering & Developers',
    description: 'Explore full catalog of heavy civil infrastructure fabrication and formwork systems.',
    url: 'https://www.jmkengineering.in/products',
    siteName: 'JMK Engineering & Developers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.jmkengineering.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JMK Engineering Master Product Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jmkengineering',
    creator: '@jmkengineering',
    title: 'All Industrial Products Catalog | JMK Engineering & Developers',
    description: 'Explore full catalog of heavy civil infrastructure fabrication and formwork systems.',
    images: ['https://www.jmkengineering.in/og-image.jpg'],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
