import { NextResponse } from 'next/server'
import { getAllQuotes } from '@/lib/quotes'

export async function GET() {
  const quotes = getAllQuotes()
  const randomIndex = Math.floor(Math.random() * quotes.length)
  console.log(randomIndex)
  const quote = quotes[randomIndex]
  return NextResponse.json(quote)
}
