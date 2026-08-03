"use client"

import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <button 
        onClick={() => document.dispatchEvent(new CustomEvent("open-command-palette"))}
        className="flex w-full items-center rounded-full border border-slate-200 bg-white pl-12 pr-4 py-4 text-base shadow-md shadow-slate-900/5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-900/5 text-left text-slate-500 transition-all group"
      >
        <Search className="absolute left-4.5 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
        <span className="text-slate-600 font-normal">Search healthcare help articles, appointments, EHR...</span>
        <kbd className="absolute right-4 hidden sm:inline-flex h-6 items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 font-mono text-[10px] font-medium text-slate-500 shadow-2xs">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
    </div>
  )
}
