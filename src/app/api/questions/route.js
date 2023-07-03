import { NextResponse } from "next/server";

export async function GET() {
    const token = await fetch('https://opentdb.com/api_token.php?command=request')
    const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json()

    const { results } = data

    return NextResponse.json({ results, token })
}
