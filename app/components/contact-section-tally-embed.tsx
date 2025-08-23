"use client"

import React, { useState } from "react"
import { CheckCircle, X } from "lucide-react"

export function ContactSection() {
  const [showTallyForm, setShowTallyForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  // Listen for Tally form completion
  React.useEffect(() => {
    const handleTallyMessage = (event: MessageEvent) => {
      if (event.data.type === "TALLY_FORM_COMPLETED") {
        setShowTallyForm(false)
        setShowThankYou(true)
      }
    }

    window.addEventListener("message", handleTallyMessage)
    return () => window.removeEventListener("message", handleTallyMessage)
  }, [])

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            Let's Build the Future of{" "}
            <span className="text-[#FF6B2B] italic font-['Playfair_Display']">Mithai Together</span>
          </h2>
        </div>

        <div className="bg-[#FFF5EB] rounded-3xl p-8 shadow-xl">
          <div className="text-center">
            <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] mb-8 leading-relaxed">
              Ready to transform your dessert menu with authentic Indian mithai? Let's discuss how we can help your
              business grow.
            </p>

            <button
              onClick={() => setShowTallyForm(true)}
              className="bg-[#FF6B2B] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#e55a24] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Tally Form Modal */}
      {showTallyForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowTallyForm(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setShowTallyForm(false)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors duration-200 bg-white rounded-full p-2 shadow-lg"
            >
              <X size={20} />
            </button>

            {/* Tally Embed */}
            <iframe
              src="https://tally.so/embed/nrZXvl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Partnership Inquiry Form"
              className="rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowThankYou(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 animate-fade-in-scale">
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>

              <h2 className="text-2xl font-bold text-[#1D1D1D] font-['Poppins'] mb-6">Thank You!</h2>

              <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] mb-8 leading-relaxed">
                Thanks for your request. Our team will get back in touch with you.
              </p>

              <button
                onClick={() => setShowThankYou(false)}
                className="bg-[#FF6B2B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e55a24] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
