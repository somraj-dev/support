import { NextResponse } from "next/server"
import { mockTickets } from "@/lib/mock-data"

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const ticket = mockTickets.find(t => t.id === params.id)
  
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 })
  }

  return NextResponse.json(ticket)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const ticket = mockTickets.find(t => t.id === params.id)

    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 })
    }

    // Stub update
    const updatedTicket = { ...ticket, ...body, updatedAt: new Date() }

    return NextResponse.json(updatedTicket)
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
