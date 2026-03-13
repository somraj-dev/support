import Link from "next/link"
import { AlertTriangle, CheckCircle2 } from "lucide-react"

interface StatusBannerProps {
  incidents: { id: string; title: string }[]
}

export function StatusBanner({ incidents }: StatusBannerProps) {
  if (incidents.length === 0) {
    return (
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
        <div className="container py-2 text-sm flex items-center justify-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          <span>All systems operational.</span>
          <Link href="/status" className="underline font-medium hover:text-emerald-700 dark:hover:text-emerald-300">
            View status page
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-destructive/10 border-b border-destructive/20 text-destructive dark:text-red-400">
      <div className="container py-2 text-sm flex items-center justify-center gap-2">
        <AlertTriangle className="h-4 w-4" />
        <span className="font-semibold">TrackCodex is experiencing an incident:</span>
        <span>{incidents[0].title}</span>
        <Link href="/status" className="underline font-medium hover:text-destructive dark:hover:text-red-300 ml-2">
          More details
        </Link>
      </div>
    </div>
  )
}
