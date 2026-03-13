import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <input
        type="search"
        placeholder="Search for answers..."
        className="block w-full rounded-full border-2 border-primary/20 bg-background/50 pl-12 pr-4 py-4 text-base md:text-lg shadow-sm focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur transition-colors"
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
    </div>
  )
}
