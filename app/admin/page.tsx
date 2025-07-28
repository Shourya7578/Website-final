"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormSubmission {
  id: string
  type: "partnership" | "sample" | "contact"
  name: string
  email: string
  company?: string
  phone?: string
  message?: string
  createdAt: string
  status: "new" | "contacted" | "converted"
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [filter, setFilter] = useState<"all" | "partnership" | "sample" | "contact">("all")

  useEffect(() => {
    // Fetch submissions from your backend
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/submissions")
      const data = await response.json()
      setSubmissions(data)
    } catch (error) {
      console.error("Failed to fetch submissions:", error)
    }
  }

  const filteredSubmissions = submissions.filter((sub) => filter === "all" || sub.type === filter)

  const updateStatus = async (id: string, status: FormSubmission["status"]) => {
    try {
      await fetch(`/api/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
      fetchSubmissions()
    } catch (error) {
      console.error("Failed to update status:", error)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF5EB] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">
            Scandalous Foods - Admin Dashboard
          </h1>

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-6">
            {["all", "partnership", "sample", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  filter === tab
                    ? "bg-[#FF6B2B] text-white"
                    : "bg-white text-[#1D1D1D] hover:bg-[#FF6B2B] hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}(
                {submissions.filter((s) => tab === "all" || s.type === tab).length})
              </button>
            ))}
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
                <CardTitle className="text-sm font-medium text-[#96C1DA]">New Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#FF6B2B]">
                  {submissions.filter((s) => s.status === "new").length}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#96C1DA]">Sample Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#1D1D1D]">
                  {submissions.filter((s) => s.type === "sample").length}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#96C1DA]">Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {submissions.filter((s) => s.status === "converted").length}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Submissions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Form Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-[#1D1D1D]">Date</th>
                    <th className="text-left p-4 font-medium text-[#1D1D1D]">Type</th>
                    <th className="text-left p-4 font-medium text-[#1D1D1D]">Name</th>
                    <th className="text-left p-4 font-medium text-[#1D1D1D]">Company</th>
                    <th className="text-left p-4 font-medium text-[#1D1D1D]">Email</th>
                    <th className="text-left p-4 font-medium text-[#1D1D1D]">Status</th>
                    <th className="text-left p-4 font-medium text-[#1D1D1D]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-sm">{new Date(submission.createdAt).toLocaleDateString()}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            submission.type === "sample"
                              ? "bg-[#FF6B2B] text-white"
                              : submission.type === "partnership"
                                ? "bg-[#96C1DA] text-white"
                                : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {submission.type}
                        </span>
                      </td>
                      <td className="p-4 font-medium">{submission.name}</td>
                      <td className="p-4">{submission.company || "-"}</td>
                      <td className="p-4">{submission.email}</td>
                      <td className="p-4">
                        <select
                          value={submission.status}
                          onChange={(e) => updateStatus(submission.id, e.target.value as any)}
                          className="text-sm border rounded px-2 py-1"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => window.open(`mailto:${submission.email}`)}
                          className="text-[#FF6B2B] hover:text-[#e55a24] text-sm font-medium"
                        >
                          Email
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
