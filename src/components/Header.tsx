"use client"

import Link from "next/link"
import { Search, UserCircle, Menu } from "lucide-react"

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-1 rounded font-bold text-xl leading-none tracking-tighter w-8 h-8 flex items-center justify-center">
              TC
            </div>
            <span className="font-bold hidden sm:inline-block">TrackCodex Support</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/tickets" className="transition-colors hover:text-foreground/80 text-foreground/60">My Tickets</Link>
            <Link href="/status" className="transition-colors hover:text-foreground/80 text-foreground/60">Status</Link>
            <Link href="https://docs.trackcodex.com" className="transition-colors hover:text-foreground/80 text-foreground/60">Docs</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="hidden lg:flex items-center relative h-9 w-[200px] lg:w-[300px] rounded-md border border-input bg-transparent px-3 py-1 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent/50 group"
          >
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100" />
            <span>Search help...</span>
            <kbd className="pointer-events-none absolute right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <UserCircle className="h-6 w-6 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Alex Developer</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    developer@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/tickets">My Tickets</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/billing">Billing Help</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
