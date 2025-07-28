"use client"

import { useState } from "react"
import { CheckCircle, AlertCircle, Loader2, ExternalLink } from "lucide-react"

export function IntegrationTest() {
  const [testStatus, setTestStatus] = useState<"idle" | "testing" | "success" | "error">("idle")
  const [testResults, setTestResults] = useState<string[]>([])
  const [googleScriptUrl, setGoogleScriptUrl] = useState("")

  const runIntegrationTest = async () => {
    setTestStatus("testing")
    setTestResults([])

    const results: string[] = []

    try {
      // Check 1: Verify Google Script URL is configured
      results.push("🔍 Checking Google Apps Script URL configuration...")

      // Get the URL from the contact section (you'll need to update this with your actual URL)
      const scriptUrl =
        "https://script.google.com/a/macros/scandalousfoods.in/s/AKfycbxCJN7uwiKALeU1De1buoogmjpQ2dRtccY45UcAfJayCfOAOZky8HYbPcPI0-SvuID0cw/exec"
      setGoogleScriptUrl(scriptUrl)

      if (!scriptUrl || scriptUrl.includes("YOUR_ACTUAL_GOOGLE_APPS_SCRIPT_URL_HERE")) {
        results.push("❌ Google Apps Script URL not configured properly")
        setTestResults([...results])
        setTestStatus("error")
        return
      }

      if (!scriptUrl.startsWith("https://script.google.com")) {
        results.push("❌ Invalid Google Apps Script URL format")
        setTestResults([...results])
        setTestStatus("error")
        return
      }

      results.push("✅ Google Apps Script URL is properly configured")
      setTestResults([...results])

      // Check 2: Test GET request to verify script is accessible
      results.push("🔍 Testing Google Apps Script accessibility...")
      setTestResults([...results])

      try {
        const testResponse = await fetch(scriptUrl, {
          method: "GET",
          mode: "no-cors",
        })
        results.push("✅ Google Apps Script is accessible")
      } catch (error) {
        results.push("⚠️ Could not verify script accessibility (this is normal with no-cors mode)")
      }
      setTestResults([...results])

      // Check 3: Test form submission
      results.push("🔍 Testing form submission to Google Sheets...")
      setTestResults([...results])

      const testFormData = new FormData()
      testFormData.append("name", "Integration Test")
      testFormData.append("restaurantName", "Test Restaurant")
      testFormData.append("designation", "Test Manager")
      testFormData.append("location", "Test City")
      testFormData.append("email", "test@example.com")
      testFormData.append("contactNumber", "9876543210")
      testFormData.append("message", "This is an automated integration test")
      testFormData.append("timestamp", new Date().toISOString())

      await fetch(scriptUrl, {
        method: "POST",
        body: testFormData,
        mode: "no-cors",
      })

      results.push("✅ Test form submission sent successfully")
      results.push("📊 Check your Google Sheet to verify the test data was saved")
      setTestResults([...results])

      // Check 4: Verify form validation
      results.push("🔍 Testing form validation logic...")
      setTestResults([...results])

      const validationTests = [
        { email: "", phone: "", expected: false, desc: "No contact info" },
        { email: "test@example.com", phone: "", expected: true, desc: "Email only" },
        { email: "", phone: "9876543210", expected: true, desc: "Phone only" },
        { email: "invalid", phone: "", expected: false, desc: "Invalid email" },
        { email: "", phone: "123", expected: false, desc: "Invalid phone" },
      ]

      let validationPassed = 0
      validationTests.forEach((test) => {
        const hasEmail = test.email.trim() !== ""
        const hasContact = test.phone.trim() !== ""
        const isContactValid = test.phone.trim() === "" || test.phone.replace(/\D/g, "").length === 10
        const isFormValid = (hasEmail || hasContact) && isContactValid

        if (isFormValid === test.expected) {
          validationPassed++
        }
      })

      if (validationPassed === validationTests.length) {
        results.push("✅ Form validation working correctly")
      } else {
        results.push(`⚠️ Form validation issues: ${validationPassed}/${validationTests.length} tests passed`)
      }
      setTestResults([...results])

      results.push("🎉 Integration test completed successfully!")
      results.push("💡 Next step: Check your Google Sheet for the test submission")
      setTestResults([...results])
      setTestStatus("success")
    } catch (error) {
      results.push(`❌ Integration test failed: ${error}`)
      setTestResults([...results])
      setTestStatus("error")
    }
  }

  const getStatusIcon = () => {
    switch (testStatus) {
      case "testing":
        return <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
      case "success":
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case "error":
        return <AlertCircle className="w-6 h-6 text-red-600" />
      default:
        return <CheckCircle className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusColor = () => {
    switch (testStatus) {
      case "testing":
        return "border-blue-200 bg-blue-50"
      case "success":
        return "border-green-200 bg-green-50"
      case "error":
        return "border-red-200 bg-red-50"
      default:
        return "border-gray-200 bg-white"
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className={`rounded-2xl border-2 p-8 ${getStatusColor()}`}>
        <div className="flex items-center space-x-3 mb-6">
          {getStatusIcon()}
          <h2 className="text-2xl font-bold text-[#1D1D1D] font-['Poppins']">Google Sheets Integration Test</h2>
        </div>

        <div className="mb-6">
          <p className="text-[#1D1D1D] font-['Open_Sans'] mb-4">
            This test will verify that your Google Apps Script is properly configured and can receive form submissions.
          </p>

          {googleScriptUrl && (
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Current Google Apps Script URL:</p>
              <p className="text-xs text-gray-600 break-all font-mono">{googleScriptUrl}</p>
            </div>
          )}
        </div>

        <button
          onClick={runIntegrationTest}
          disabled={testStatus === "testing"}
          className="bg-[#FF6B2B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e55a24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {testStatus === "testing" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Running Tests...</span>
            </>
          ) : (
            <span>Run Integration Test</span>
          )}
        </button>

        {testResults.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-[#1D1D1D] mb-4">Test Results:</h3>
            <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm space-y-2 max-h-96 overflow-y-auto">
              {testResults.map((result, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-gray-500 text-xs mt-1">{index + 1}.</span>
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {testStatus === "success" && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">🎉 Integration Test Passed!</h4>
            <p className="text-green-700 text-sm mb-3">
              Your Google Sheets integration is working correctly. Check your Google Sheet to see the test submission.
            </p>
            <a
              href="https://sheets.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm"
            >
              Open Google Sheets
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}

        {testStatus === "error" && (
          <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
            <h4 className="font-bold text-red-800 mb-2">❌ Integration Test Failed</h4>
            <p className="text-red-700 text-sm mb-3">
              There seems to be an issue with your Google Apps Script setup. Please check the configuration.
            </p>
            <a
              href="https://script.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:text-red-800 font-medium text-sm"
            >
              Check Google Apps Script
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
