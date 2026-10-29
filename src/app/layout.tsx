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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QRB4WRH96N"
          strategy="afterInteractive"
        />
        <Script
          id="google-tag-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QRB4WRH96N');`,
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
        {/* Local Business & Google Business Profile Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'ManufacturingBusiness'],
              '@id': 'https://www.jmkengineering.in/#localbusiness',
              name: 'JMK Engineering & Developers',
              alternateName: 'Jmk Engineering and Developer',
              url: 'https://www.jmkengineering.in/',
              logo: 'https://www.jmkengineering.in/icon.png',
              image: 'https://www.jmkengineering.in/og-image.jpg',
              description:
                'Premier manufacturer and fabricator of bridge bearings (POT-PTFE), strip seal expansion joints, MS shuttering plates, and scaffolding systems in Patna, Bihar.',
              telephone: '+917493916194',
              email: 'contact@jmkengineering.in',
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  'Near Trinity Global School, Road No. 3, Krishna Niketan Road, Jakariyapur, Pahari',
                addressLocality: 'Patna',
                addressRegion: 'Bihar',
                postalCode: '800007',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 25.5823642,
                longitude: 85.1846785,
              },
              hasMap:
                'https://www.google.com/maps/place/Jmk+Engineering+and+Developer/@25.5823642,85.1846785,17z/data=!3m1!4b1!4m6!3m5!1s0x39f2a776d95f3f73:0xac02601f18137c84!8m2!3d25.5823642!4d85.1846785',
              sameAs: [
                'https://maps.google.com/?cid=12394541796120886404',
                'https://www.google.com/maps/place/Jmk+Engineering+and+Developer/@25.5823642,85.1846785,17z/data=!3m1!4b1!4m6!3m5!1s0x39f2a776d95f3f73:0xac02601f18137c84!8m2!3d25.5823642!4d85.1846785',
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                  ],
                  opens: '08:00',
                  closes: '20:00',
                },
              ],
              priceRange: '₹₹₹',
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-black antialiased min-h-screen selection:bg-red-600 selection:text-white">
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
