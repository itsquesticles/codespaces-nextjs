import type { ReactNode } from 'react'

interface CardProps {
  variant?: 'soft' | 'elevated' | 'minimal' | 'bordered'
  padding?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
}

const variants = {
  soft: 'rounded-[2rem] border border-white/12 bg-surface-4 transition duration-200 ease-out',
  elevated: 'rounded-[2rem] border border-white/12 bg-surface-4 shadow-medium transition duration-200 ease-out hover:shadow-strong',
  minimal: 'rounded-[2rem] border border-transparent bg-transparent transition duration-200 ease-out',
  bordered: 'rounded-[2rem] border border-white/20 bg-transparent transition duration-200 ease-out hover:border-white/30'
}

const paddings = {
  sm: 'p-6 sm:p-8',
  md: 'p-8 sm:p-10',
  lg: 'p-10 sm:p-12'
}

export default function Card({ variant = 'soft', padding = 'md', className = '', children }: CardProps) {
  return <div className={`${variants[variant]} ${paddings[padding]} ${className}`.trim()}>{children}</div>
}
