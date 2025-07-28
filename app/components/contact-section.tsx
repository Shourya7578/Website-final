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

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    // Clear error when user starts typing
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
      console.log("Form submission data:", formData)

      // Create email body with form data
      const emailBody = `
New Partnership Inquiry - Scandalous Foods

Name: ${formData.name}
Restaurant Name: ${formData.restaurantName}
Designation: ${formData.designation}
Location: ${formData.location}
Email: ${formData.email}
Contact Number: ${formData.contactNumber}
Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
      `.trim()

      // Create mailto link
      const subject = encodeURIComponent("Partnership Inquiry - Scandalous Foods")
      const body = encodeURIComponent(emailBody)
      const mailtoLink = `mailto:sales@scandalousfoods.in?subject=${subject}&body=${body}`

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Open email client
      window.location.href = mailtoLink

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
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage(
        "There was an error processing your request. Please try again or contact us directly at sales@scandalousfoods.in",
      )
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
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleContactNumberChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors duration-200 ${
                    contactNumberError
                      ? "border-red-300 focus:border-red-500"
                      : formData.contactNumber.trim() && isContactValid
                        ? "border-green-300 focus:border-green-500"
                        : "border-[#E6E6E6] focus:border-[#FF6B2B]"
                  }`}
                  disabled={isSubmitting}
                  maxLength={10}
                />
                {contactNumberError && <p className="text-red-500 text-xs mt-1">{contactNumberError}</p>}
                {!contactNumberError && formData.contactNumber.trim() && isContactValid && (
                  <p className="text-green-600 text-xs mt-1">✓ Valid contact number</p>
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

            <div className="text-sm text-[#666] bg-blue-50 p-3 rounded-lg border border-blue-200">
              <strong>Note:</strong> Please provide either an email address or contact number to submit the form.
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
                    Processing...
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>

              <h2 className="text-2xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">Thank You for Your Interest!</h2>

              <p className="text-[#1D1D1D] font-['Open_Sans'] mb-6 leading-relaxed">
                Your email client should open with your inquiry details. Our team will get back to you within{" "}
                <span className="font-semibold text-[#FF6B2B]">24 hours</span>.
              </p>

              <div className="bg-[#FFF5EB] rounded-lg p-4 mb-6">
                <p className="text-sm text-[#1D1D1D] font-['Open_Sans']">
                  <strong>What's next?</strong>
                  <br />
                  Our partnership team will review your details and reach out with customized solutions for your
                  business.
                </p>
              </div>

              <div className="text-sm text-gray-600 mb-4">
                <p>
                  <strong>Need immediate assistance?</strong>
                  <br />
                  Call us at{" "}
                  <a href="tel:+918657272865" className="text-[#FF6B2B] font-semibold">
                    +91 8657272865
                  </a>
                  <br />
                  Email:{" "}
                  <a href="mailto:sales@scandalousfoods.in" className="text-[#FF6B2B] font-semibold">
                    sales@scandalousfoods.in
                  </a>
                </p>
              </div>

              <button
                onClick={() => setShowThankYouModal(false)}
                className="bg-[#FF6B2B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e55a24] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Continue Exploring
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
