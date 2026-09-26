import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JMK Engineering | Bridge Products Manufacturer Bihar',
  description:
    'Manufacturer of bridge bearings, expansion joints, shuttering plates and scaffolding systems in Patna, Bihar. Quality fabrication for infrastructure projects.',
  keywords: [
    'JMK Engineering',
    'Bridge Products Manufacturer Bihar',
    'Bridge Bearings POT PTFE',
    'Strip Seal Expansion Joints',
    'Shuttering Plates Patna',
    'Scaffolding Systems Bihar',
    'Centering Sheets 13kg 20kg',
    'MoRTH Drainage Spouts',
    'Heavy Civil Formwork India',
  ],
  metadataBase: new URL('https://www.jmkengineering.in'),
  alternates: {
    canonical: 'https://www.jmkengineering.in/',
  },
  openGraph: {
    title: 'JMK Engineering | Bridge Products Manufacturer Bihar',
    description:
      'Manufacturer of bridge bearings, expansion joints, shuttering plates and scaffolding systems in Patna, Bihar. Quality fabrication for infrastructure projects.',
    url: 'https://www.jmkengineering.in/',
    siteName: 'JMK Engineering & Developers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JMK Engineering | Bridge Products Manufacturer Bihar',
    description:
      'Manufacturer of bridge bearings, expansion joints, shuttering plates and scaffolding systems in Patna, Bihar. Quality fabrication for infrastructure projects.',
  },
  verification: {
    google: '6DP_-JVCMGzjeXRc9POYlpBPCWtURcAQK9sHhFR6QjA',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-black">
      <body className="bg-white text-black antialiased min-h-screen selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
