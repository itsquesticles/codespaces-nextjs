import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'

const tiers = [
  {
    name: 'Community Access',
    price: '$29/month',
    summary: 'A premium circle for builders who want direct perspective each month.',
    perks: ['Monthly AMA', 'Behind-the-scenes updates', 'Priority questions', 'Private member notes'],
    cta: 'Apply for Community',
    featured: false
  },
  {
    name: 'Direct Access',
    price: '$149/month',
    summary: 'Office Hours access for recurring strategy and direct feedback.',
    perks: ['Everything in Community', 'Submit questions anytime', 'Voice-note responses', 'Business and project feedback'],
    cta: 'Get Direct Access',
    featured: true
  },
  {
    name: '1-on-1 Advisory',
    price: 'From $499/session',
    summary: 'Private deep-dive sessions for high-stakes decisions and execution plans.',
    perks: ['60-minute private call', 'Personalized recommendations', 'Recorded session', 'Action plan recap'],
    cta: 'Request Advisory Session',
    featured: false
  },
  {
    name: 'Strategic Partnerships',
    price: 'Custom pricing',
    summary: 'Long-term collaboration for brands, athletes, founders, and media teams.',
    perks: ['Brand consulting', 'Athlete advisory', 'Product feedback', 'Creative collaborations'],
    cta: 'Start Partnership Conversation',
    featured: false
  }
]

const trustSignals = [
  '30+ years at the highest level of action sports and business',
  'Experience spanning sponsorships, media, product launches, and creative direction',
  'Structured response windows and clear delivery expectations',
  'Built for founders, athletes, creators, and operators'
]

const faqs = [
  {
    question: 'Is this coaching?',
    answer:
      'No. Office Hours is strategic access to hard-earned experience. You bring decisions and context, Mike brings perspective informed by decades of execution.'
  },
  {
    question: 'Who gets the most value?',
    answer:
      'Athletes evolving into business, founders navigating brand partnerships, and creators building long-term projects with real stakes.'
  },
  {
    question: 'How quickly do members get responses?',
    answer: 'Direct Access members usually receive responses in under 48 hours. Advisory scheduling is prioritized weekly.'
  },
  {
    question: 'Can teams participate?',
    answer: 'Yes. Strategic Partnerships supports teams and organizations that need recurring guidance and collaboration.'
  }
]

export default function AccessPage() {
  return (
    <main className="relative overflow-hidden bg-surface-1 pt-28">
      <section className="relative border-b border-white/10 pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-white/40">Office Hours with Mike Metzger</p>
            <h1 className="mt-6 text-5xl font-display font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Get Direct Access To Mike
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/65">
              For decades, Mike has built brands, launched projects, navigated sponsors, created art, performed globally, and helped shape an entire sport.
              Now you can access that experience directly.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#tiers" size="lg">
                View Membership Tiers
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Start Partnership Conversation
              </Button>
            </div>
          </header>
        </div>
      </section>

      <SectionWrapper id="tiers" eyebrow="Membership" heading="Choose your level of access.">
        <div className="grid gap-6 xl:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-[2rem] border bg-surface-4 p-8 transition-all duration-300 ${
                tier.featured ? 'border-clay shadow-glow' : 'border-white/12 hover:border-white/20 hover:shadow-medium'
              }`}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">{tier.name}</p>
              <p className="mt-3 text-3xl font-display font-semibold text-white">{tier.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{tier.summary}</p>
              <ul className="mt-6 space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-0.5 text-clay">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant={tier.featured ? 'primary' : 'secondary'} className="mt-8 w-full">
                {tier.cta}
              </Button>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="proof" eyebrow="Trust indicators" heading="Built for decisions that matter.">
        <div className="grid gap-6 lg:grid-cols-2">
          {trustSignals.map((signal) => (
            <div key={signal} className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
              <p className="text-base leading-relaxed text-white/70">{signal}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="social-proof" eyebrow="Social proof" heading="What members and collaborators say.">
        <div className="grid gap-6 lg:grid-cols-3">
          <blockquote className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
            <p className="text-lg leading-relaxed text-white">“Mike helped us avoid a six-figure mistake in product timing.”</p>
            <footer className="mt-6 text-sm text-white/55">Founder, action sports startup</footer>
          </blockquote>
          <blockquote className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
            <p className="text-lg leading-relaxed text-white">“The feedback was direct, practical, and immediately useful for our sponsorship strategy.”</p>
            <footer className="mt-6 text-sm text-white/55">Brand marketing lead</footer>
          </blockquote>
          <blockquote className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
            <p className="text-lg leading-relaxed text-white">“Office Hours gave our team clarity we could not get from generic consultants.”</p>
            <footer className="mt-6 text-sm text-white/55">Creative director, media studio</footer>
          </blockquote>
        </div>
      </SectionWrapper>

      <SectionWrapper id="faq" eyebrow="FAQ" heading="Clear expectations.">
        <div className="space-y-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
              <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{faq.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[3rem] border border-white/12 bg-surface-4 p-8 sm:p-10">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Thirty years of experience. One conversation away.
              </h2>
              <Button href="/contact" size="lg">
                Access Mike
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
