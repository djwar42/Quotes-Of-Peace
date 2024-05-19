import Link from 'next/link'
import QuoteGenerator from './components/QuoteGenerator'
import { Logo } from './components/icons'
import { getAllQuotes } from '@/lib/quotes'

export default async function Home() {
  const quotes = getAllQuotes()
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#48cae4]'>
        <Link className='flex items-center' href='#'>
          <Logo className='h-10 w-10 text-white' />
          <span className='ml-2 text-lg font-medium text-white'>
            Quotes of Peace
          </span>
        </Link>
      </header>
      <main className='flex-1 flex flex-col items-center justify-center px-4 relative'>
        <QuoteGenerator initialQuote={quote} />
      </main>
      <footer className='flex items-center justify-center bg-gradient-to-r from-[#ff6b6b] to-[#48cae4] py-4'>
        <Link className='flex items-center' href='#'>
          <Logo className='h-10 w-10 text-white' />
          <span className='ml-2 text-lg font-medium text-white'>
            Quotes of Peace
          </span>
        </Link>
      </footer>
    </div>
  )
}
