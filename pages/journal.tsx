import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

const articles = [
  {
    id: 1,
    category: 'FMX History',
    title: 'The Moment That Changed Everything',
    excerpt: 'Before the double backflip, there was only the question of whether it could be done. After, there was only the question of what came next.',
    date: 'March 15, 2024',
    readTime: '8 min read'
  },
  {
    id: 2,
    category: 'Lessons Learned',
    title: 'Sponsorship Mistakes That Cost Millions',
    excerpt: 'Three decades of brand deals taught me that the best contracts are the ones you don\'t sign, and the worst ones are the ones you sign too quickly.',
    date: 'March 8, 2024',
    readTime: '12 min read'
  },
  {
    id: 3,
    category: 'Entrepreneurship',
    title: 'Building After the Blueprint',
    excerpt: 'When you help invent a sport, there\'s no manual for what comes next. You have to build the business model while you\'re still performing.',
    date: 'February 28, 2024',
    readTime: '10 min read'
  },
  {
    id: 4,
    category: 'Creativity',
    title: 'From Stadium to Studio',
    excerpt: 'The transition from professional athlete to creative director isn\'t a career change—it\'s applying the same discipline to a different canvas.',
    date: 'February 15, 2024',
    readTime: '9 min read'
  },
  {
    id: 5,
    category: 'Art',
    title: 'Metal, Motion, and Memory',
    excerpt: 'How fabrication became a way to process athletic history and create something new from the materials of the past.',
    date: 'February 1, 2024',
    readTime: '7 min read'
  },
  {
    id: 6,
    category: 'Personal Reflections',
    title: 'What No One Tells You About Retirement',
    excerpt: 'The end of competitive sports isn\'t an ending—it\'s the beginning of the work that actually matters.',
    date: 'January 20, 2024',
    readTime: '11 min read'
  }
]

const categories = ['All', 'FMX History', 'Lessons Learned', 'Sponsorships', 'Entrepreneurship', 'Creativity', 'Art', 'Personal Reflections']

export default function Journal() {
  return (
    <main className="relative overflow-hidden bg-surface-1">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30">Journal</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-white">
              Writing
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
              Lessons from three decades of building, creating, and reinventing.
            </p>
          </header>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-y border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${
                  category === 'All'
                    ? 'bg-clay text-white'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <SectionWrapper id="articles" eyebrow="Recent" heading="Latest entries.">
        <div className="grid gap-12 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="space-y-4">
                {/* Category & Date */}
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-clay uppercase tracking-wider">{article.category}</span>
                  <span className="text-white/30">{article.date}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/30">{article.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white group-hover:text-white/80 transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-white/60 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read Link */}
                <div className="pt-2">
                  <button className="text-sm text-white/50 hover:text-white transition-colors">
                    Read article →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[3rem] border border-white/12 bg-surface-4 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Newsletter</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Get new writing in your inbox
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
                />
                <Button variant="primary" size="md">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
