"use client"

import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <button 
        onClick={() => document.dispatchEvent(new CustomEvent("open-command-palette"))}
        className="flex w-full items-center rounded-full border-2 border-primary/20 bg-background/50 pl-12 pr-4 py-4 text-base md:text-lg shadow-sm hover:border-primary/40 text-left text-muted-foreground transition-colors backdrop-blur group"
      >
        <Search className="absolute left-4 h-5 w-5 group-hover:text-primary transition-colors" />
        Search for answers...
        <kbd className="absolute right-4 hidden sm:inline-flex h-6 items-center gap-1 rounded border bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
    </div>
  )
}
