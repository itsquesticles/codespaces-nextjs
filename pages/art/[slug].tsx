import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { artworkBySlug, artworks, type ArtworkEntry } from '../../data/artContent'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: artworks.map((artwork) => ({ params: { slug: artwork.slug } })),
  fallback: false
})

export const getStaticProps: GetStaticProps<{ artwork: ArtworkEntry }> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const artwork = artworkBySlug.get(slug)

  if (!artwork) {
    return { notFound: true }
  }

  return { props: { artwork } }
}

export default function ArtworkDetailPage({ artwork }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="min-h-screen bg-surface-1 pt-28">
      <article className="mx-auto max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
        <Link href="/art" className="inline-block text-sm text-white/60 hover:text-white">← Back to gallery</Link>

        <header className="mt-8">
          <p className="text-xs uppercase tracking-[0.35em] text-clay">{artwork.collection}</p>
          <h1 className="mt-4 text-4xl font-display font-semibold text-white sm:text-6xl">{artwork.title}</h1>
          <p className="mt-4 text-sm text-white/50">{artwork.year} · {artwork.medium}</p>
        </header>

        <img src={artwork.image} alt={artwork.title} className="mt-10 w-full rounded-[2rem] border border-white/10 object-cover" />

        <section className="mt-10 rounded-[2rem] border border-white/12 bg-surface-4 p-8">
          <p className="text-base leading-relaxed text-white/75">{artwork.body}</p>
          <p className="mt-6 text-sm text-white/55">
            {artwork.available ? 'Status: Available for inquiry.' : 'Status: Archived / private collection.'}
          </p>
        </section>
      </article>
    </main>
  )
}
