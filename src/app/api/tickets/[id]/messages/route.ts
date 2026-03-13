import { NextResponse } from "next/server"
import { mockMessages } from "@/lib/mock-data"

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const messages = mockMessages.filter(m => m.ticketId === params.id)
  return NextResponse.json(messages)
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    // Stub message creation
    const newMessage = {
      id: `msg_${Math.random().toString(36).substring(2, 9)}`,
      ticketId: params.id,
      body: body.message,
      senderId: "usr_1",
      createdAt: new Date(),
      isInternal: false,
    }

    return NextResponse.json(newMessage, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
