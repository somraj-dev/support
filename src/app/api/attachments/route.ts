import { NextResponse } from "next/server"

export async function POST() {
  try {
    // In a real app, parse FormData file upload here
    // const formData = await request.formData();
    // const file = formData.get("file");

    const stubUrl = `https://storage.trackcodex.com/stub/${Math.random().toString(36).substring(2, 9)}.png`

    return NextResponse.json({
      success: true,
      url: stubUrl,
      id: `att_${Math.random().toString(36).substring(2, 9)}`
    }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
