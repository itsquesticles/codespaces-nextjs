import Link from 'next/link'
import SectionWrapper from '../components/SectionWrapper'
import { archiveCollections, legacyTimeline } from '../data/archiveContent'

const archiveTracks = [
  { label: 'Career Timeline', count: `${legacyTimeline.length} entries` },
  { label: 'Visual Assets', count: 'Published in this draft' },
  { label: 'Press Coverage', count: 'Index ready' },
  { label: 'Interview Notes', count: 'Index ready' }
]

export default function ArchivePage() {
  return (
    <main className="relative overflow-hidden bg-surface-1 pt-28">
      <section className="border-b border-white/10 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-white/35">The Secret Weapon</p>
            <h1 className="mt-6 text-5xl font-display font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              The Metzger Archive
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Drafted as a living documentary archive with real imagery and expandable structure.
            </p>
          </header>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {archiveTracks.map((track) => (
            <div key={track.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface-4 px-5 py-4">
              <span className="text-sm text-white/65">{track.label}</span>
              <span className="text-xs font-semibold text-clay">{track.count}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionWrapper id="timeline" eyebrow="Career timeline" heading="Milestones with supporting context.">
        <div className="grid gap-6 lg:grid-cols-2">
          {legacyTimeline.map((item) => (
            <article key={item.slug} className="rounded-[2rem] border border-white/12 bg-surface-4 overflow-hidden">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl font-display font-semibold text-white">{item.year}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/55">{item.media}</span>
                </div>
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.summary}</p>
                <Link href={`/archive/${item.slug}`} className="mt-4 inline-block text-sm text-white/75 hover:text-white">
                  Open full entry →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="collections" eyebrow="Collections" heading="Archive modules.">
        <div className="grid gap-6 lg:grid-cols-3">
          {archiveCollections.map((collection) => (
            <article key={collection.title} className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-clay">{collection.items}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{collection.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{collection.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </main>
  )
}
