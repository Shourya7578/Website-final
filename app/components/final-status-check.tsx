"use client"

import { useState } from "react"
import { CheckCircle, AlertTriangle, Info, ExternalLink } from "lucide-react"

interface StatusItem {
  category: string
  item: string
  status: "complete" | "needs-action" | "info"
  description: string
  action?: string
}

export function FinalStatusCheck() {
  const [activeCategory, setActiveCategory] = useState("overview")

  const statusItems: StatusItem[] = [
    // Website Core
    {
      category: "Website Core",
      item: "Design & Layout",
      status: "complete",
      description: "Professional, mobile-responsive design with Scandalous Foods branding",
    },
    {
      category: "Website Core",
      item: "Navigation",
      status: "complete",
      description: "Smooth scrolling navigation between all sections",
    },
    {
      category: "Website Core",
      item: "Content Sections",
      status: "complete",
      description: "Hero, Products, Clientele, Production, Press, About, Why Us, Contact",
    },
    {
      category: "Website Core",
      item: "Images & Assets",
      status: "complete",
      description: "All product images, logos, certifications, and team photos integrated",
    },

    // Form Integration
    {
      category: "Form Integration",
      item: "Google Sheets Setup",
      status: "needs-action",
      description: "Form code ready, but you need to add your Google Apps Script URL",
      action: "Replace GOOGLE_SCRIPT_URL in contact-section.tsx with your actual script URL",
    },
    {
      category: "Form Integration",
      item: "Form Validation",
      status: "complete",
      description: "Email OR phone validation, 10-digit phone number check, error handling",
    },
    {
      category: "Form Integration",
      item: "Success Feedback",
      status: "complete",
      description: "Professional thank you modal with next steps",
    },
    {
      category: "Form Integration",
      item: "Admin Dashboard",
      status: "complete",
      description: "View submissions at /admin (will show real data once Google Sheets is connected)",
    },

    // Business Information
    {
      category: "Business Information",
      item: "Contact Details",
      status: "complete",
      description: "Email: sales@scandalousfoods.in, Phone: +91 8657272865",
    },
    {
      category: "Business Information",
      item: "Social Media Links",
      status: "complete",
      description: "Instagram and LinkedIn links working correctly",
    },
    {
      category: "Business Information",
      item: "Press Coverage",
      status: "complete",
      description: "All 4 press articles with working external links",
    },
    {
      category: "Business Information",
      item: "Client Logos",
      status: "complete",
      description: "Trusted partner logos with scrolling animation",
    },

    // SEO & Performance
    {
      category: "SEO & Performance",
      item: "Meta Tags",
      status: "complete",
      description: "Complete SEO meta tags, Open Graph, Twitter cards",
    },
    {
      category: "SEO & Performance",
      item: "Sitemap & Robots",
      status: "complete",
      description: "XML sitemap and robots.txt configured",
    },
    {
      category: "SEO & Performance",
      item: "Favicon & PWA",
      status: "complete",
      description: "Favicon, manifest.json, and PWA configuration ready",
    },
    {
      category: "SEO & Performance",
      item: "Analytics Ready",
      status: "complete",
      description: "Google Analytics, Facebook Pixel, Microsoft Clarity integration ready",
    },

    // Technical
    {
      category: "Technical",
      item: "Build Configuration",
      status: "complete",
      description: "Next.js 15, TypeScript, Tailwind CSS properly configured",
    },
    {
      category: "Technical",
      item: "Error Handling",
      status: "complete",
      description: "Comprehensive error handling for all user interactions",
    },
    {
      category: "Technical",
      item: "Loading States",
      status: "complete",
      description: "Professional loading animations and feedback",
    },
    {
      category: "Technical",
      item: "Deployment Ready",
      status: "complete",
      description: "Ready for Vercel, Netlify, or any hosting platform",
    },
  ]

  const categories = [...new Set(statusItems.map((item) => item.category))]
  const completeCount = statusItems.filter((item) => item.status === "complete").length
  const needsActionCount = statusItems.filter((item) => item.status === "needs-action").length
  const totalCount = statusItems.length

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "needs-action":
        return <AlertTriangle className="w-5 h-5 text-orange-600" />
      default:
        return <Info className="w-5 h-5 text-blue-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "text-green-600 bg-green-50 border-green-200"
      case "needs-action":
        return "text-orange-600 bg-orange-50 border-orange-200"
      default:
        return "text-blue-600 bg-blue-50 border-blue-200"
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF5EB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            🎉 Final Status Check - <span className="text-[#FF6B2B]">Scandalous Foods Website</span>
          </h1>
          <p className="text-lg text-[#1D1D1D] font-['Open_Sans'] max-w-3xl mx-auto">
            Comprehensive review of your website's completion status and deployment readiness.
          </p>
        </div>

        {/* Overall Status */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-green-600 mb-2">
              {Math.round((completeCount / totalCount) * 100)}%
            </div>
            <div className="text-xl font-semibold text-[#1D1D1D]">Website Complete</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">{completeCount}</div>
              <div className="text-sm text-[#1D1D1D]">Items Complete</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">{needsActionCount}</div>
              <div className="text-sm text-[#1D1D1D]">Needs Action</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#FF6B2B]">{totalCount}</div>
              <div className="text-sm text-[#1D1D1D]">Total Items</div>
            </div>
          </div>
        </div>

        {/* Status Summary */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <h2 className="text-2xl font-bold mb-2">✅ Your Website is 95% Ready!</h2>
            <p className="text-green-100">
              Almost everything is complete. Just one final step to connect your Google Sheets integration.
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-green-800 mb-3">✅ What's Working Perfectly:</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Professional website design</li>
                  <li>• All content sections complete</li>
                  <li>• Mobile-responsive layout</li>
                  <li>• SEO optimization</li>
                  <li>• Contact information updated</li>
                  <li>• Social media links working</li>
                  <li>• Press articles with external links</li>
                  <li>• Admin dashboard ready</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-orange-800 mb-3">⚠️ Final Step Required:</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-sm text-orange-700 mb-2">
                    <strong>Google Sheets Integration:</strong>
                  </p>
                  <p className="text-sm text-orange-600 mb-3">
                    Replace the placeholder URL in contact-section.tsx with your actual Google Apps Script URL to enable
                    form submissions.
                  </p>
                  <a
                    href="https://script.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-orange-600 hover:text-orange-800 font-medium"
                  >
                    Set up Google Apps Script
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Ready */}
        <div className="bg-gradient-to-r from-[#FF6B2B] to-[#e55a24] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">🚀 Ready for Deployment!</h2>
          <p className="text-xl mb-6 text-orange-100">
            Your Scandalous Foods website is professionally built and ready to go live.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold mb-1">Vercel</div>
              <div className="text-sm text-orange-100">One-click deployment</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold mb-1">Netlify</div>
              <div className="text-sm text-orange-100">Drag & drop ready</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold mb-1">Any Hosting</div>
              <div className="text-sm text-orange-100">Standard build process</div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">📋 Next Steps:</h3>
          <ol className="space-y-2 text-blue-700">
            <li>
              <strong>1. Set up Google Apps Script</strong> - Create the script and get your URL (5 minutes)
            </li>
            <li>
              <strong>2. Update the script URL</strong> - Replace placeholder in contact-section.tsx
            </li>
            <li>
              <strong>3. Test the form</strong> - Submit a test form to verify Google Sheets integration
            </li>
            <li>
              <strong>4. Deploy your website</strong> - Use Vercel, Netlify, or your preferred hosting
            </li>
            <li>
              <strong>5. Configure your domain</strong> - Point your custom domain to the hosting
            </li>
            <li>
              <strong>6. Go live!</strong> - Your professional website is ready for customers
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
