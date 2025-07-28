"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mail, Phone, MapPin, Building, User, MessageSquare } from "lucide-react"

interface FormSubmission {
  timestamp: string
  name: string
  restaurantName: string
  designation: string
  location: string
  email: string
  contactNumber: string
  message: string
}

export function AdminDashboard() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [loading, setLoading] = useState(true)

  // In a real implementation, you would fetch data from your Google Sheets
  // For now, we'll show a sample structure
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setSubmissions([
        {
          timestamp: "2024-01-15T10:30:00Z",
          name: "Rahul Sharma",
          restaurantName: "Spice Garden",
          designation: "Owner",
          location: "Mumbai",
          email: "rahul@spicegarden.com",
          contactNumber: "9876543210",
          message: "Interested in adding traditional mithai to our dessert menu.",
        },
        {
          timestamp: "2024-01-14T15:45:00Z",
          name: "Priya Patel",
          restaurantName: "Cloud Kitchen Express",
          designation: "Manager",
          location: "Delhi",
          email: "priya@ckexpress.com",
          contactNumber: "9123456789",
          message: "Looking for bulk mithai solutions for our cloud kitchen operations.",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF5EB] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B2B] mx-auto mb-4"></div>
          <p className="text-[#1D1D1D]">Loading submissions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFF5EB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            Scandalous Foods - Form Submissions Dashboard
          </h1>
          <p className="text-lg text-[#1D1D1D] font-['Open_Sans']">
            View and manage partnership inquiries from your Google Sheets integration.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#96C1DA]">Total Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#1D1D1D]">{submissions.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#96C1DA]">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#FF6B2B]">
                {
                  submissions.filter((s) => new Date(s.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
                    .length
                }
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#96C1DA]">With Email</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#22C55E]">
                {submissions.filter((s) => s.email.trim() !== "").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#96C1DA]">With Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#2563EB]">
                {submissions.filter((s) => s.contactNumber.trim() !== "").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions List */}
        <div className="space-y-6">
          {submissions.map((submission, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-[#FF6B2B]" />
                      <div>
                        <div className="font-semibold text-[#1D1D1D]">{submission.name}</div>
                        <div className="text-sm text-gray-600">{submission.designation}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Building className="w-5 h-5 text-[#22C55E]" />
                      <div>
                        <div className="font-medium text-[#1D1D1D]">{submission.restaurantName}</div>
                        <div className="text-sm text-gray-600">Restaurant/Business</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#2563EB]" />
                      <div>
                        <div className="font-medium text-[#1D1D1D]">{submission.location}</div>
                        <div className="text-sm text-gray-600">Location</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="font-medium text-[#1D1D1D]">
                          {new Date(submission.timestamp).toLocaleDateString("en-IN")}
                        </div>
                        <div className="text-sm text-gray-600">
                          {new Date(submission.timestamp).toLocaleTimeString("en-IN")}
                        </div>
                      </div>
                    </div>

                    {submission.email && (
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-[#FF6B2B]" />
                        <div>
                          <a href={`mailto:${submission.email}`} className="font-medium text-[#FF6B2B] hover:underline">
                            {submission.email}
                          </a>
                          <div className="text-sm text-gray-600">Email</div>
                        </div>
                      </div>
                    )}

                    {submission.contactNumber && (
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-[#22C55E]" />
                        <div>
                          <a
                            href={`tel:+91${submission.contactNumber}`}
                            className="font-medium text-[#22C55E] hover:underline"
                          >
                            +91 {submission.contactNumber}
                          </a>
                          <div className="text-sm text-gray-600">Phone</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                {submission.message && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="w-5 h-5 text-gray-500 mt-1" />
                      <div className="flex-1">
                        <div className="font-medium text-[#1D1D1D] mb-2">Message:</div>
                        <div className="text-gray-700 bg-gray-50 p-3 rounded-lg">{submission.message}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex space-x-3">
                  {submission.email && (
                    <button
                      onClick={() => window.open(`mailto:${submission.email}`)}
                      className="bg-[#FF6B2B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e55a24] transition-colors"
                    >
                      Send Email
                    </button>
                  )}
                  {submission.contactNumber && (
                    <button
                      onClick={() => window.open(`tel:+91${submission.contactNumber}`)}
                      className="bg-[#22C55E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#16a34a] transition-colors"
                    >
                      Call Now
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {submissions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">No submissions yet</div>
            <p className="text-sm text-gray-600">
              Form submissions will appear here once your Google Sheets integration is set up and working.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
