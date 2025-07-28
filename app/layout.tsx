import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans, Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Scandalous Foods - Traditional Indian Mithai for Restaurants & Hotels | B2B Dessert Solutions",
  description:
    "Transform your dessert menu with Scandalous Foods' traditional Indian mithai. 6-month shelf life, preservative-free, single-serve portions perfect for restaurants, hotels, and cloud kitchens. Trusted by 2200+ outlets across India.",
  keywords: [
    "Indian mithai B2B",
    "restaurant desserts India",
    "hotel mithai supplier",
    "cloud kitchen desserts",
    "frozen Indian sweets",
    "gulab jamun supplier",
    "ras malai restaurant",
    "mithai for hotels",
    "Indian dessert catering",
    "HoReCa dessert solutions",
    "preservative free mithai",
    "single serve Indian sweets",
    "Mumbai mithai supplier",
    "restaurant dessert menu",
    "hospitality dessert solutions",
    "traditional Indian mithai",
    "authentic Indian desserts",
    "professional mithai supplier",
  ].join(", "),
  authors: [{ name: "Scandalous Foods" }],
  creator: "Scandalous Foods",
  publisher: "Scandalous Foods",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  themeColor: "#FF6B2B",
  category: "Food & Beverage",
  classification: "Business",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#FF6B2B" />
        <meta name="msapplication-TileColor" content="#FF6B2B" />
      </head>
      <body
        className={`${poppins.variable} ${openSans.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
