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
    <div className="container max-w-5xl py-12">
      <PageHeader 
        title="Support Requests" 
        description="View and manage your healthcare platform support requests."
      />

      <div className="mb-8 relative max-w-md">
        <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
        <Input 
          placeholder="Search requests by ID or subject..." 
          className="pl-10 h-10 bg-white border-slate-200 focus:border-blue-500 rounded-lg shadow-2xs text-slate-900 placeholder:text-slate-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 bg-slate-100/80 border border-slate-200/80 p-1 rounded-xl">
          <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-xs font-semibold text-slate-600 rounded-lg">
            All Requests ({filteredTickets.length})
          </TabsTrigger>
          <TabsTrigger value="open" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-xs font-semibold text-slate-600 rounded-lg">
            Open & Pending ({openTickets.length})
          </TabsTrigger>
          <TabsTrigger value="resolved" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-xs font-semibold text-slate-600 rounded-lg">
            Resolved ({resolvedTickets.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {filteredTickets.length > 0 ? (
            filteredTickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground border rounded-lg border-dashed">
              No support requests found matching your search.
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
              You have no open support requests.
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
              You have no resolved support requests.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
