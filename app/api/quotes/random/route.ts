import { NextResponse } from 'next/server'
import { getAllQuotes } from '@/lib/quotes'

export async function GET() {
  const quotes = getAllQuotes()
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]

  const response = NextResponse.json(quote)
  response.headers.set('Cache-Control', 'no-store')

  return response
}
