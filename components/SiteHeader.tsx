import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from './Button'

const navLinks = [
  { href: '/legacy', label: 'Legacy' },
  { href: '/art', label: 'Art' },
  { href: '/projects', label: 'Projects' },
  { href: '/access', label: 'Access' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' }
]

export default function SiteHeader() {
  const { pathname } = useRouter()
  const [isSolid, setIsSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsSolid(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isSolid ? 'border-b border-white/10 bg-surface-1/95 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.45em] text-white">
          METZGER
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition ${
                  active ? 'text-white' : 'text-white/65 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Button href="/access" size="sm">
          Access Mike
        </Button>
      </div>

      <nav className="border-t border-white/10 px-6 pb-3 lg:hidden">
        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] transition ${
                  active ? 'text-white' : 'text-white/65 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
