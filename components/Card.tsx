import type { ReactNode } from 'react'

interface CardProps {
  variant?: 'soft' | 'elevated'
  className?: string
  children: ReactNode
}

const variants = {
  soft: 'rounded-[2rem] border border-white/10 bg-white/5 p-8 transition sm:p-10',
  elevated: 'rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft transition sm:p-10'
}

export default function Card({ variant = 'soft', className = '', children }: CardProps) {
  return <div className={`${variants[variant]} ${className}`.trim()}>{children}</div>
}
