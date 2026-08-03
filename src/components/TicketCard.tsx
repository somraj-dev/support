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
      <Card className="p-5 bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group rounded-xl shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 overflow-hidden">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">{ticket.id}</span>
              <span>•</span>
              <span>Logged {formatDistanceToNow(ticket.createdAt, { addSuffix: true })}</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base truncate group-hover:text-blue-600 transition-colors">
              {ticket.subject}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-1 leading-relaxed">
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
