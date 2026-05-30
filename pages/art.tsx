import Link from 'next/link'
import SectionWrapper from '../components/SectionWrapper'
import { artworks } from '../data/artContent'

export default function Art() {
  return (
    <main className="relative overflow-hidden bg-surface-1 pt-28">
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30">Gallery</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-white">Art</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">Creative work across disciplines, from fabrication to visual storytelling.</p>
          </header>
        </div>
      </section>

      <SectionWrapper id="collection" eyebrow="Collection" heading="Selected Works">
        <div className="grid gap-16 md:gap-20">
          {artworks.map((artwork, index) => (
            <article key={artwork.slug} className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <img
                src={artwork.image}
                alt={artwork.title}
                loading="lazy"
                className={`aspect-[4/5] rounded-[2rem] object-cover border border-white/10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              />

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-clay mb-3">{artwork.collection}</p>
                  <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-2">{artwork.title}</h2>
                  <p className="text-white/40 text-sm">{artwork.year} · {artwork.medium}</p>
                </div>
                <p className="text-white/60 leading-relaxed">{artwork.description}</p>
                {artwork.available && (
                  <div className="pt-4">
                    <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/50 uppercase tracking-wider">
                      Available for inquiry
                    </span>
                  </div>
                )}
                <Link href={`/art/${artwork.slug}`} className="inline-block text-sm text-white/75 hover:text-white">
                  View piece details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[3rem] border border-white/12 bg-surface-4 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Collection inquiries</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Request availability and commissions</h2>
              </div>
              <div className="text-white/60">For collectors, curators, and collaboration partners.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
