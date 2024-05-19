// app/api/quotes/random/route.ts
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

function getAllQuotes(content: string) {
  const quotes = content.split('\n\n')
  return quotes.map((quote) => {
    const [text, author] = quote.split('\n- ')
    return {
      text: text.trim(),
      author: author ? author.trim() : ''
    }
  })
}

export async function GET() {
  const filePath = path.join(process.cwd(), 'lib', 'quotes.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const quotes = getAllQuotes(fileContent)
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]

  const response = NextResponse.json(quote)
  response.headers.set('Cache-Control', 'no-store')

  return response
}
