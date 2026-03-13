import { NextResponse } from "next/server"
import { mockTickets } from "@/lib/mock-data"
import { TicketStatus, TicketSeverity, TicketCategory } from "@/lib/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")

  let tickets = mockTickets

  if (status) {
    tickets = tickets.filter(t => t.status === status)
  }

  return NextResponse.json(tickets)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Stub ticket creation
    const newTicket = {
      id: `TCK-${Math.floor(Math.random() * 9000) + 1000}`,
      subject: body.subject,
      description: body.description,
      status: TicketStatus.OPEN,
      severity: body.severity || TicketSeverity.LOW,
      category: body.category || TicketCategory.OTHER,
      createdAt: new Date(),
      updatedAt: new Date(),
      requesterId: "usr_1",
    }

    return NextResponse.json(newTicket, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
