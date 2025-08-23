"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const scrollingImages = [
  { src: "/images/rasmalai.jpg", alt: "Traditional Ras Malai - B2B Dessert Solutions" },
  { src: "/images/shahi-tukda-new.jpg", alt: "Shahi Tukda - Premium Indian Mithai for Restaurants" },
  { src: "/images/moong-dal-halwa.jpg", alt: "Moong Dal Halwa - Ready-to-Serve Dessert Solutions" },
  { src: "/images/gulabjamun.jpg", alt: "Gulab Jamun - Single-Serve B2B Indian Sweets" },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scrollingImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToProducts = () => {
    const element = document.getElementById("products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-[#2563EB] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  B2B Dessert Solutions
                </span>
                <span className="bg-[#22C55E] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  HoReCa Industry Leader
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1D] font-['Poppins'] leading-tight">
                B2B Dessert Solutions: Traditional Indian{" "}
                <span className="text-[#FF6B2B] italic font-['Playfair_Display']">Mithai</span> for Restaurants & Hotels
              </h1>
              <p className="text-lg sm:text-xl text-[#1D1D1D] font-['Open_Sans'] leading-relaxed max-w-xl">
                India's leading <strong>B2B dessert solutions provider</strong>. Transform your restaurant menu with our
                traditional Indian mithai collection. Single-serve portions with 6-month shelf life, preservative-free,
                and ready-to-serve for the <span className="font-semibold text-[#2563EB]">hospitality industry</span>.
                Trusted by 2200+ restaurants, hotels, and cloud kitchens across India.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[#1D1D1D] font-['Open_Sans']">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#FF6B2B] rounded-full"></div>
                  <span>Hotels & Luxury Hospitality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                  <span>Restaurants & Cloud Kitchens</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full"></div>
                  <span>Cafés & QSR Chains</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="bg-[#FF6B2B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e55a24] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Explore our B2B dessert solutions"
              >
                Explore Our B2B Solutions
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-[#FF6B2B] text-[#FF6B2B] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF6B2B] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Request sample of our dessert solutions"
              >
                Request Sample
              </button>
            </div>
          </div>

          {/* Right: Animated Image Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[600px]">
              {scrollingImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 transform translate-y-0"
                      : index === (currentIndex - 1 + scrollingImages.length) % scrollingImages.length
                        ? "opacity-0 transform -translate-y-full"
                        : "opacity-0 transform translate-y-full"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              ))}

              {/* Image Labels */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-lg font-bold text-[#1D1D1D] font-['Poppins']">
                    {scrollingImages[currentIndex].alt.split(" - ")[0]}
                  </h3>
                  <p className="text-[#FF6B2B] text-sm font-medium">
                    B2B Dessert Solutions • Ready to Serve • Premium Quality
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#22C55E] rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FF6B2B] rounded-full opacity-10 blur-2xl animate-pulse"></div>

            {/* Scroll Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {scrollingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#FF6B2B] w-8" : "bg-[#E6E6E6] hover:bg-[#22C55E]"
                  }`}
                  aria-label={`View ${scrollingImages[index].alt}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
