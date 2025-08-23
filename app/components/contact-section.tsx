"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, X, Loader2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    restaurantName: "",
    designation: "",
    location: "",
    contactNumber: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [showThankYouModal, setShowThankYouModal] = useState(false)
  const [contactNumberError, setContactNumberError] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzplrkr"

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    if (submitStatus === "error") {
      setSubmitStatus("idle")
      setErrorMessage("")
    }
  }

  const validateContactNumber = (number: string) => {
    const digits = number.replace(/\D/g, "")
    return digits.length === 10
  }

  const handleContactNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    value = value.replace(/\D/g, "")

    if (value.length > 10) {
      value = value.substring(0, 10)
    }

    const isValid = value.length === 0 || validateContactNumber(value)

    if (value.trim() && !isValid) {
      setContactNumberError("Contact number must be exactly 10 digits")
    } else {
      setContactNumberError("")
    }

    handleInputChange("contactNumber", value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const hasEmail = formData.email.trim() !== ""
    const hasContact = formData.contactNumber.trim() !== ""
    const isContactValid = formData.contactNumber.trim() === "" || validateContactNumber(formData.contactNumber)

    // Validation
    if (!hasEmail && !hasContact) {
      setSubmitStatus("error")
      setErrorMessage("Please provide either an email address or contact number to submit the form.")
      return
    }

    if (hasContact && !isContactValid) {
      setContactNumberError("Contact number must be exactly 10 digits")
      setSubmitStatus("error")
      setErrorMessage("Please enter a valid 10-digit contact number.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      // Submit to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          restaurant_name: formData.restaurantName,
          designation: formData.designation,
          location: formData.location,
          contact_number: formData.contactNumber,
          email: formData.email,
          message: formData.message,
          lead_source: "Website Contact Form",
          lead_type: "Partnership Inquiry",
          submission_time: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        console.log("Lead successfully submitted to Formspree")
        setSubmitStatus("success")
        setShowThankYouModal(true)

        // Reset form
        setFormData({
          name: "",
          restaurantName: "",
          designation: "",
          location: "",
          contactNumber: "",
          email: "",
          message: "",
        })
        setContactNumberError("")
      } else {
        throw new Error("Formspree submission failed")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setErrorMessage(
        "There was an error submitting your inquiry. Please try again or contact us directly at sales@scandalousfoods.in",
      )
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const hasEmail = formData.email.trim() !== ""
  const hasContact = formData.contactNumber.trim() !== ""
  const isContactValid = formData.contactNumber.trim() === "" || validateContactNumber(formData.contactNumber)

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
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <X className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Restaurant Name"
                  value={formData.restaurantName}
                  onChange={(e) => handleInputChange("restaurantName", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={(e) => handleInputChange("designation", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Contact Number (10 digits)"
                  value={formData.contactNumber}
                  onChange={handleContactNumberChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors duration-200 ${
                    contactNumberError
                      ? "border-red-300 focus:border-red-500 bg-red-50"
                      : formData.contactNumber.trim() && isContactValid
                        ? "border-green-300 focus:border-green-500 bg-green-50"
                        : "border-[#E6E6E6] focus:border-[#FF6B2B] bg-white"
                  }`}
                  disabled={isSubmitting}
                  maxLength={10}
                />
                {contactNumberError && <p className="text-red-500 text-xs mt-1 font-medium">{contactNumberError}</p>}
                {!contactNumberError && formData.contactNumber.trim() && isContactValid && (
                  <p className="text-green-600 text-xs mt-1 font-medium">✓ Valid 10-digit number</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                placeholder="Tell us about your business and how we can help..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200 resize-none"
                disabled={isSubmitting}
              />
            </div>

            <div className="text-sm text-[#666] bg-blue-50 p-4 rounded-lg border border-blue-200">
              <strong>Required:</strong> Please provide either an email address OR a 10-digit contact number to submit
              the form.
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || (!hasEmail && !hasContact) || (hasContact && !isContactValid)}
                className="bg-[#FF6B2B] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#e55a24] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Submitting...
                  </>
                ) : (
                  "Partner With Us"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowThankYouModal(false)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 animate-fade-in-scale">
            <button
              onClick={() => setShowThankYouModal(false)}
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
                onClick={() => setShowThankYouModal(false)}
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
