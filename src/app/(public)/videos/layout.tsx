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
    type: 'website',
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
