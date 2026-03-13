"use client"

import { useState } from "react"
import { PageHeader } from "@/components/PageHeader"
import { TicketCard } from "@/components/TicketCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { mockTickets } from "@/lib/mock-data"
import { Search } from "lucide-react"
import { TicketStatus } from "@/lib/types"

export default function TicketsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredTickets = mockTickets.filter(ticket => 
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const openTickets = filteredTickets.filter(t => t.status === TicketStatus.OPEN || t.status === TicketStatus.PENDING)
  const resolvedTickets = filteredTickets.filter(t => t.status === TicketStatus.RESOLVED)
  
  return (
    <div className="container max-w-5xl py-10">
      <PageHeader 
        title="My Tickets" 
        description="View and manage your support requests."
      />

      <div className="mb-8 relative max-w-md">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search tickets by ID or subject..." 
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 bg-muted/50 border">
          <TabsTrigger value="all">All Tickets ({filteredTickets.length})</TabsTrigger>
          <TabsTrigger value="open">Open & Pending ({openTickets.length})</TabsTrigger>
          <TabsTrigger value="resolved">Resolved ({resolvedTickets.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {filteredTickets.length > 0 ? (
            filteredTickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground border rounded-lg border-dashed">
              No tickets found matching your search.
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="open" className="space-y-4">
          {openTickets.length > 0 ? (
            openTickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground border rounded-lg border-dashed">
              You have no open tickets.
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="resolved" className="space-y-4">
          {resolvedTickets.length > 0 ? (
            resolvedTickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground border rounded-lg border-dashed">
              You have no resolved tickets.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
