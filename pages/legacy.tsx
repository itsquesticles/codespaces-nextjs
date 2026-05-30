import Link from 'next/link'
import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'
import { legacyTimeline } from '../data/archiveContent'

const archiveCategories = [
  { id: 'timeline', name: 'Career Timeline', count: `${legacyTimeline.length} entries` },
  { id: 'visuals', name: 'Visual Assets', count: 'Live in archive' },
  { id: 'press', name: 'Press & Interviews', count: 'Structured index' },
  { id: 'stories', name: 'Story Notes', count: 'Editorial draft' }
]

const featuredMoments = legacyTimeline.filter((item) => ['2001', '2002', '2006'].includes(item.year))

export default function Legacy() {
  return (
    <main className="relative overflow-hidden bg-surface-1 pt-28">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30">The Archive</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-white">Legacy</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
              A documentary-style draft built with real assets and production-ready structure.
            </p>
          </header>
        </div>
      </section>

      <section className="border-y border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {archiveCategories.map((category) => (
              <div key={category.id} className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-white/60">{category.name}</span>
                <span className="text-clay text-sm font-semibold">{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper id="featured" eyebrow="Featured" heading="Defining moments.">
        <div className="grid gap-8 lg:grid-cols-3">
          {featuredMoments.map((moment) => (
            <article key={moment.slug} className="rounded-[2rem] border border-white/12 bg-surface-4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-medium">
              <img src={moment.image} alt={moment.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-clay uppercase tracking-wider">{moment.year}</span>
                  <span className="text-xs text-white/30">·</span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">Historic</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{moment.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">{moment.summary}</p>
                <Link href={`/archive/${moment.slug}`} className="text-sm text-white/75 hover:text-white">
                  View archive entry →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="timeline" eyebrow="Timeline" heading="A documentary archive built for depth.">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
          {legacyTimeline.map((item) => (
            <article key={item.slug} className="w-80 shrink-0 snap-start rounded-[2rem] border border-white/12 bg-surface-4 p-8">
              <img src={item.image} alt={item.title} className="mb-5 h-40 w-full rounded-xl object-cover" loading="lazy" />
              <div className="mb-4 flex items-center justify-between">
                <span className="text-3xl font-display font-semibold text-white">{item.year}</span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">{item.media}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.summary}</p>
              <Link href={`/archive/${item.slug}`} className="mt-4 inline-block text-sm text-white/75 hover:text-white">
                Open entry →
              </Link>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[3rem] border border-white/12 bg-surface-4 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Contribute</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Have materials to add?</h2>
              </div>
              <div className="flex flex-col items-start gap-4 text-white/60">
                <p>Help expand the archive with verified photos, videos, and stories.</p>
                <Button href="/archive" variant="outline" size="sm">Open The Metzger Archive</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
