import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BusyOaks | Professional Web Development & Digital Solutions South Africa",
  description: "Expert web development, mobile apps, and digital solutions for South African businesses. Led by Joshua Malki (@josh.tmp), we create modern, responsive websites and applications that drive business growth.",
  keywords: [
    "web development South Africa",
    "mobile app development",
    "UI/UX design",
    "SEO services South Africa", 
    "digital marketing",
    "e-commerce development",
    "React development",
    "Next.js development",
    "Joshua Malki",
    "BusyOaks",
    "South African web developer"
  ],
  authors: [{ name: "Joshua Malki", url: "https://instagram.com/josh.tmp" }],
  creator: "Joshua Malki",
  publisher: "BusyOaks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://busyoaks.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BusyOaks | Professional Web Development & Digital Solutions",
    description: "Expert web development, mobile apps, and digital solutions for South African businesses. Led by Joshua Malki, we create modern websites that drive growth.",
    url: "https://busyoaks.co.za",
    siteName: "BusyOaks",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BusyOaks - Professional Web Development South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BusyOaks | Professional Web Development South Africa",
    description: "Expert web development and digital solutions for South African businesses by Joshua Malki (@josh.tmp)",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BusyOaks",
              description: "Professional web development and digital solutions for South African businesses",
              url: "https://busyoaks.co.za",
                             telephone: "+27-79-738-4779",
               email: "joshmalki07@gmail.com",
              founder: {
                "@type": "Person",
                name: "Joshua Malki",
                sameAs: "https://instagram.com/josh.tmp"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
                addressRegion: "South Africa"
              },
              areaServed: {
                "@type": "Country",
                name: "South Africa"
              },
              serviceArea: {
                "@type": "Country",
                name: "South Africa"
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Web Development",
                      description: "Modern, responsive websites built with React, Next.js, and TypeScript"
                    }
                  },
                  {
                    "@type": "Offer", 
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description: "Native and cross-platform mobile applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service", 
                      name: "SEO & Digital Marketing",
                      description: "Search engine optimization tailored for South African businesses"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Additional meta tags for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geo tags for South Africa */}
        <meta name="geo.region" content="ZA" />
        <meta name="geo.country" content="South Africa" />
        <meta name="geo.placename" content="South Africa" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
