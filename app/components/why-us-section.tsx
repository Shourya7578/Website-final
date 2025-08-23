import { TrendingUp, DollarSign, Zap, Target } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: TrendingUp,
    title: "Achieve 300% Gross Margin",
    description: "Unlock peak profitability",
    color: "#22C55E",
    type: "icon",
  },
  {
    icon: DollarSign,
    title: "No Capex Required",
    description: "Grow without capital investment",
    color: "#3B82F6",
    type: "icon",
  },
  {
    icon: Zap,
    title: "Zero Operational Costs",
    description: "Run efficiently with no overheads",
    color: "#FF6B2B",
    type: "icon",
  },
  {
    image: "/images/icons/inventory-management.png",
    title: "100% Inventory Efficiency",
    description: "Eliminate wastage completely",
    color: "#1D4ED8",
    type: "image",
  },
  {
    icon: Target,
    title: "No Pilferage",
    description: "Secure and controlled portions",
    color: "#22C55E",
    type: "icon",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/ItemList">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            Why Choose <span className="text-[#2563EB] italic font-['Playfair_Display']">Scandalous Foods?</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center p-3"
                  style={{ backgroundColor: feature.color || "orange" }}
                >
                  {feature.type === "image" ? (
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain filter brightness-0 invert opacity-100"
                      crossOrigin="anonymous"
                      priority
                      loading="lazy"
                    />
                  ) : (
                    <feature.icon className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1D1D1D] font-['Poppins'] mb-2" itemProp="name">
                  {feature.title}
                </h3>
                <p className="text-[#1D1D1D] font-['Open_Sans'] text-sm" itemProp="description">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
