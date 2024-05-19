'use client'
import { useState } from 'react'
import { Card } from './ui/Card'
import {
  QuoteIcon,
  XIcon,
  FacebookIcon,
  GenerateIcon,
  LoadingIcon
} from './icons'

interface Quote {
  text: string
  author: string
}

export default function QuoteGenerator({
  initialQuote
}: {
  initialQuote: Quote
}) {
  const [quote, setQuote] = useState(initialQuote)
  const [loading, setLoading] = useState(false)

  const generateNewQuote = () => {
    setLoading(true)
    // Fetch a new random quote from the server
    fetch('/api/quotes/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data)
        setLoading(false)
      })
  }

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quote.text
    )} - ${encodeURIComponent(quote.author)}`
    window.open(twitterUrl, '_blank')
  }

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(
      quote.author
    )}`
    window.open(facebookUrl, '_blank')
  }

  return (
    <>
      <Card className='max-w-md w-full mt-5 mb-5 bg-gradient-to-br from-[#ff6b6b] to-[#48cae4] shadow-lg rounded-lg p-6 relative z-10'>
        <div className='flex flex-col items-center'>
          <QuoteIcon className='h-12 w-12 text-[#f1f5f9] mb-4' />
          <blockquote className='text-center text-[25px] font-medium text-[#f1f5f9] mb-4'>
            {quote.text}
          </blockquote>
          <p className='text-[#e2e8f0] text-xl'>- {quote.author}</p>
          <div className='flex items-center justify-center mt-6 space-x-4'>
            <button
              className='text-[#e2e8f0] hover:text-white'
              onClick={shareOnTwitter}
            >
              <XIcon className='h-6 w-6' />
            </button>
            {/* <button
            className='text-[#e2e8f0] hover:text-white'
            onClick={shareOnFacebook}
          >
            <FacebookIcon className='h-6 w-6' />
          </button> */}
          </div>
        </div>
      </Card>
      <button
        className='mt-6 px-4 py-2 bg-[#e2e8f0] rounded-lg hover:bg-[#f1f5f9]'
        onClick={generateNewQuote}
      >
        {loading ? (
          <LoadingIcon className='animate-spin h-6 w-6 text-black' />
        ) : (
          <GenerateIcon className='h-6 w-6 text-black' />
        )}
      </button>
    </>
  )
}
