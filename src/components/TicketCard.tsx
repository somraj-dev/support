import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { Ticket } from "@/lib/types"
import { StatusBadge } from "./StatusBadge"
import { SeverityBadge } from "./SeverityBadge"
import { Card } from "./ui/card"

interface TicketCardProps {
  ticket: Ticket
}

export function TicketCard({ ticket }: TicketCardProps) {
  return (
    <Link href={`/tickets/${ticket.id}`}>
      <Card className="p-4 sm:p-5 hover:bg-muted/50 transition-colors cursor-pointer group border-muted-foreground/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 overflow-hidden">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <span className="font-mono text-primary/80">{ticket.id}</span>
              <span>•</span>
              <span>Created {formatDistanceToNow(ticket.createdAt, { addSuffix: true })}</span>
            </div>
            <h3 className="font-medium text-base truncate group-hover:text-primary transition-colors">
              {ticket.subject}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {ticket.description}
            </p>
          </div>
          <div className="flex items-center gap-2 sm:flex-col sm:items-end shrink-0">
            <StatusBadge status={ticket.status} />
            <SeverityBadge severity={ticket.severity} />
          </div>
        </div>
      </Card>
    </Link>
  )
}
