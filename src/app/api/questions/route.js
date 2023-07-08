import { NextResponse } from "next/server";

export async function GET() {
    const tokenGet = await fetch('https://opentdb.com/api_token.php?command=request', {
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const tokenRes = await tokenGet.json()
    const { token } = tokenRes

    const res = await fetch(`https://opentdb.com/api.php?amount=10&type=multiple&token=2cd908401f116cef1daf618af4f070e23e088f77cc4009e7ec8ee0eddadac7d1`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await res.json()
    const { results } = data

    return NextResponse.json({ results })
}
