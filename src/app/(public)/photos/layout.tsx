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
    type: 'website',
  },
};

export default function PhotosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
