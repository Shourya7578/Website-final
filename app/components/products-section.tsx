"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

const products = [
  {
    name: "Ras Malai",
    description: "Saffron milk dumplings | Plated beautifully",
    tagline: "Luxe flavors, zero prep.",
    image: "/images/rasmalai.jpg",
    alt: "Traditional Ras Malai - Premium Indian dessert for restaurants",
  },
  {
    name: "Shahi Tukda",
    description: "Toasted rabri dessert",
    tagline: "Modern plating, royal nostalgia.",
    image: "/images/shahi-tukda-new.jpg",
    alt: "Shahi Tukda - Royal Indian dessert for hotels",
  },
  {
    name: "Moong Dal Halwa",
    description: "Ghee-rich halwa in heatable pouch",
    tagline: "Winter warmth, simplified.",
    image: "/images/moong-dal-halwa.jpg",
    alt: "Moong Dal Halwa - Ready-to-serve Indian dessert",
  },
  {
    name: "Gulab Jamun",
    description: "Soft & syrupy | Frozen single-serve",
    tagline: "Classic indulgence, always ready to serve.",
    image: "/images/gulabjamun.jpg",
    alt: "Gulab Jamun - Single-serve Indian sweets",
  },
]

const seasonalProducts = [
  {
    name: "Gajar Halwa",
    description: "Rich carrot halwa with ghee and nuts",
    tagline: "Winter comfort in every bite.",
    season: "Winter Special",
    image: "/images/gajar-halwa.jpg",
    alt: "Gajar Halwa - Seasonal Indian dessert",
  },
  {
    name: "Mawa Gujiya",
    description: "Traditional festive sweet with khoya filling",
    tagline: "Festival joy, perfectly crafted.",
    season: "Holi Special",
    image: "/images/mawa-gujiya-new.png",
    alt: "Mawa Gujiya - Festival Indian mithai",
  },
  {
    name: "Sheer Kurma",
    description: "Creamy vermicelli dessert with dates",
    tagline: "Ramadan tradition, modernized.",
    season: "Ramadan Special",
    image: "/images/sheer-kurma-new.jpg",
    alt: "Sheer Kurma - Ramadan special dessert",
  },
  {
    name: "Modak",
    description: "Steamed rice flour dumplings with jaggery",
    tagline: "Ganesh Chaturthi favorite.",
    season: "Festival Special",
    image: "/images/modak.jpeg",
    alt: "Modak - Festival Indian sweets",
  },
  {
    name: "Mango Ras Malai",
    description: "Summer twist on classic ras malai",
    tagline: "Tropical indulgence, quality assured.",
    season: "Summer Special",
    image: "/images/mango-ras-malai-new.webp",
    alt: "Mango Ras Malai - Summer special dessert",
  },
]

const fusionDesserts = [
  {
    name: "Mithai Sundaes",
    description: "Traditional sweets meet ice cream",
    tagline: "The perfect fusion of hot and cold.",
    image: "/images/mithai-sundae.png",
    alt: "Mithai Sundaes - Fusion Indian desserts",
  },
  {
    name: "Jalebi Rabdi",
    description: "Crispy jalebi with creamy rabdi",
    tagline: "Classic combination, modern presentation.",
    image: "/images/jalebi-rabdi.png",
    alt: "Jalebi Rabdi - Fusion Indian desserts",
  },
  {
    name: "Mithai Jars",
    description: "Layered desserts in convenient jars",
    tagline: "Coming Soon",
    image: "/placeholder.svg?height=250&width=250",
    alt: "Mithai Jars - Upcoming dessert innovation",
    comingSoon: true,
  },
]

