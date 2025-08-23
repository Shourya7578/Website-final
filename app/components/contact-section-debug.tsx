"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, X, Loader2 } from "lucide-react"

export function ContactSectionDebug() {
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
  const [debugInfo, setDebugInfo] = useState("")

  // Your actual Google Form configuration
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSenckW5me1StAROhe0VSEgcMH3Y0XVEYETbbdZPVrFSHxCBeQ/formResponse"

  // Let's try different common entry ID patterns
  const GOOGLE_FORM_FIELDS = {
    name: "entry.1234567890", // Try common patterns
    restaurantName: "entry.1234567891",
    designation: "entry.1234567892",
    location: "entry.1234567893",
    contactNumber: "entry.1234567894",
    email: "entry.1234567895",
    message: "entry.1234567896",
  }

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
      // Create debug info
      const debugData = {
        formAction: GOOGLE_FORM_ACTION,
        fields: GOOGLE_FORM_FIELDS,
        data: formData,
        timestamp: new Date().toISOString(),
      }
      setDebugInfo(JSON.stringify(debugData, null, 2))

      // Submit to Google Forms
      const googleFormData = new FormData()
      googleFormData.append(GOOGLE_FORM_FIELDS.name, formData.name)
      googleFormData.append(GOOGLE_FORM_FIELDS.restaurantName, formData.restaurantName)
      googleFormData.append(GOOGLE_FORM_FIELDS.designation, formData.designation)
      googleFormData.append(GOOGLE_FORM_FIELDS.location, formData.location)
      googleFormData.append(GOOGLE_FORM_FIELDS.contactNumber, formData.contactNumber)
      googleFormData.append(GOOGLE_FORM_FIELDS.email, formData.email)
      googleFormData.append(GOOGLE_FORM_FIELDS.message, formData.message)

      // Submit to Google Forms (no-cors mode to avoid CORS issues)
      const response = await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData,
      })

      console.log("Form submission response:", response)

      // Show success (even though we can't read the response due to no-cors)
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
      console.error("Submission error:", error)
      setErrorMessage("There was an error submitting your inquiry. Please try again.")
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

        {/* Debug Info */}
        {debugInfo && (
          <div className="mb-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-bold mb-2">Debug Information:</h3>
            <pre className="text-xs overflow-auto">{debugInfo}</pre>
            <p className="text-sm mt-2 text-blue-600">
              <strong>Next Step:</strong> Check your Google Form responses to see if data appeared. If not, we need to
              find the correct entry IDs.
            </p>
          </div>
        )}

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
                Thank you for your interest in partnering with Scandalous Foods. Our team will get back in touch with
                you within 24 hours to discuss how we can help transform your dessert menu.
              </p>

              <div className="text-sm text-gray-600 mb-4">
                <strong>Next:</strong> Check your Google Form responses to see if the data appeared. If not, we need to
                find the correct entry IDs.
              </div>

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
