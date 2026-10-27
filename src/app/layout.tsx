import type { Metadata } from 'next';
import Script from 'next/script';
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
    languages: {
      'en-IN': 'https://www.jmkengineering.in/',
      'en-US': 'https://www.jmkengineering.in/',
      'x-default': 'https://www.jmkengineering.in/',
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
    title: 'JMK Engineering | Bridge Products Manufacturer Bihar',
    description:
      'Manufacturer of bridge bearings, expansion joints, shuttering plates and scaffolding systems in Patna, Bihar. Quality fabrication for infrastructure projects.',
    url: 'https://www.jmkengineering.in/',
    siteName: 'JMK Engineering & Developers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.jmkengineering.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JMK Engineering & Developers - Bridge Products Manufacturer Bihar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jmkengineering',
    creator: '@jmkengineering',
    title: 'JMK Engineering | Bridge Products Manufacturer Bihar',
    description:
      'Manufacturer of bridge bearings, expansion joints, shuttering plates and scaffolding systems in Patna, Bihar. Quality fabrication for infrastructure projects.',
    images: ['https://www.jmkengineering.in/og-image.jpg'],
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TTF2C2PT');`,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1106223738693480');
fbq('track', 'PageView');`,
          }}
        />
      </head>
      <body className="bg-white text-black antialiased min-h-screen selection:bg-red-600 selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTF2C2PT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1106223738693480&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
