import { Badge } from "@/components/ui/badge"
import { TicketStatus } from "@/lib/types"
import { CheckCircle2, Clock, Inbox, Archive } from "lucide-react"

interface StatusBadgeProps {
  status: TicketStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case TicketStatus.OPEN:
      return (
        <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
          <Inbox className="w-3 h-3 mr-1" /> Open
        </Badge>
      )
    case TicketStatus.PENDING:
      return (
        <Badge variant="outline" className="text-amber-500 border-amber-500/50">
          <Clock className="w-3 h-3 mr-1" /> Pending
        </Badge>
      )
    case TicketStatus.RESOLVED:
      return (
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20">
          <CheckCircle2 className="w-3 h-3 mr-1" /> Resolved
        </Badge>
      )
    case TicketStatus.ARCHIVED:
      return (
        <Badge variant="secondary" className="text-muted-foreground">
          <Archive className="w-3 h-3 mr-1" /> Archived
        </Badge>
      )
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}
