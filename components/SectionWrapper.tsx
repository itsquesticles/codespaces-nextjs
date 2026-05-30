import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  eyebrow?: string
  heading: string
  children: ReactNode
}

export default function SectionWrapper({ id, eyebrow, heading, children }: SectionWrapperProps) {
  return (
    <section id={id} className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-display font-semibold leading-tight text-white sm:text-5xl">{heading}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
