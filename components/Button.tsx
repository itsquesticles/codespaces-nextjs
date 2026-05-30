import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-[0.02em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20 focus-visible:ring-offset-slate-950'

  const sizes = {
    sm: 'px-5 py-2.5 text-xs rounded-full',
    md: 'px-7 py-3 text-sm rounded-full',
    lg: 'px-9 py-4 text-base rounded-full'
  }

  const variants = {
    primary: 'border border-clay bg-clay text-white hover:bg-[#5d71bc] hover:shadow-glow',
    secondary: 'border border-white/12 bg-surface-4 text-white hover:bg-surface-5 hover:border-white/20',
    outline: 'border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/30',
    ghost: 'border border-transparent bg-transparent text-white hover:bg-white/5',
    text: 'border border-transparent bg-transparent text-clay hover:bg-clay/10'
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
