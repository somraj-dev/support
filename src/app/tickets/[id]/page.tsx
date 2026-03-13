"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { PageHeader } from "@/components/PageHeader"
import { StatusBadge } from "@/components/StatusBadge"
import { SeverityBadge } from "@/components/SeverityBadge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { mockTickets, mockMessages, currentUser } from "@/lib/mock-data"
import { formatDistanceToNow, format } from "date-fns"
import { FileUp, Send, UserCircle2, Clock } from "lucide-react"
import Image from "next/image"

export default function TicketDetailPage() {
  const params = useParams()
  const ticketId = params.id as string
  
  // Use mock data for demo
  const ticket = mockTickets.find(t => t.id === ticketId) || mockTickets[0]
  const messages = mockMessages.filter(m => m.ticketId === ticket.id)
  
  const [reply, setReply] = useState("")

  const handleReplySubmit = () => {
    // Submit reply logic
    setReply("")
  }

  return (
    <div className="container max-w-6xl py-10">
      <PageHeader 
        title={ticket.subject}
        breadcrumbs={[
          { label: "Tickets", href: "/tickets" },
          { label: ticket.id }
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          {/* Original Ticket Description */}
          <div className="flex gap-4">
            <div className="shrink-0 mt-1">
              {ticket.requester?.avatarUrl ? (
                <Image 
                  src={ticket.requester.avatarUrl} 
                  alt={ticket.requester.name || "Requester"} 
                  width={40} 
                  height={40} 
                  className="rounded-full" 
                />
              ) : (
                <UserCircle2 className="w-10 h-10 text-muted-foreground" />
              )}
            </div>
            <Card className="flex-1 overflow-hidden border-primary/20 bg-background/50">
              <div className="bg-muted px-4 py-3 flex items-center justify-between border-b text-sm">
                <div>
                  <span className="font-semibold">{ticket.requester?.name}</span>
                  <span className="text-muted-foreground mx-2">reported</span>
                  <span className="text-muted-foreground" title={format(ticket.createdAt, 'PPpp')}>
                    {formatDistanceToNow(ticket.createdAt, { addSuffix: true })}
                  </span>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6 text-foreground/90 whitespace-pre-wrap">
                {ticket.description}
              </CardContent>
            </Card>
          </div>

          {/* Messages */}
          {messages.map(msg => (
            <div key={msg.id} className="flex gap-4">
              <div className="shrink-0 mt-1">
                {msg.sender?.avatarUrl ? (
                  <Image 
                    src={msg.sender.avatarUrl} 
                    alt={msg.sender.name || "Sender"} 
                    width={40} 
                    height={40} 
                    className="rounded-full" 
                  />
                ) : (
                  <UserCircle2 className="w-10 h-10 text-muted-foreground" />
                )}
              </div>
              <Card className="flex-1 overflow-hidden border">
                <div className="bg-muted/50 px-4 py-3 flex items-center justify-between border-b text-sm">
                  <div>
                    <span className="font-semibold">{msg.sender?.name}</span>
                    {msg.sender?.id !== currentUser.id && (
                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                        Staff
                      </span>
                    )}
                    <span className="text-muted-foreground mx-2">replied</span>
                    <span className="text-muted-foreground" title={format(msg.createdAt, 'PPpp')}>
                      {formatDistanceToNow(msg.createdAt, { addSuffix: true })}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 text-foreground/90 whitespace-pre-wrap">
                  {msg.body}
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Reply Composer */}
          <div className="flex gap-4 mt-8">
            <div className="shrink-0 mt-1 hidden sm:block">
              {currentUser.avatarUrl ? (
                <Image 
                  src={currentUser.avatarUrl} 
                  alt={currentUser.name || "User"} 
                  width={40} 
                  height={40} 
                  className="rounded-full" 
                />
              ) : (
                <UserCircle2 className="w-10 h-10 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1 space-y-4">
              <Textarea 
                placeholder="Write a reply..."
                className="min-h-[150px] resize-y"
                value={reply}
                onChange={e => setReply(e.target.value)}
              />
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" className="text-muted-foreground">
                  <FileUp className="w-4 h-4 mr-2" />
                  Attach Files
                </Button>
                <Button onClick={handleReplySubmit} disabled={!reply.trim()}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Reply
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 shrink-0 space-y-6">
          <Card>
            <CardHeader className="pb-3 border-b bg-muted/20">
              <CardTitle className="text-base">Ticket Details</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-muted-foreground">ID</span>
                <span className="font-mono">{ticket.id}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-muted-foreground">Status</span>
                <StatusBadge status={ticket.status} />
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-muted-foreground">Severity</span>
                <SeverityBadge severity={ticket.severity} />
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-muted-foreground">Category</span>
                <span className="font-medium">{ticket.category.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Organization</span>
                <span className="font-medium">Acme Corp</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground">SLA Status</p>
                <p className="text-muted-foreground mt-1">First response targets met. Resolution target is 24 hours.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
