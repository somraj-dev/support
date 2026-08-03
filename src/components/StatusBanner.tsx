import Link from "next/link"
import { AlertTriangle, CheckCircle2 } from "lucide-react"

interface StatusBannerProps {
  incidents: { id: string; title: string }[]
}

export function StatusBanner({ incidents }: StatusBannerProps) {
  if (incidents.length === 0) {
    return (
      <div className="bg-emerald-50 border-b border-emerald-200/80 text-emerald-800">
        <div className="container py-1 text-[11px] font-medium flex items-center justify-center gap-1.5 leading-none">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>All AxioVital Healthcare Systems & FHIR Integration Gateways are fully operational.</span>
          <Link href="/status" className="underline font-semibold hover:text-emerald-950 ml-0.5">
            System status page
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900">
      <div className="container py-1 text-[11px] font-medium flex items-center justify-center gap-1.5 leading-none">
        <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0" />
        <span className="font-bold">Maintenance Notice:</span>
        <span className="truncate max-w-md">{incidents[0].title}</span>
        <Link href="/status" className="underline font-semibold hover:text-amber-950 ml-0.5">
          More details
        </Link>
      </div>
    </div>
  )
}
