"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CreditCard,
  Ticket,
  PlusCircle,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Activity,
  Home,
  LifeBuoy
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    // Custom event listener for triggering from other components
    const handleOpen = () => setOpen(true)
    document.addEventListener("open-command-palette", handleOpen)
    document.addEventListener("keydown", down)
    
    return () => {
      document.removeEventListener("keydown", down)
      document.removeEventListener("open-command-palette", handleOpen)
    }
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick Actions">
          <CommandItem onSelect={() => runCommand(() => router.push("/new"))}>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Submit New Ticket</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/tickets"))}>
            <Ticket className="mr-2 h-4 w-4" />
            <span>View My Tickets</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/status"))}>
            <Activity className="mr-2 h-4 w-4" />
            <span>System Status</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/billing"))}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing Help</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/security"))}>
            <ShieldCheck className="mr-2 h-4 w-4" />
            <span>Security Report</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/abuse"))}>
            <AlertTriangle className="mr-2 h-4 w-4" />
            <span>Report Abuse</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/policies"))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Legal & Policies</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Contact Support</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
