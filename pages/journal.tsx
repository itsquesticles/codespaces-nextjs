import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

const articles = [
  { id: 1, category: 'FMX History', title: 'The Moment That Changed Everything', excerpt: 'Before the double backflip, there was only the question of whether it could be done. After, there was only the question of what came next.', date: 'March 15, 2024', readTime: '8 min read' },
  { id: 2, category: 'Lessons Learned', title: 'Sponsorship Mistakes That Cost Millions', excerpt: 'Three decades of brand deals taught me that the best contracts are the ones you do not sign, and the worst ones are the ones you sign too quickly.', date: 'March 8, 2024', readTime: '12 min read' },
  { id: 3, category: 'Entrepreneurship', title: 'Building After the Blueprint', excerpt: 'When you help invent a sport, there is no manual for what comes next. You build the business model while still performing.', date: 'February 28, 2024', readTime: '10 min read' },
  { id: 4, category: 'Creativity', title: 'From Stadium to Studio', excerpt: 'The transition from athlete to creative director is less a pivot and more a transfer of discipline.', date: 'February 15, 2024', readTime: '9 min read' },
  { id: 5, category: 'Art', title: 'Metal, Motion, and Memory', excerpt: 'How fabrication became a way to process athletic history and create from the materials of the past.', date: 'February 1, 2024', readTime: '7 min read' },
  { id: 6, category: 'Personal Reflections', title: 'What No One Tells You About Retirement', excerpt: 'The end of competition is not the end of relevance. It is the start of responsible reinvention.', date: 'January 20, 2024', readTime: '11 min read' },
  { id: 7, category: 'Sponsorships', title: 'How to Protect Your Name in a Brand Deal', excerpt: 'Clauses matter less than control rights. If you cannot control representation, the check is too expensive.', date: 'January 5, 2024', readTime: '9 min read' },
  { id: 8, category: 'Innovation', title: 'Progression Is a Systems Problem', excerpt: 'Big moments look spontaneous. They are usually the result of boring repetition and strict sequence planning.', date: 'December 18, 2023', readTime: '8 min read' },
  { id: 9, category: 'FMX History', title: 'The Early Event Era', excerpt: 'Before polished tours, event formats were rough, inconsistent, and perfect for experimentation.', date: 'December 2, 2023', readTime: '7 min read' },
  { id: 10, category: 'Lessons Learned', title: 'Decision Speed vs Decision Quality', excerpt: 'Moving quickly only works when your review process is better than your competition’s.', date: 'November 21, 2023', readTime: '6 min read' },
  { id: 11, category: 'Entrepreneurship', title: 'Why Athlete Businesses Stall', excerpt: 'Most athlete businesses fail at positioning, not talent. Clarity beats fame every time.', date: 'November 7, 2023', readTime: '9 min read' },
  { id: 12, category: 'Creativity', title: 'The Value of Constraints', excerpt: 'When resources are limited, direction improves. Constraints sharpen what deserves to exist.', date: 'October 28, 2023', readTime: '6 min read' },
  { id: 13, category: 'Art', title: 'Documenting the Workbench', excerpt: 'The process around a piece often teaches more than the finished piece itself.', date: 'October 14, 2023', readTime: '5 min read' },
  { id: 14, category: 'Personal Reflections', title: 'Legacy Is a Maintenance Task', excerpt: 'Legacy is not memory. It is ongoing stewardship of story, context, and evidence.', date: 'September 29, 2023', readTime: '8 min read' },
  { id: 15, category: 'Sponsorships', title: 'When to Walk Away From a Deal', excerpt: 'If a partnership requires you to dilute your story to fit a campaign brief, it is not a partnership.', date: 'September 12, 2023', readTime: '7 min read' },
  { id: 16, category: 'Innovation', title: 'Iteration Beats Inspiration', excerpt: 'Consistent technical leaps come from measurable loops, not mood.', date: 'August 30, 2023', readTime: '6 min read' },
  { id: 17, category: 'FMX History', title: 'Touring Years, Hidden Lessons', excerpt: 'Travel schedules taught operational discipline long before entrepreneurship became the focus.', date: 'August 16, 2023', readTime: '7 min read' },
  { id: 18, category: 'Entrepreneurship', title: 'Office Hours as Product', excerpt: 'People do not buy generic consulting. They buy trusted context for expensive decisions.', date: 'August 1, 2023', readTime: '8 min read' }
]

const categories = ['All', 'FMX History', 'Lessons Learned', 'Sponsorships', 'Entrepreneurship', 'Creativity', 'Art', 'Personal Reflections', 'Innovation']

const templates = [
  { title: 'Long-form narrative', description: 'Feature-length storytelling with archival context and present-day analysis.' },
  { title: 'Field notes', description: 'Short tactical insights from sponsorships, operations, and creative execution.' },
  { title: 'Archive deep dive', description: 'Single milestone breakdown with supporting media, timeline context, and lessons.' }
]

export default function Journal() {
  return (
    <main className="relative overflow-hidden bg-surface-1 pt-28">
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30">Journal</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-white">Writing</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
              Lessons from three decades of building, creating, and reinventing.
            </p>
          </header>
        </div>
      </section>

      <section className="border-y border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${
                  category === 'All' ? 'bg-clay text-white' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper id="articles" eyebrow="Recent" heading="Editorial archive.">
        <div className="grid gap-12 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-clay uppercase tracking-wider">{article.category}</span>
                  <span className="text-white/30">{article.date}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/30">{article.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white group-hover:text-white/80 transition-colors">
                  {article.title}
                </h2>
                <p className="text-white/60 leading-relaxed">{article.excerpt}</p>
                <div className="pt-2">
                  <button className="text-sm text-white/50 hover:text-white transition-colors">Read article →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="templates" eyebrow="Templates" heading="Reusable editorial formats.">
        <div className="grid gap-6 lg:grid-cols-3">
          {templates.map((template) => (
            <article key={template.title} className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
              <h3 className="text-xl font-semibold text-white">{template.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{template.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[3rem] border border-white/12 bg-surface-4 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Newsletter</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Get archive notes and new essays first</h2>
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
