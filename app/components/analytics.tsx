"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Google Analytics 4 Configuration
const GA4_MEASUREMENT_ID = "G-FSD3KPZWC9" // Your actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("config", GA4_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("config", GA4_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, {
      event_category: "engagement",
      event_label: parameters?.label || "",
      value: parameters?.value || 0,
      ...parameters,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formType = "contact_form") => {
  trackEvent("form_submit", {
    event_category: "form",
    event_label: formType,
    form_type: formType,
  })
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent("button_click", {
    event_category: "engagement",
    event_label: buttonName,
    button_name: buttonName,
    click_location: location || "unknown",
  })
}

// Track section views (when user scrolls to different sections)
export const trackSectionView = (sectionName: string) => {
  trackEvent("section_view", {
    event_category: "engagement",
    event_label: sectionName,
    section_name: sectionName,
  })
}

// Track traffic sources and campaigns
export const trackTrafficSource = () => {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search)
    const utmSource = urlParams.get("utm_source")
    const utmMedium = urlParams.get("utm_medium")
    const utmCampaign = urlParams.get("utm_campaign")
    const referrer = document.referrer

    if (utmSource || utmMedium || utmCampaign || referrer) {
      trackEvent("traffic_source_identified", {
        event_category: "acquisition",
        utm_source: utmSource || "direct",
        utm_medium: utmMedium || "none",
        utm_campaign: utmCampaign || "none",
        referrer: referrer || "direct",
      })
    }
  }
}

// Main Analytics component
export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page view on route change
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")
    trackPageView(url)

    // Track traffic source on initial load
    trackTrafficSource()
  }, [pathname, searchParams])

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      // Track at 25%, 50%, 75%, and 100% scroll depths
      if (scrollPercent > maxScroll) {
        if (scrollPercent >= 25 && maxScroll < 25) {
          trackEvent("scroll_depth", { event_category: "engagement", scroll_depth: "25%" })
        }
        if (scrollPercent >= 50 && maxScroll < 50) {
          trackEvent("scroll_depth", { event_category: "engagement", scroll_depth: "50%" })
        }
        if (scrollPercent >= 75 && maxScroll < 75) {
          trackEvent("scroll_depth", { event_category: "engagement", scroll_depth: "75%" })
        }
        if (scrollPercent >= 90 && maxScroll < 90) {
          trackEvent("scroll_depth", { event_category: "engagement", scroll_depth: "100%" })
        }
        maxScroll = scrollPercent
      }
    }

    window.addEventListener("scroll", trackScrollDepth)
    return () => window.removeEventListener("scroll", trackScrollDepth)
  }, [])

  return null
}
