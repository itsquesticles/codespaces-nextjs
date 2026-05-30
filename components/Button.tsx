import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-[0.02em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20 focus-visible:ring-offset-slate-950'
  const palette =
    variant === 'ghost'
      ? 'border border-white/12 bg-surfaceMuted text-white hover:bg-[#20213a]'
      : 'border border-clay bg-clay text-white hover:bg-[#5d71bc]'

  return (
    <button className={`${base} ${palette} ${className}`.trim()} type="button" {...props}>
      {children}
    </button>
  )
}