export function ProductsSection() {
  const [visibleProducts, setVisibleProducts] = useState<number[]>([])
  const [visibleSeasonalProducts, setVisibleSeasonalProducts] = useState<number[]>([])
  const [visibleFusionProducts, setVisibleFusionProducts] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate main products with fade-in
            products.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProducts((prev) => [...prev, index])
              }, index * 200)
            })

            // Animate seasonal products after main products
            setTimeout(
              () => {
                seasonalProducts.forEach((_, index) => {
                  setTimeout(() => {
                    setVisibleSeasonalProducts((prev) => [...prev, index])
                  }, index * 150)
                })
              },
              products.length * 200 + 500,
            )

            // Animate fusion products after seasonal products
            setTimeout(
              () => {
                fusionDesserts.forEach((_, index) => {
                  setTimeout(() => {
                    setVisibleFusionProducts((prev) => [...prev, index])
                  }, index * 150)
                })
              },
              products.length * 200 + seasonalProducts.length * 150 + 1000,
            )
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-20 px-4 sm:px-6 lg:px-8"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            Crafted with Care -{" "}
            <span className="text-[#FF6B2B] italic font-['Playfair_Display']">Our Signature Desserts</span>
          </h2>
          <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] max-w-3xl mx-auto">
            Each dessert is a masterpiece of traditional flavors and modern presentation, ready to elevate your menu.
          </p>
        </header>

        {/* Main Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {products.map((product, index) => (
            <article
              key={product.name}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform ${
                visibleProducts.includes(index)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-12 opacity-0 scale-90"
              } hover:-translate-y-2`}
              style={{
                transitionDelay: visibleProducts.includes(index) ? "0ms" : `${index * 200}ms`,
              }}
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  width={400}
                  height={400}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  crossOrigin="anonymous"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating badge animation */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 transform transition-all duration-300 group-hover:scale-110">
                  <span className="bg-[#FF6B2B] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    Quality Assured
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1D1D1D] font-['Poppins'] mb-2 group-hover:text-[#FF6B2B] transition-colors duration-300"
                  itemProp="name"
                >
                  {product.name}
                </h3>
                <p className="text-[#22C55E] font-medium mb-2 sm:mb-3 text-sm" itemProp="description">
                  {product.description}
                </p>
                <p className="text-[#1D1D1D] font-['Open_Sans'] text-sm leading-relaxed">{product.tagline}</p>

                {/* Quality badge */}
                <div className="mt-3 sm:mt-4 flex items-center justify-between">
                  <span className="bg-[#22C55E] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    Ready to Serve
                  </span>
                  <div className="w-2 h-2 bg-[#FF6B2B] rounded-full animate-pulse"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Seasonal Products Section */}
        <section className="border-t border-[#E6E6E6] pt-16 mb-20">
          <header className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
              Seasonal <span className="text-[#FF6B2B] italic font-['Playfair_Display']">Specialties</span>
            </h3>
            <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] max-w-2xl mx-auto">
              Limited-time offerings that celebrate festivals and seasons with authentic flavors.
            </p>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {seasonalProducts.map((product, index) => (
              <article
                key={product.name}
                className={`group bg-[#FFF5EB] rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-600 overflow-hidden transform ${
                  visibleSeasonalProducts.includes(index)
                    ? "translate-y-0 opacity-100 scale-100 rotate-0"
                    : "translate-y-8 opacity-0 scale-85 rotate-1"
                } hover:-translate-y-2`}
                style={{
                  transitionDelay: visibleSeasonalProducts.includes(index) ? "0ms" : `${index * 150}ms`,
                }}
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    width={250}
                    height={250}
                    className="w-full h-32 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                    loading="lazy"
                  />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="bg-[#FF6B2B] text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium shadow-lg animate-bounce">
                      {product.season}
                    </span>
                  </div>

                  {/* Seasonal sparkle effect */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-2 sm:w-3 h-2 sm:h-3 bg-[#22C55E] rounded-full animate-ping opacity-75"></div>
                </div>

                <div className="p-3 sm:p-4">
                  <h4
                    className="text-sm sm:text-lg font-bold text-[#1D1D1D] font-['Poppins'] mb-1 sm:mb-2 group-hover:text-[#FF6B2B] transition-colors duration-300 leading-tight"
                    itemProp="name"
                  >
                    {product.name}
                  </h4>
                  <p
                    className="text-[#22C55E] font-medium mb-1 sm:mb-2 text-xs sm:text-sm leading-tight"
                    itemProp="description"
                  >
                    {product.description}
                  </p>
                  <p className="text-[#1D1D1D] font-['Open_Sans'] text-xs leading-relaxed">{product.tagline}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Fusion Desserts Section */}
        <section className="border-t border-[#E6E6E6] pt-16">
          <header className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
              Fusion <span className="text-[#2563EB] italic font-['Playfair_Display']">Desserts</span>
            </h3>
            <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] max-w-2xl mx-auto">
              Modern twists on traditional favorites, perfect for contemporary dining experiences.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {fusionDesserts.map((product, index) => (
              <article
                key={product.name}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-600 overflow-hidden transform ${
                  visibleFusionProducts.includes(index)
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-90"
                } hover:-translate-y-2 ${product.comingSoon ? "relative" : ""}`}
                style={{
                  transitionDelay: visibleFusionProducts.includes(index) ? "0ms" : `${index * 150}ms`,
                }}
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    width={400}
                    height={300}
                    className={`w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500 ${
                      product.comingSoon ? "filter grayscale" : ""
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {product.comingSoon && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-[#2563EB] text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {!product.comingSoon && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 transform transition-all duration-300 group-hover:scale-110">
                      <span className="bg-[#2563EB] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        Fusion
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-6">
                  <h3
                    className="text-lg sm:text-xl font-bold text-[#1D1D1D] font-['Poppins'] mb-2 group-hover:text-[#2563EB] transition-colors duration-300"
                    itemProp="name"
                  >
                    {product.name}
                  </h3>
                  <p className="text-[#2563EB] font-medium mb-2 sm:mb-3 text-sm" itemProp="description">
                    {product.description}
                  </p>
                  <p className="text-[#1D1D1D] font-['Open_Sans'] text-sm leading-relaxed">{product.tagline}</p>

                  {!product.comingSoon && (
                    <div className="mt-3 sm:mt-4 flex items-center justify-between">
                      <span className="bg-[#2563EB] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        Innovation
                      </span>
                      <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
