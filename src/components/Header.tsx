"use client"

import Link from "next/link"
import { Search, UserCircle, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="w-full z-50 shadow-xs font-sans">
      {/* Top Header Bar */}
      <div className="bg-white border-b border-slate-200/80 px-4 lg:px-8 py-2.5">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-red-600 font-sans uppercase">
                AXIOVITAL
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                Support
              </span>
            </Link>
          </div>

          {/* Central Search Bar (Matching Screenshot 4) */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-command-palette"))}
              className="w-full flex items-center gap-3 bg-white border border-slate-300 rounded-lg px-3.5 py-1.5 text-sm text-slate-500 hover:border-slate-400 hover:shadow-2xs transition-all text-left group"
            >
              <Search className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
              <span className="truncate text-xs text-slate-600">Search AxioVital solutions, products, appointment booking, EHR...</span>
              <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-500 sm:flex">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100/80 px-2.5 py-1.5 rounded-md border border-slate-200 shadow-2xs">
              <svg className="w-4 h-3 rounded-2xs overflow-hidden shrink-0 shadow-2xs" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF9933" d="M0 0h640v160H0z"/>
                <path fill="#FFFFFF" d="M0 160h640v160H0z"/>
                <path fill="#138808" d="M0 320h640v160H0z"/>
                <circle cx="320" cy="240" r="50" fill="none" stroke="#000080" strokeWidth="6"/>
                <circle cx="320" cy="240" r="10" fill="#000080"/>
                <g stroke="#000080" strokeWidth="3">
                  <line x1="320" y1="190" x2="320" y2="290"/>
                  <line x1="270" y1="240" x2="370" y2="240"/>
                  <line x1="284.6" y1="204.6" x2="355.4" y2="275.4"/>
                  <line x1="284.6" y1="275.4" x2="355.4" y2="204.6"/>
                </g>
              </svg>
              <span>IN</span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-slate-100">
                  <UserCircle className="h-5 w-5 text-slate-700" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 bg-white border border-slate-200 shadow-lg text-slate-900" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold leading-none text-slate-900">Dr. Sarah Jenkins</p>
                    <p className="text-xs leading-none text-slate-500">
                      dr.jenkins@axiovital-health.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="hover:bg-slate-100 cursor-pointer">
                  <Link href="/tickets">Support Requests</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-slate-100 cursor-pointer">
                  <Link href="/billing">Billing & Insurance</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-slate-100 cursor-pointer text-red-600">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-700 hover:bg-slate-100">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>

        </div>
      </div>

      {/* Dark Charcoal Subnav Bar (Matching Screenshot 4: bg-[#211f1c]) */}
      <div className="bg-[#211f1c] text-white text-xs font-medium px-4 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl flex items-center space-x-8 h-10 overflow-x-auto scrollbar-none">
          <Link href="/" className="h-full flex items-center border-b-2 border-amber-400 font-bold text-white tracking-wide">
            Overview
          </Link>
          <Link href="/tickets" className="h-full flex items-center hover:text-amber-400 transition-colors text-slate-300">
            Support Requests
          </Link>
          <Link href="/status" className="h-full flex items-center hover:text-amber-400 transition-colors text-slate-300">
            System Status
          </Link>
          <Link href="https://docs.axiovital.quantaforze.com" className="h-full flex items-center hover:text-amber-400 transition-colors text-slate-300">
            Healthcare Products
          </Link>
          <Link href="https://axiovital.quantaforze.com" className="h-full flex items-center hover:text-amber-400 transition-colors text-slate-300">
            Solutions
          </Link>
          <Link href="/contact" className="h-full flex items-center hover:text-amber-400 transition-colors text-slate-300">
            Segments
          </Link>
        </div>
      </div>

      {/* Sub-header Breadcrumbs Bar */}
      <div className="bg-slate-100/70 border-b border-slate-200/80 px-4 lg:px-8 py-1.5 text-xs text-slate-600 font-sans">
        <div className="mx-auto max-w-7xl flex items-center gap-1.5">
          <Link href="https://axiovital.quantaforze.com" className="hover:text-blue-600 transition-colors">AxioVital Support</Link>
          <span className="text-slate-400 font-bold">›</span>
          <span className="font-semibold text-slate-900">Integrated Digital Healthcare Support Portal</span>
        </div>
      </div>
    </header>
  )
}
