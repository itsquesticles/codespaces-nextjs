import SectionWrapper from '../components/SectionWrapper'

const archiveCategories = [
  { id: 'timeline', name: 'Career Timeline', count: 50 },
  { id: 'videos', name: 'Videos', count: 120 },
  { id: 'photos', name: 'Photos', count: 500 },
  { id: 'press', name: 'Press & Media', count: 85 },
  { id: 'xgames', name: 'X Games', count: 25 },
  { id: 'interviews', name: 'Interviews', count: 40 }
]

const featuredMoments = [
  {
    id: 1,
    year: '2001',
    title: 'First Double Backflip',
    category: 'X Games',
    description: 'The moment that changed freestyle motocross forever.',
    media: 'video'
  },
  {
    id: 2,
    year: '2002',
    title: 'X Games Gold Medal',
    category: 'X Games',
    description: 'Culmination of years of innovation on the world stage.',
    media: 'photo'
  },
  {
    id: 3,
    year: '2006',
    title: 'The Leap Heard Round the World',
    category: 'Iconic',
    description: 'A moment that transcended sports and entered cultural consciousness.',
    media: 'video'
  }
]

const timeline = [
  { year: '1996', event: 'First FMX competitions', category: 'Pioneer' },
  { year: '1998', event: 'Red Bull partnership begins', category: 'Sponsorship' },
  { year: '2000', event: 'First X Games appearance', category: 'Competition' },
  { year: '2001', event: 'First double backflip', category: 'Historic' },
  { year: '2002', event: 'X Games Gold Medal', category: 'Competition' },
  { year: '2004', event: 'World tour begins', category: 'Tour' },
  { year: '2006', event: 'Iconic leap over Caesar\'s Palace', category: 'Historic' },
  { year: '2010', event: 'Transition to creative direction', category: 'Evolution' },
  { year: '2020', event: 'Studio & Archive established', category: 'Creative' },
  { year: '2024', event: 'Office Hours platform launches', category: 'Business' }
]

export default function Legacy() {
  return (
    <main className="relative overflow-hidden bg-surface-1">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30">The Archive</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-white">
              Legacy
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
              A comprehensive digital archive of three decades in freestyle motocross.
            </p>
          </header>
        </div>
      </section>

      {/* Archive Stats */}
      <section className="border-y border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {archiveCategories.map((category) => (
              <div key={category.id} className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-white/60">{category.name}</span>
                <span className="text-clay font-semibold">{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Moments */}
      <SectionWrapper id="featured" eyebrow="Featured" heading="Defining moments.">
        <div className="grid gap-8 lg:grid-cols-3">
          {featuredMoments.map((moment) => (
            <div key={moment.id} className="group">
              <div className="rounded-[2rem] border border-white/12 bg-surface-4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-medium">
                {/* Media Placeholder */}
                <div className="aspect-[4/3] bg-surface-5 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[16px] border-t-white border-r-[10px] border-r-transparent ml-1" />
                    </div>
                    <p className="text-xs text-white/30 uppercase tracking-[0.2em]">{moment.media}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-clay uppercase tracking-wider">{moment.year}</span>
                    <span className="text-xs text-white/30">·</span>
                    <span className="text-xs text-white/40 uppercase tracking-wider">{moment.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{moment.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{moment.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Career Timeline */}
      <SectionWrapper id="timeline" eyebrow="Timeline" heading="The journey.">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative flex gap-8 sm:gap-16">
                {/* Timeline Marker */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-clay border-4 border-surface-1 z-10" />
                  {index < timeline.length - 1 && <div className="flex-1 w-px bg-white/10 mt-4" />}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8 sm:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <span className="text-3xl font-display font-semibold text-white">{item.year}</span>
                    <span className="text-xs text-clay uppercase tracking-wider">{item.category}</span>
                  </div>
                  <p className="text-lg text-white/70">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Archive Categories */}
      <SectionWrapper id="categories" eyebrow="Explore" heading="Browse by category.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {archiveCategories.map((category) => (
            <button
              key={category.id}
              className="group rounded-[2rem] border border-white/12 bg-surface-4 p-8 text-left transition-all duration-300 hover:border-white/20 hover:shadow-medium"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <span className="text-white/30 group-hover:text-white/50 transition-colors">→</span>
              </div>
              <p className="text-white/40 text-sm">{category.count} items</p>
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[3rem] border border-white/12 bg-surface-4 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Contribute</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Have materials to add?
                </h2>
              </div>
              <div className="text-white/60">
                Help build the most complete FMX archive by sharing photos, videos, or stories.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
