// app/page.tsx
import Link from 'next/link'
import QuoteGenerator from './components/QuoteGenerator'
import { Logo } from './components/icons'

const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.BASE_URL
  } else {
    return 'http://localhost:3000'
  }
}

async function getRandomQuote() {
  const baseUrl = getBaseUrl()
  const response = await fetch(`${baseUrl}/api/quotes/random`, {
    cache: 'no-store'
  })
  const quote = await response.json()
  return quote
}

export default async function Home() {
  const quote = await getRandomQuote()

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
