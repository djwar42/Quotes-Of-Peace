// quotes.ts
import fs from 'fs'

const fileContent = fs.readFileSync('./lib/quotes.md', 'utf8')

export function getAllQuotes() {
  const quotes = fileContent.split('\n\n')
  return quotes.map((quote) => {
    const [text, author] = quote.split('\n- ')
    return {
      text: text.trim(),
      author: author ? author.trim() : ''
    }
  })
}
