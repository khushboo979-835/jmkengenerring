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
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
