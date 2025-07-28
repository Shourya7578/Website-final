"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, parameters)
  }

  // Facebook Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    ;(window as any).fbq("track", eventName, parameters)
  }

  // Microsoft Clarity
  if (typeof window !== "undefined" && (window as any).clarity) {
    ;(window as any).clarity("event", eventName)
  }
}

// Track form submissions
export const trackFormSubmission = (formType: string, formData?: Record<string, any>) => {
  trackEvent("form_submission", {
    form_type: formType,
    ...formData,
  })
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location,
  })
}

// Track page views
export const trackPageView = (pagePath: string) => {
  // Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("config", "GA_MEASUREMENT_ID", {
      page_path: pagePath,
    })
  }

  // Facebook Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    ;(window as any).fbq("track", "PageView")
  }
}

// Analytics component to track route changes
export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    trackPageView(pathname)
  }, [pathname])

  return null
}
