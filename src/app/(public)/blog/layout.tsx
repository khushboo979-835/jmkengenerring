import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Blog & Technical Insights | JMK Engineering Bihar',
  description:
    'Expert technical guides, IRC:83 bridge bearing standards, IS 2062 shuttering plate specs, and heavy civil infrastructure insights from JMK Engineering Patna.',
  alternates: {
    canonical: 'https://www.jmkengineering.in/blog',
    languages: {
      'en-IN': 'https://www.jmkengineering.in/blog',
      'en-US': 'https://www.jmkengineering.in/blog',
      'x-default': 'https://www.jmkengineering.in/blog',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Engineering Blog & Technical Insights | JMK Engineering Bihar',
    description:
      'Expert technical guides, IRC:83 bridge bearing standards, IS 2062 shuttering plate specs, and heavy civil infrastructure insights from JMK Engineering Patna.',
    url: 'https://www.jmkengineering.in/blog',
    siteName: 'JMK Engineering & Developers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.jmkengineering.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JMK Engineering Technical Blog & Articles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jmkengineering',
    creator: '@jmkengineering',
    title: 'Engineering Blog & Technical Insights | JMK Engineering Bihar',
    description:
      'Expert technical guides on bridge expansion joints, shuttering plates, and scaffolding systems from JMK Engineering Patna.',
    images: ['https://www.jmkengineering.in/og-image.jpg'],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
