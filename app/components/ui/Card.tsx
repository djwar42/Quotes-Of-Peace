import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>
}
