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
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/95 to-surface" />
        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(110,131,212,0.1),transparent_50%)] animate-pulse-slow" />
        </div>
        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="flex flex-col items-center text-center space-y-8 pt-20 pb-32">
            <p className="text-xs uppercase tracking-[0.5em] text-white/40 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Freestyle Motocross Pioneer
            </p>
            <h1 className="max-w-5xl text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-semibold leading-[1.05] tracking-tight text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Mike Metzger
            </h1>
            <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl text-white/60 leading-relaxed tracking-wide animate-slide-up" style={{ animationDelay: '0.3s' }}>
              He helped build an entire sport.
            </p>
            <p className="max-w-2xl text-base sm:text-lg text-white/40 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Artist. Builder. Mentor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button variant="primary" size="lg">Access Mike</Button>
              <Button variant="outline" size="lg">Explore Legacy</Button>
            </div>
            <div className="mt-20 relative aspect-[16/9] max-w-6xl w-full rounded-[2rem] border border-white/10 bg-surfaceMuted/50 overflow-hidden animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-white border-r-[12px] border-r-transparent ml-1" />
                  </div>
                  <p className="text-sm text-white/30 uppercase tracking-[0.3em]">Cinematic Archive</p>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

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
