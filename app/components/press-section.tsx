"use client"

import { useState, useEffect } from "react"
import { Calendar, ExternalLink, Newspaper, TrendingUp } from "lucide-react"

const pressReleases = [
  {
    title: "Scandalous Foods Raises ₹2 Crore in Seed Funding",
    excerpt:
      "The fast-growing B2B Indian sweets brand aims to add 5,000 distribution touch points and achieve ₹20 crore+ revenue in the next 15 months, stated a release.",
    date: "April 29, 2025",
    publication: "Economic Times",
    category: "Funding",
    icon: TrendingUp,
    link: "https://hospitality.economictimes.indiatimes.com/news/operations/food-and-beverages/scandalous-foods-raises-rs-2-crore-in-ongoing-seed-funding-led-by-new-age-india-fund/120725505",
  },
  {
    title: "How Scandalous Foods has found the sweet spot in post-meal impulse buying space",
    excerpt: "Single-serve Indian sweets capture post-meal impulse market.",
    date: "July 04, 2024",
    publication: "Ad Gully",
    category: "Feature",
    icon: Newspaper,
    link: "https://archive.adgully.com/how-scandalous-foods-has-found-the-sweet-spot-in-post-meal-impulse-buying-space-147705.html",
  },
  {
    title: "Mithai over Macarons : Why traditional Indian desserts still reign at weddings",
    excerpt:
      "Scandalous Foods’ new report highlights how emotional connection, cultural nostalgia, and repeat value are redefining modern wedding dessert trends.",
    date: "July 21, 2025",
    publication: "Hotelier India",
    category: "Report",
    icon: Newspaper,
    link: "https://www.hotelierindia.com/operations/mithai-over-macarons-why-traditional-indian-desserts-still-reign-at-weddings",
  },
  {
    title: "Ras Malai And Shahi Tukda See 33% Rise In Demand Amid Rising Temperatures In India",
    excerpt:
      "Scandalous Foods Report also revealed that mango-based desserts are making a seasonal splash this summer.",
    date: "April 25, 2025",
    publication: "Curly Tales",
    category: "Report",
    icon: Newspaper,
    link: "https://curlytales.com/ras-malai-and-shahi-tukda-see-thirty-three-rise-in-demand-amid-rising-temperatures-in-india-report/",
  },
]

const mediaLogos = [
  { name: "Economic Times", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Forbes India", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Restaurant India", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Hospitality Biz", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Food & Beverage News", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Business Standard", logo: "/placeholder.svg?height=40&width=120" },
]

export function PressSection() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaLogos.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="press" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            In the <span className="text-[#FF6B2B] italic font-['Playfair_Display']">Spotlight</span>
          </h2>
          <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] max-w-3xl mx-auto">
            Stay updated with our latest achievements, partnerships, and industry recognition as we continue to
            revolutionize the mithai landscape.
          </p>
        </div>

        {/* All Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-0">
          {pressReleases.map((article, index) => (
            <div
              key={article.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E6E6E6] h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#FF6B2B] rounded-full flex items-center justify-center flex-shrink-0">
                  <article.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-[#FF6B2B] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-[#22C55E] text-sm font-medium">{article.publication}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1D1D] font-['Poppins'] mb-3 leading-tight line-clamp-3">
                    {article.title}
                  </h3>
                </div>
              </div>
              <p className="text-[#1D1D1D] font-['Open_Sans'] text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-2 text-[#22C55E] text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-[#FF6B2B] hover:text-[#e55a24] transition-colors duration-200 text-sm font-medium"
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
