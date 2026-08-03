"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200/80 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Organized Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-black tracking-tight text-slate-800 font-sans">
                AxioVital
              </span>
            </Link>
            
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal">
              Comprehensive digital healthcare platform designed to simplify the healthcare journey for patients, doctors, hospitals, clinics, and laboratories.
            </p>

            <div className="pt-2 space-y-2">
              <label htmlFor="footer-email" className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                SUBSCRIBE TO HEALTH UPDATES
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter business email"
                  className="bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 shadow-2xs w-full transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#18181b] hover:bg-[#0f172a] text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors shrink-0 cursor-pointer shadow-2xs"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Column 1: CARE SOLUTIONS */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">CARE SOLUTIONS</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li><Link href="https://axiovital.quantaforze.com/hospitals" className="text-slate-600 hover:text-slate-900 transition-colors">Hospitals & Medical Networks</Link></li>
              <li><Link href="https://axiovital.quantaforze.com/clinics" className="text-slate-600 hover:text-slate-900 transition-colors">Outpatient Clinics</Link></li>
              <li><Link href="https://axiovital.quantaforze.com/providers" className="text-slate-600 hover:text-slate-900 transition-colors">Physicians & Doctors</Link></li>
              <li><Link href="https://axiovital.quantaforze.com/laboratories" className="text-slate-600 hover:text-slate-900 transition-colors">Diagnostic Laboratories</Link></li>
              <li><Link href="https://axiovital.quantaforze.com/patients" className="text-slate-600 hover:text-slate-900 transition-colors">Patients & Family Portals</Link></li>
            </ul>
          </div>

          {/* Column 2: PRODUCTS */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">PRODUCTS</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li><Link href="https://axiovital.quantaforze.com/patients" className="text-slate-600 hover:text-slate-900 transition-colors">Online Appointment Booking</Link></li>
              <li><Link href="https://axiovital.quantaforze.com/hospitals" className="text-slate-600 hover:text-slate-900 transition-colors">Queue-Free Hospital Check-In</Link></li>
              <li><Link href="https://axiovital.quantaforze.com/platform" className="text-slate-600 hover:text-slate-900 transition-colors">Electronic Health Records (EHR)</Link></li>
              <li><Link href="https://axiovital.quantaforze.com/providers" className="text-slate-600 hover:text-slate-900 transition-colors">Digital Prescriptions</Link></li>
              <li><Link href="https://axiovital.quantaforze.com/products" className="text-slate-600 hover:text-slate-900 transition-colors">AXIO Smart NFC Card</Link></li>
            </ul>
          </div>

          {/* Column 3: COMPANY & SUPPORT */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">COMPANY & SUPPORT</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li><Link href="https://axiovital.quantaforze.com/about" className="text-slate-600 hover:text-slate-900 transition-colors">About AxioVital</Link></li>
              <li><Link href="/tickets" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-slate-900">Support Requests</Link></li>
              <li><Link href="/status" className="text-slate-600 hover:text-slate-900 transition-colors">System Status</Link></li>
              <li><Link href="https://docs.axiovital.quantaforze.com" className="text-slate-600 hover:text-slate-900 transition-colors">Developer Documentation</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AxioVital Digital Healthcare Technologies Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-500">
            <Link href="/policies" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/policies" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <span>•</span>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
              className="hover:text-slate-900 transition-colors"
            >
              Cookie Preferences
            </button>
            <span>•</span>
            <Link href="/security" className="hover:text-slate-900 transition-colors">Security & HIPAA Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
