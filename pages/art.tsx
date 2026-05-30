import SectionWrapper from '../components/SectionWrapper'

const artworks = [
  {
    id: 1,
    title: 'Office Hours archive',
    year: '2024',
    medium: 'Digital Archive',
    description: 'Weekly conversations, project notes, and candid analysis of what matters now.',
    collection: 'Membership Access',
    available: true
  },
  {
    id: 2,
    title: 'Film & narrative direction',
    year: '2023',
    medium: 'Video Production',
    description: 'Visual storytelling rooted in athletic history and modern creative ambition.',
    collection: 'Current Projects',
    available: true
  },
  {
    id: 3,
    title: 'Select collaborations',
    year: '2022-2024',
    medium: 'Mixed Media',
    description: 'Curated work with brands, media partners, and cultural storytellers.',
    collection: 'Collaborations',
    available: false
  },
  {
    id: 4,
    title: 'Studio studies',
    year: '2021',
    medium: 'Photography',
    description: 'Documentary photography capturing the creative process and workspace.',
    collection: 'Personal Archive',
    available: true
  },
  {
    id: 5,
    title: 'Metal work series',
    year: '2020',
    medium: 'Sculpture',
    description: 'Fabricated metal pieces exploring form, function, and athletic movement.',
    collection: 'Sculpture',
    available: false
  },
  {
    id: 6,
    title: 'Garage chronicles',
    year: '2019',
    medium: 'Photography',
    description: 'Behind-the-scenes documentation of builds, experiments, and fabrication.',
    collection: 'Photography',
    available: true
  }
]

export default function Art() {
  return (
    <main className="relative overflow-hidden bg-surface-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30">Gallery</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-white">
              Art
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
              Creative work across disciplines, from fabrication to visual storytelling.
            </p>
          </header>
        </div>
      </section>

      {/* Gallery Grid */}
      <SectionWrapper id="collection" eyebrow="Collection" heading="Selected Works">
        <div className="grid gap-16 md:gap-20">
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Image Placeholder */}
              <div className={`aspect-[4/5] rounded-[2rem] bg-surface-4 overflow-hidden border border-white/10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[16px] border-t-white border-r-[10px] border-r-transparent ml-1" />
                    </div>
                    <p className="text-xs text-white/30 uppercase tracking-[0.2em]">{artwork.medium}</p>
                  </div>
                </div>
              </div>

              {/* Artwork Info */}
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
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[3rem] border border-white/12 bg-surface-4 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Inquiries</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Interested in a piece?
                </h2>
              </div>
              <div className="text-white/60">
                Contact for availability, commissions, and collaborations.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
