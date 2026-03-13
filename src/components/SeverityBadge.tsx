import { Badge } from "@/components/ui/badge"
import { TicketSeverity } from "@/lib/types"

interface SeverityBadgeProps {
  severity: TicketSeverity
}

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  switch (severity) {
    case TicketSeverity.LOW:
      return <Badge variant="secondary" className="bg-slate-500/10 text-slate-500 hover:bg-slate-500/20">Low</Badge>
    case TicketSeverity.MEDIUM:
      return <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Medium</Badge>
    case TicketSeverity.HIGH:
      return <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">High</Badge>
    case TicketSeverity.CRITICAL:
      return <Badge variant="destructive">Critical</Badge>
    default:
      return <Badge variant="outline">{severity}</Badge>
  }
}
