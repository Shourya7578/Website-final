"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Building2, MapPin, Utensils, Star } from "lucide-react"

const clients = [
  {
    name: "SNACC by Swiggy",
    type: "Quick Commerce Cafe",
    logo: "/images/logos/snacc-swiggy.png",
  },
  {
    name: "Cheelizza",
    type: "QSR Chain",
    logo: "/images/logos/cheelizza.png",
  },
  {
    name: "Samosa Party",
    type: "Snack Chain",
    logo: "/images/logos/samosa-party.png",
  },
  {
    name: "Zepto Café",
    type: "Quick Commerce Café",
    logo: "/images/logos/zepto-cafe.png",
  },
  {
    name: "Wow! Momo",
    type: "Restaurant Chain",
    logo: "/images/logos/wow-momo.png",
  },
  {
    name: "ITC",
    type: "Hospitality Group",
    logo: "/images/logos/itc.webp",
  },
  {
    name: "Fresh Choice",
    type: "Patisserie & Café",
    logo: "/images/logos/fresh-choice.png",
  },
  {
    name: "Rebel Foods",
    type: "Cloud Kitchen Leader",
    logo: "/images/logos/rebel-foods-new.png",
  },
]

const industryStats = [
  { number: "2200+", label: "Partner Outlets", icon: Building2 },
  { number: "7+", label: "Cities Served", icon: MapPin },
  { number: "3M+", label: "Cups Served", icon: Utensils },
  { number: "98%", label: "Client Satisfaction", icon: Star },
]

export function ClienteleSection() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="clientele" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            Trusted by <span className="text-[#FF6B2B] italic font-['Playfair_Display']">Industry Leaders</span>
          </h2>
          <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] max-w-3xl mx-auto">
            From food delivery platforms to restaurant chains, India's leading food brands choose Scandalous Foods for
            consistent quality and effortless service.
          </p>
        </div>

        {/* Rotating Client Grid */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FFF5EB] via-white to-[#FFF5EB]">
            <div className="absolute inset-0 flex items-center">
              <div
                className="flex items-center space-x-12 md:space-x-16"
                style={{
                  animation: "scroll 12s linear infinite",
                  width: "200%",
                }}
              >
                {/* First set of logos */}
                {clients.map((client, index) => (
                  <div key={`first-${client.name}`} className="flex-shrink-0 transition-all duration-500">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="h-10 md:h-12 w-auto object-contain filter hover:grayscale-0 transition-all duration-300"
                      crossOrigin="anonymous"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client, index) => (
                  <div key={`second-${client.name}`} className="flex-shrink-0 transition-all duration-500">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="h-10 md:h-12 w-auto object-contain filter hover:grayscale-0 transition-all duration-300"
                      crossOrigin="anonymous"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-16 md:h-20 bg-transparent"></div>
          </div>
        </div>

        {/* Industry Impact Stats */}
        <div className="bg-gradient-to-r from-[#1D1D1D] to-gray-800 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-['Poppins'] mb-4">
              Our <span className="text-[#FF6B2B]">Industry Impact</span>
            </h3>
            <p className="font-['Open_Sans'] max-w-2xl mx-auto">
              Transforming dessert service across India's hospitality landscape with innovative solutions and
              uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {industryStats.map((stat, index) => (
              <div key={stat.label} className="space-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-[#FF6B2B]" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#FF6B2B] font-['Poppins']">{stat.number}</div>
                <div className="text-[#E6E6E6] font-['Open_Sans'] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#FFF5EB] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
              Join India's Leading Food Brands
            </h3>
            <p className="text-[#1D1D1D] font-['Open_Sans'] mb-6 max-w-2xl mx-auto">
              Partner with Scandalous Foods and join the ranks of quality brands who trust us to deliver exceptional
              dessert experiences to their customers.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-[#FF6B2B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e55a24] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
