import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JMK Engineering & Developers | Heavy Infrastructure & Structural Formwork Manufacturer',
  description:
    'Premier Indian manufacturer of Mild Steel Centering Sheets, Shuttering Plates, H-Frame Scaffolding, POT-PTFE Bridge Bearings, Strip Seal Expansion Joints, and Carriageway Drainage Spouts. Patna HQ, Delhi, Mumbai, Kolkata.',
  keywords: [
    'JMK Engineering',
    'Centering Sheets 13kg 20kg',
    'Shuttering Plates Patna',
    'Scaffolding Manufacturer Bihar',
    'Bridge Bearings POT PTFE',
    'Strip Seal Expansion Joints',
    'MoRTH Drainage Spouts',
    'Heavy Civil Formwork India',
  ],
  metadataBase: new URL('https://www.jmkengineering.in'),
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
      <head>
        <meta name="google-site-verification" content="6DP_-JVCMGzjeXRc9POYlpBPCWtURcAQK9sHhFR6QjA" />
      </head>
      <body className="bg-white text-black antialiased min-h-screen selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
