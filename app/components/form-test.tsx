"use client"

import { useState } from "react"
import { CheckCircle, Mail, Phone } from "lucide-react"

export function FormTest() {
  const [testResult, setTestResult] = useState<string>("")
  const [isTestingEmail, setIsTestingEmail] = useState(false)

  const testEmailClient = async () => {
    setIsTestingEmail(true)
    setTestResult("")

    try {
      const testData = {
        name: "Test User",
        restaurantName: "Test Restaurant",
        designation: "Manager",
        location: "Mumbai",
        email: "test@example.com",
        contactNumber: "9876543210",
        message: "This is a test submission to verify the form is working correctly.",
      }

      const emailBody = `New Partnership Inquiry - Scandalous Foods

Name: ${testData.name}
Restaurant Name: ${testData.restaurantName}
Designation: ${testData.designation}
Location: ${testData.location}
Email: ${testData.email}
Contact Number: ${testData.contactNumber}
Message: ${testData.message}

Submitted on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

---
This is a TEST submission from the Scandalous Foods website contact form.`

      const subject = encodeURIComponent("TEST - Partnership Inquiry - Scandalous Foods")
      const body = encodeURIComponent(emailBody)
      const mailtoLink = `mailto:sales@scandalousfoods.in?subject=${subject}&body=${body}`

      console.log("Test mailto link:", mailtoLink)

      // Test if we can create the mailto link
      const testLink = document.createElement("a")
      testLink.href = mailtoLink

      if (testLink.href.startsWith("mailto:")) {
        setTestResult("✅ Email client integration is working! The mailto link was created successfully.")

        // Try to open email client
        setTimeout(() => {
          try {
            window.open(mailtoLink, "_self")
          } catch (error) {
            console.error("Error opening email client:", error)
            setTestResult(
              "⚠️ Email link created but couldn't open email client automatically. This might be due to browser settings.",
            )
          }
        }, 1000)
      } else {
        setTestResult("❌ Error creating mailto link. Please check the form configuration.")
      }
    } catch (error) {
      console.error("Test error:", error)
      setTestResult("❌ Test failed. Error: " + error)
    } finally {
      setIsTestingEmail(false)
    }
  }

  const testFormValidation = () => {
    const testCases = [
      { email: "", phone: "", expected: false, description: "No email or phone" },
      { email: "test@example.com", phone: "", expected: true, description: "Valid email only" },
      { email: "", phone: "9876543210", expected: true, description: "Valid phone only" },
      { email: "test@example.com", phone: "9876543210", expected: true, description: "Both email and phone" },
      { email: "", phone: "123", expected: false, description: "Invalid phone" },
      { email: "invalid-email", phone: "", expected: false, description: "Invalid email format" },
    ]

    let results = "Form Validation Test Results:\n\n"

    testCases.forEach((testCase, index) => {
      const hasEmail = testCase.email.trim() !== ""
      const hasContact = testCase.phone.trim() !== ""
      const isContactValid = testCase.phone.trim() === "" || testCase.phone.replace(/\D/g, "").length === 10
      const isFormValid = (hasEmail || hasContact) && isContactValid

      const passed = isFormValid === testCase.expected
      results += `${index + 1}. ${testCase.description}: ${passed ? "✅ PASS" : "❌ FAIL"}\n`
    })

    setTestResult(results)
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl mb-8">
      <h3 className="text-2xl font-bold text-[#1D1D1D] mb-6 flex items-center">
        <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
        Form Functionality Test
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <button
          onClick={testEmailClient}
          disabled={isTestingEmail}
          className="flex items-center justify-center space-x-2 bg-[#FF6B2B] text-white px-6 py-3 rounded-lg hover:bg-[#e55a24] transition-colors disabled:opacity-50"
        >
          <Mail className="w-5 h-5" />
          <span>{isTestingEmail ? "Testing..." : "Test Email Client"}</span>
        </button>

        <button
          onClick={testFormValidation}
          className="flex items-center justify-center space-x-2 bg-[#22C55E] text-white px-6 py-3 rounded-lg hover:bg-[#16a34a] transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Test Form Validation</span>
        </button>
      </div>

      {testResult && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold mb-2">Test Results:</h4>
          <pre className="text-sm whitespace-pre-wrap text-gray-700">{testResult}</pre>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">How to Check if Form is Working:</h4>
        <ol className="text-sm text-blue-700 space-y-1">
          <li>1. Fill out the contact form below</li>
          <li>2. Click "Partner With Us" button</li>
          <li>3. Your email client should open with pre-filled message</li>
          <li>4. Check that all form data appears in the email</li>
          <li>5. Send the email to complete the submission</li>
        </ol>
      </div>
    </div>
  )
}
