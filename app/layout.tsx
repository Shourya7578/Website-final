import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans, Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Scandalous Foods - B2B Dessert Solutions | Traditional Indian Mithai for Restaurants & Hotels",
  description:
    "Leading B2B dessert solutions provider in India. Transform your restaurant menu with traditional Indian mithai. 6-month shelf life, preservative-free, single-serve portions. Trusted by 2200+ outlets across India. Expert mithai supplier for hotels, restaurants, and cloud kitchens.",
  keywords: [
    "B2B dessert solutions",
    "Indian mithai B2B supplier",
    "restaurant dessert solutions India",
    "hotel mithai supplier Mumbai",
    "cloud kitchen desserts",
    "frozen Indian sweets B2B",
    "gulab jamun supplier restaurants",
    "ras malai B2B supplier",
    "mithai for hotels India",
    "Indian dessert catering solutions",
    "HoReCa dessert solutions",
    "preservative free mithai supplier",
    "single serve Indian sweets B2B",
    "Mumbai mithai supplier restaurants",
    "restaurant dessert menu solutions",
    "hospitality dessert solutions India",
    "traditional Indian mithai B2B",
    "authentic Indian desserts supplier",
    "professional mithai supplier India",
    "ready to serve Indian desserts",
    "mithai supplier pan India",
    "restaurant mithai solutions",
    "hotel dessert supplier Delhi",
    "B2B Indian sweets manufacturer",
    "commercial mithai supplier",
  ].join(", "),
  authors: [{ name: "Scandalous Foods", url: "https://scandalousfoods.in" }],
  creator: "Scandalous Foods",
  publisher: "Scandalous Foods",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scandalousfoods.in"),
  alternates: {
    canonical: "https://scandalousfoods.in",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  themeColor: "#FF6B2B",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "Food & Beverage",
  classification: "Business",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://scandalousfoods.in",
    siteName: "Scandalous Foods",
    title: "Scandalous Foods - B2B Dessert Solutions | Traditional Indian Mithai for Restaurants",
    description:
      "Leading B2B dessert solutions provider in India. Traditional Indian mithai for restaurants, hotels, and cloud kitchens. 6-month shelf life, preservative-free, trusted by 2200+ outlets.",
    images: [
      {
        url: "https://scandalousfoods.in/images/rasmalai.jpg",
        width: 1200,
        height: 630,
        alt: "Traditional Ras Malai - B2B Dessert Solutions by Scandalous Foods",
      },
      {
        url: "https://scandalousfoods.in/images/shahi-tukda-new.jpg",
        width: 1200,
        height: 630,
        alt: "Shahi Tukda - Premium Indian Mithai for Restaurants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scandalous Foods - B2B Dessert Solutions | Traditional Indian Mithai",
    description:
      "Transform your restaurant menu with traditional Indian mithai. B2B dessert solutions trusted by 2200+ outlets across India.",
    images: ["https://scandalousfoods.in/images/rasmalai.jpg"],
    creator: "@scandalousfoods",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "msapplication-TileColor": "#FF6B2B",
    "msapplication-config": "/browserconfig.xml",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Scandalous Foods",
  image: "https://scandalousfoods.in/images/scandalous-logo.png",
  "@id": "https://scandalousfoods.in",
  url: "https://scandalousfoods.in",
  telephone: "+91-8657272865",
  email: "sales@scandalousfoods.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mumbai",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.076,
    longitude: 72.8777,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://www.instagram.com/scandalousfoods/", "https://www.linkedin.com/company/scandalous-foods/"],
  description:
    "Leading B2B dessert solutions provider in India specializing in traditional Indian mithai for restaurants, hotels, and cloud kitchens.",
  priceRange: "$$",
  servesCuisine: "Indian",
  serviceArea: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "B2B Dessert Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Traditional Ras Malai",
          description: "Saffron milk dumplings, plated beautifully for restaurants",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Shahi Tukda",
          description: "Toasted rabri dessert with modern plating",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
        <meta name="theme-color" content="#FF6B2B" />
        <meta name="msapplication-TileColor" content="#FF6B2B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body
        className={`${poppins.variable} ${openSans.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
