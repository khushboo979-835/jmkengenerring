import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Inspection Video Gallery | JMK Engineering & Developers',
  description:
    'Watch factory manufacturing videos, robotic welding tests, and live QA inspections for heavy civil formwork and expansion joints at JMK Engineering Patna plant.',
  alternates: {
    canonical: 'https://www.jmkengineering.in/videos',
  },
  openGraph: {
    title: 'Plant Inspection Video Gallery | JMK Engineering & Developers',
    description: 'Factory floor video inspections and load test demonstrations at JMK Engineering.',
    url: 'https://www.jmkengineering.in/videos',
    siteName: 'JMK Engineering & Developers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.jmkengineering.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JMK Engineering Video Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jmkengineering',
    creator: '@jmkengineering',
    title: 'Plant Inspection Video Gallery | JMK Engineering & Developers',
    description: 'Factory floor video inspections and load test demonstrations at JMK Engineering.',
    images: ['https://www.jmkengineering.in/og-image.jpg'],
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
