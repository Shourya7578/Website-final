"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { trackButtonClick } from "./analytics"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF5EB]/95 backdrop-blur-sm border-b border-[#E6E6E6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <Image
              src="/images/scandalous-logo.png"
              alt="Scandalous Foods Logo"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
              crossOrigin="anonymous"
              quality={100}
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("clientele")}
                className="text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Clientele
              </button>
              <button
                onClick={() => scrollToSection("production")}
                className="text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Production
              </button>
              <button
                onClick={() => scrollToSection("press")}
                className="text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Press
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Why Us
              </button>
            </div>
          </div>

          {/* CTA Button - Right aligned */}
          <div className="hidden md:flex flex-shrink-0">
            <button
              onClick={() => {
                trackButtonClick("partner_with_us", "navbar")
                scrollToSection("contact")
              }}
              className="bg-[#FF6B2B] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e55a24] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1D1D1D] hover:text-[#FF6B2B] p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#FFF5EB] border-t border-[#E6E6E6]">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-base font-medium w-full text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("clientele")}
                className="block text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-base font-medium w-full text-left"
              >
                Clientele
              </button>
              <button
                onClick={() => scrollToSection("production")}
                className="block text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-base font-medium w-full text-left"
              >
                Production
              </button>
              <button
                onClick={() => scrollToSection("press")}
                className="block text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-base font-medium w-full text-left"
              >
                Press
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="block text-[#1D1D1D] hover:text-[#FF6B2B] px-3 py-2 text-base font-medium w-full text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => {
                  trackButtonClick("partner_with_us", "navbar")
                  scrollToSection("contact")
                }}
                className="block bg-[#FF6B2B] text-white px-6 py-2 rounded-full text-base font-medium hover:bg-[#e55a24] transition-colors duration-200 mt-4 mx-3"
              >
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
