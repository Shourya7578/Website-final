import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Traditional Indian Mithai Guide for Restaurants | Scandalous Foods",
  description:
    "Complete guide to traditional Indian mithai for restaurants and hotels. Learn about authentic recipes, cultural significance, and B2B solutions.",
  keywords: "traditional Indian mithai, authentic Indian desserts, restaurant mithai guide, traditional sweets B2B",
}

export default function TraditionalMithaiGuide() {
  return (
    <div className="min-h-screen bg-[#FFF5EB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1D1D1D] font-['Poppins'] mb-8">
          The Complete Guide to Traditional Indian Mithai for Restaurants
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[#1D1D1D] font-['Open_Sans'] leading-relaxed mb-8">
            Traditional Indian mithai represents centuries of culinary heritage, bringing authentic flavors and cultural
            significance to modern restaurant menus. At Scandalous Foods, we preserve these time-honored recipes while
            adapting them for today's hospitality industry.
          </p>

          <h2 className="text-2xl font-bold text-[#1D1D1D] font-['Poppins'] mt-12 mb-6">
            Why Traditional Mithai Matters in Modern Restaurants
          </h2>

          <p className="text-[#1D1D1D] font-['Open_Sans'] mb-6">
            Traditional Indian mithai isn't just dessert—it's a connection to culture, celebration, and authentic
            flavors that customers crave. Our traditional recipes, passed down through generations, offer restaurants
            the opportunity to serve genuine Indian desserts without the complexity of in-house preparation.
          </p>

          <h3 className="text-xl font-bold text-[#1D1D1D] font-['Poppins'] mt-8 mb-4">
            Our Traditional Mithai Collection
          </h3>

          <ul className="list-disc pl-6 text-[#1D1D1D] font-['Open_Sans'] space-y-2">
            <li>
              <strong>Traditional Ras Malai:</strong> Authentic saffron-infused milk dumplings
            </li>
            <li>
              <strong>Classic Shahi Tukda:</strong> Royal bread pudding with traditional rabri
            </li>
            <li>
              <strong>Heritage Gulab Jamun:</strong> Time-tested recipe with perfect sweetness
            </li>
            <li>
              <strong>Traditional Moong Dal Halwa:</strong> Rich, ghee-laden winter specialty
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#1D1D1D] font-['Poppins'] mt-8 mb-4">
            Benefits for Restaurants & Hotels
          </h3>

          <ul className="list-disc pl-6 text-[#1D1D1D] font-['Open_Sans'] space-y-2">
            <li>Authentic traditional recipes with consistent taste</li>
            <li>6-month shelf life with preservative-free formulation</li>
            <li>Single-serve portions perfect for restaurant service</li>
            <li>No specialized kitchen equipment or training required</li>
            <li>Trusted by 2200+ restaurants across India</li>
          </ul>

          <div className="bg-[#FF6B2B] text-white p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold mb-4">Ready to Add Traditional Mithai to Your Menu?</h3>
            <p className="mb-4">
              Contact Scandalous Foods today to learn how our traditional Indian mithai can enhance your dessert
              offerings and delight your customers with authentic flavors.
            </p>
            <a
              href="/#contact"
              className="bg-white text-[#FF6B2B] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
