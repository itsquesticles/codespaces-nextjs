import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { legacyTimeline, timelineBySlug, type TimelineEntry } from '../../data/archiveContent'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: legacyTimeline.map((entry) => ({ params: { slug: entry.slug } })),
  fallback: false
})

export const getStaticProps: GetStaticProps<{ entry: TimelineEntry }> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const entry = timelineBySlug.get(slug)

  if (!entry) {
    return { notFound: true }
  }

  return { props: { entry } }
}

export default function ArchiveEntryPage({ entry }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="min-h-screen bg-surface-1 pt-28">
      <article className="mx-auto max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
        <Link href="/archive" className="inline-block text-sm text-white/60 hover:text-white">← Back to archive</Link>

        <header className="mt-8">
          <p className="text-xs uppercase tracking-[0.35em] text-clay">{entry.year}</p>
          <h1 className="mt-4 text-4xl font-display font-semibold text-white sm:text-6xl">{entry.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-white/65">{entry.summary}</p>
        </header>

        <img src={entry.image} alt={entry.title} className="mt-10 w-full rounded-[2rem] border border-white/10 object-cover" />

        <section className="mt-10 rounded-[2rem] border border-white/12 bg-surface-4 p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/45">Media type: {entry.media}</p>
          <p className="mt-4 text-base leading-relaxed text-white/75">{entry.body}</p>
        </section>
      </article>
    </main>
  )
}
