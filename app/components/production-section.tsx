"use client"

import Image from "next/image"
import { Shield, Award, Users, Thermometer, Package, Clock, CheckCircle } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const certifications = [
  { name: "FSSAI", logo: "/images/certifications/fssai.png" },
  { name: "ISO 22000", logo: "/images/certifications/iso-22000.png" },
  { name: "Halal Certified", logo: "/images/certifications/halal.png" },
  { name: "RUCO", logo: "/images/certifications/ruco.png" },
]

const highlights = [
  { icon: Shield, title: "100% Food Safe", description: "FSSAI certified with HACCP compliance", color: "#16A34A" },
  { icon: Award, title: "Quality Assured", description: "Multi-stage quality control process", color: "#FF6B2B" },
  {
    icon: Users,
    title: "Expert Team",
    description: "50+ trained professionals with 15+ years experience",
    color: "#22C55E",
  },
]

const facilityFeatures = [
  {
    icon: Thermometer,
    title: "Temperature Controlled",
    description: "Precise cold chain management at -18°C",
    stat: "24/7 Monitoring",
  },
  {
    icon: Package,
    title: "Semi-Auto Packaging",
    description: "Modern sealing equipment for consistent quality",
    stat: "Zero Contamination",
  },
  {
    icon: Clock,
    title: "Fresh Production",
    description: "Daily production with immediate freezing",
    stat: "Same Day Processing",
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    description: "Multi-point inspection by expert chefs",
    stat: "100% Tested",
  },
]

export function ProductionSection() {
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const [visibleHighlights, setVisibleHighlights] = useState<number[]>([])
  const [visibleCertifications, setVisibleCertifications] = useState<number[]>([])
  const [isTeamVisible, setIsTeamVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate production images first
            setTimeout(() => {
              ;[0, 1, 2].forEach((index) => {
                setTimeout(() => {
                  setVisibleImages((prev) => [...prev, index])
                }, index * 200)
              })
            }, 300)

            // Animate facility features
            setTimeout(() => {
              facilityFeatures.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleFeatures((prev) => [...prev, index])
                }, index * 150)
              })
            }, 1200)

            // Animate team section
            setTimeout(() => {
              setIsTeamVisible(true)
            }, 2000)

            // Animate highlights
            setTimeout(() => {
              highlights.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleHighlights((prev) => [...prev, index])
                }, index * 100)
              })
            }, 2500)

            // Animate certifications
            setTimeout(() => {
              certifications.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleCertifications((prev) => [...prev, index])
                }, index * 100)
              })
            }, 3000)
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
    <section ref={sectionRef} id="production" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            Where the <span className="text-[#FF6B2B] italic font-['Playfair_Display']">Magic Happens</span>
          </h2>
          <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] max-w-3xl mx-auto">
            Our state-of-the-art facility in Nashik runs on precision, hygiene, and innovation. Every step is designed
            to deliver consistent quality at scale.
          </p>
        </div>

        {/* Production Process Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              src: "/images/production-cooking-new.jpeg",
              alt: "Skilled team member carefully garnishing individual mithai portions with traditional techniques",
              title: "Traditional Cooking Methods",
              description: "Expert chefs preparing authentic mithai with modern hygiene standards",
            },
            {
              src: "/images/packaging-operation-new.jpeg",
              alt: "Team member operating semi-automated sealing equipment for individual mithai portions",
              title: "Semi Automated Production",
              description: "Modern sealing technology ensures perfect portion control",
            },
            {
              src: "/images/cold-storage.jpg",
              alt: "Industrial cold storage facility with temperature monitoring",
              title: "Cold Chain Excellence",
              description: "Temperature-controlled storage maintaining optimal freshness",
            },
          ].map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl group transition-all duration-700 transform ${
                visibleImages.includes(index)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold font-['Poppins'] mb-2">{image.title}</h3>
                <p className="text-sm font-['Open_Sans']">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center ${
                visibleFeatures.includes(index)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-6 opacity-0 scale-90"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FF6B2B" }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1D1D1D] font-['Poppins'] mb-2">{feature.title}</h3>
                <p className="text-[#1D1D1D] font-['Open_Sans'] text-sm mb-3">{feature.description}</p>
                <div className="bg-[#22C55E] text-white px-3 py-1 rounded-full text-xs font-medium">{feature.stat}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Photo Section */}
        <div
          className={`bg-gradient-to-r from-[#1D1D1D] to-gray-800 rounded-3xl p-8 mb-16 mt-20 text-white transition-all duration-700 transform ${
            isTeamVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Poppins'] mb-4">
                Meet Our <span className="text-[#FF6B2B]">Expert Team</span>
              </h3>
              <p className="font-['Open_Sans'] mb-6 leading-relaxed">
                Our dedicated team of 50+ professionals brings together traditional mithai-making expertise with modern
                food safety standards. Every team member is trained in HACCP protocols and committed to delivering
                excellence.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#FF6B2B]">50+</div>
                  <div className="text-sm">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FF6B2B]">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/team-photo-new.jpeg"
                alt="Complete Scandalous Foods production team in professional uniforms at their state-of-the-art facility"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`text-center space-y-4 transition-all duration-500 transform ${
                visibleHighlights.includes(index)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-6 opacity-0 scale-90"
              }`}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: highlight.color }}
              >
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1D1D1D] font-['Poppins']">{highlight.title}</h3>
              <p className="text-[#1D1D1D] font-['Open_Sans'] text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-[#1D1D1D] font-['Poppins'] mb-8">Our Certifications & Standards</h3>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  visibleCertifications.includes(index)
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-4 opacity-0 scale-90"
                } hover:-translate-y-1`}
              >
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={`${cert.name} certification`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain mx-auto mb-3"
                  crossOrigin="anonymous"
                />
                <p className="text-[#1D1D1D] font-['Open_Sans'] text-sm font-medium text-center">{cert.name}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#F0FDF4] border border-[#22C55E] rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-[#1D1D1D] font-['Open_Sans'] text-center">
              <span className="font-semibold text-[#16A34A]">Quality Assured:</span> Our certifications ensure the
              highest standards of food safety, quality management, halal compliance, and environmental responsibility
              in every product we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
