import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-['Poppins']">Scandalous Foods</h3>
            <p className="text-gray-300 font-['Open_Sans']">
              Targeting post meal impulse consumption through the restaurant industry.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-['Poppins']">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF6B2B]" />
                <span className="text-gray-300">sales@scandalousfoods.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF6B2B]" />
                <span className="text-gray-300">+91 8657272865</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FF6B2B]" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Certifications & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-['Poppins']">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/scandalousfoods/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF6B2B] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/scandalous-foods/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF6B2B] transition-colors duration-200"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="space-y-2 mt-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#FF6B2B] text-white px-3 py-1 rounded-full text-xs font-medium">
                  FSSAI Certified
                </span>
                <span className="bg-[#22C55E] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Made in India
                </span>
                <span className="bg-[#2563EB] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Preservative-Free
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-['Open_Sans']">© 2024 Scandalous Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
