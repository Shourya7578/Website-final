"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface PopupModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PopupModal({ isOpen, onClose }: PopupModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Partnership Inquiry - Scandalous Foods")
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Business Type: ${formData.businessType}

I'm interested in partnering with Scandalous Foods for my business.
    `)
    window.location.href = `mailto:sales@scandalousfoods.in?subject=${subject}&body=${body}`
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#FFF5EB] rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1D1D1D] hover:text-[#FF6B2B] transition-colors duration-200"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#1D1D1D] font-['Poppins'] mb-2">Ready to Add Mithai to Your Menu?</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200"
              required
            />
          </div>
          <div>
            <select
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:border-[#FF6B2B] focus:outline-none transition-colors duration-200"
              required
            >
              <option value="">Select Business Type</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Cloud Kitchen">Cloud Kitchen</option>
              <option value="Hotel">Hotel</option>
              <option value="Café">Café</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF6B2B] text-white py-3 rounded-lg font-semibold hover:bg-[#e55a24] transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  )
}
