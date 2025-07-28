"use client"

import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { ProductsSection } from "./components/products-section"
import { AboutSection } from "./components/about-section"
import { WhyUsSection } from "./components/why-us-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"
import { ClienteleSection } from "./components/clientele-section"
import { PressSection } from "./components/press-section"
import { ProductionSection } from "./components/production-section"
import { Analytics } from "./components/analytics"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5EB]">
      <Analytics />
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ClienteleSection />
      <ProductionSection />
      <PressSection />
      <AboutSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
