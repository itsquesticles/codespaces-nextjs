import Button from '../components/Button'
import MediaCard from '../components/MediaCard'
import PricingCard from '../components/PricingCard'
import SectionWrapper from '../components/SectionWrapper'
import StatCard from '../components/StatCard'
import TestimonialCard from '../components/TestimonialCard'
import TimelineCard from '../components/TimelineCard'

const stats = [
  { value: '3x', label: 'X Games gold', note: 'A career built on decisive performance and reinvention.' },
  { value: '25+', label: 'Years shaping FMX', note: 'From early street shows to global broadcast events.' },
  { value: '80M+', label: 'Audience impressions', note: 'Legacy stories and projects seen by a wide modern audience.' }
]

const timeline = [
  { year: '1999', title: 'Red Bull debut', detail: 'A new energy in freestyle motocross, defined by precision and risk.' },
  { year: '2001', title: 'First double backflip', detail: 'Rewrote the sport’s possibilities and elevated competitive narrative.' },
  { year: '2006', title: 'Global touring archive', detail: 'Curated performances and storytelling that pushed FMX into mainstream culture.' },
  { year: '2024', title: 'Office Hours launch', detail: 'A membership focused on access to process, practice, and legacy thinking.' }
]

const moments = [
  {
    title: 'The leap that changed the sport',
    description: 'A defining moment outside the stadium light, captured through discipline and intent.',
    caption: 'Legacy performance'
  },
  {
    title: 'Studio edits and direction',
    description: 'Current work across film, design, and creative strategy for new projects.',
    caption: 'Creative output'
  },
  {
    title: 'A chapter in the garage',
    description: 'The environment where ideas become movement, captured in quiet study.',
    caption: 'Behind the scenes'
  }
]

const artWork = [
  {
    title: 'Office Hours archive',
    description: 'Weekly conversations, project notes, and candid analysis of what matters now.',
    caption: 'Membership access'
  },
  {
    title: 'Film & narrative direction',
    description: 'Visual storytelling rooted in athletic history and modern creative ambition.',
    caption: 'Current projects'
  },
  {
    title: 'Select collaborations',
    description: 'Curated work with brands, media partners, and cultural storytellers.',
    caption: 'Creative partnerships'
  }
]

const testimonials = [
  {
    quote: 'Mike’s commentary cuts through noise and gives a clearer view of what progress really looks like.',
    author: 'Ari Walker',
    role: 'Producer, long-form sports media'
  },
  {
    quote: 'The archive feels like a private briefing from the person who built the sport.',
    author: 'Jordan Lane',
    role: 'Executive creative director'
  },
  {
    quote: 'The access is precise, intentional, and useful beyond the arena.',
    author: 'Mina Tate',
    role: 'Entrepreneur, active lifestyle brand'
  }
]

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <header className="flex flex-col gap-10 pb-16 pt-10 sm:pb-20 lg:pt-16">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Office Hours with Mike Metzger</p>
              <h1 className="max-w-4xl text-4xl font-display font-semibold leading-tight text-white sm:text-6xl animate-fade">
                Access the mind behind FMX’s defining chapters.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                A curated archive of legacy, current work, and direct membership into Mike’s creative and strategic thinking.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="max-w-max">Join Office Hours</Button>
              <a
                href="#legacy"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-surfaceMuted px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20213a]"
              >
                Explore the archive
              </a>
            </div>
            <div className="surface-panel rounded-[3rem] border border-white/12 p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">Featured access</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                Members receive monthly sessions, archive releases, select project insights, and a continuous pulse on what shapes the next chapter.
              </p>
            </div>
          </header>
        </div>
      </div>

      <SectionWrapper id="impact" eyebrow="Impact" heading="A legacy built on few, visible moments.">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} note={stat.note} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="legacy" eyebrow="Legacy timeline" heading="Key chapters from the sport’s defining years.">
        <div className="grid gap-6 lg:grid-cols-2">
          {timeline.map((item) => (
            <TimelineCard key={item.year} year={item.year} title={item.title} detail={item.detail} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="moments" eyebrow="Iconic moments" heading="The moments that became reference points.">
        <div className="grid gap-6 lg:grid-cols-3">
          {moments.map((item) => (
            <MediaCard key={item.title} title={item.title} description={item.description} caption={item.caption} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="art" eyebrow="Art & current work" heading="Current work shaped by clarity and craft.">
        <div className="grid gap-6 lg:grid-cols-3">
          {artWork.map((item) => (
            <MediaCard key={item.title} title={item.title} description={item.description} caption={item.caption} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="pricing" eyebrow="Access Mike" heading="A membership for people who want more than a highlight reel.">
        <div className="grid gap-6 lg:grid-cols-3">
          <PricingCard
            title="Monthly membership"
            price="$39/mo"
            description="Access to weekly Office Hours, archive drops, and the thinking behind Mike’s current work."
            features={['Weekly member sessions', 'Archive releases & notes', 'Project review perspective']}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="testimonials" eyebrow="Testimonials" heading="A membership that feels less like marketing and more like a briefing.">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </SectionWrapper>

      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="surface-panel rounded-[3rem] border border-white/12 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Final call</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  See the archive, the process, and the point of view.
                </h2>
              </div>
              <Button className="max-w-max">Join Office Hours</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 sm:py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:px-8 lg:px-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-white/60">Mike Metzger — legacy archive, creative direction, and premium access.</p>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <a href="#legacy" className="transition hover:text-white">Legacy</a>
            <a href="#art" className="transition hover:text-white">Work</a>
            <a href="#pricing" className="transition hover:text-white">Access</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
