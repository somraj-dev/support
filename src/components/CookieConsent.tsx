"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

const STORAGE_KEY = "trackcodex_cookie_consent"

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const handleOpenSettings = () => {
      setIsVisible(true)
      setShowSettings(true)
    }

    window.addEventListener("open-cookie-settings", handleOpenSettings)
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings)
  }, [])

  const handleAcceptAll = () => {
    const newPrefs = { essential: true, analytics: true, marketing: true }
    savePreferences(newPrefs)
  }

  const handleRejectAll = () => {
    const newPrefs = { essential: true, analytics: false, marketing: false }
    savePreferences(newPrefs)
  }

  const handleSaveSettings = () => {
    savePreferences(preferences)
    setShowSettings(false)
  }

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    setPreferences(prefs)
    setIsVisible(false)
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: prefs }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-[#11141A] border-t border-[#1E232E] shadow-2xl animate-in slide-in-from-bottom duration-500">
      {!showSettings ? (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-2">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#c9d1d9] mb-1">We value your privacy</h3>
            <p className="text-sm text-[#8b949e]">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{" "}
              <Link href="https://docs.trackcodex.com/governance/policies/privacy" className="text-[#58a6ff] hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 text-sm font-medium text-[#c9d1d9] bg-[#11141A] border border-[#1E232E] rounded-md hover:bg-[#30363d] transition-colors"
            >
              Customize
            </button>
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-[#c9d1d9] bg-[#11141A] border border-[#1E232E] rounded-md hover:bg-[#30363d] transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-[#238636] rounded-md hover:bg-[#2ea043] transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-[#0A0D14] p-6 rounded-lg border border-[#1E232E] my-4">
          <h3 className="text-lg font-bold text-[#c9d1d9] mb-4">Cookie Preferences</h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#c9d1d9]">Essential</p>
                <p className="text-xs text-[#8b949e]">Required for the site to function properly.</p>
              </div>
              <input type="checkbox" checked={preferences.essential} disabled className="w-5 h-5 accent-[#238636]" title="Essential cookies (required)" aria-label="Essential cookies (required)" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#c9d1d9]">Analytics</p>
                <p className="text-xs text-[#8b949e]">Help us improve our website by collecting information on how you use it.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-5 h-5 accent-[#238636]"
                title="Analytics cookies"
                aria-label="Analytics cookies"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#c9d1d9]">Marketing</p>
                <p className="text-xs text-[#8b949e]">Used to track visitors to display relevant experiences.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="w-5 h-5 accent-[#238636]"
                title="Marketing cookies"
                aria-label="Marketing cookies"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowSettings(false)}
              className="px-4 py-2 text-sm font-medium text-[#c9d1d9] bg-[#11141A] border border-[#1E232E] rounded-md hover:bg-[#30363d]"
            >
              Back
            </button>
            <button
              onClick={handleSaveSettings}
              className="px-4 py-2 text-sm font-medium text-white bg-[#238636] rounded-md hover:bg-[#2ea043]"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
