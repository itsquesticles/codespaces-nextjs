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
  { year: '1996', title: 'FMX Pioneer', detail: 'Before the sport had a name, Mike was already redefining what was possible on two wheels.', media: 'photo' },
  { year: '1999', title: 'Red Bull Debut', detail: 'A new energy in freestyle motocross, defined by precision and calculated risk.', media: 'video' },
  { year: '2001', title: 'First Double Backflip', detail: 'Rewrote the sport\'s possibilities and elevated the competitive narrative forever.', media: 'iconic' },
  { year: '2002', title: 'X Games Gold', detail: 'The culmination of years of innovation, captured on the world\'s biggest stage.', media: 'press' },
  { year: '2004', title: 'Global Touring', detail: 'Took freestyle motocross from stadiums to arenas worldwide, building a global audience.', media: 'photo' },
  { year: '2006', title: 'The Leap Heard Round World', detail: 'A moment that transcended sports and entered cultural consciousness.', media: 'iconic' },
  { year: '2010', title: 'Transition to Creator', detail: 'Began applying athletic discipline to art, building, and creative direction.', media: 'photo' },
  { year: '2020', title: 'Studio & Archive', detail: 'Established a dedicated space for art, fabrication, and legacy preservation.', media: 'photo' },
  { year: '2024', title: 'Office Hours Launch', detail: 'A membership focused on access to process, practice, and legacy thinking.', media: 'launch' }
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-1">
        {/* Cinematic video placeholder background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-1/60 via-surface-1/40 to-surface-1" />
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="flex flex-col items-center text-center space-y-6 pt-32 pb-40">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30 animate-slide-up" style={{ animationDelay: '0.15s' }}>
              Freestyle Motocross Pioneer
            </p>
            <h1 className="max-w-6xl text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-display font-semibold leading-[0.95] tracking-tight text-white animate-slide-up" style={{ animationDelay: '0.25s' }}>
              Mike Metzger
            </h1>
            <p className="max-w-4xl text-xl sm:text-2xl lg:text-3xl text-white/50 leading-relaxed tracking-wide animate-slide-up font-light" style={{ animationDelay: '0.35s' }}>
              He helped build an entire sport.
            </p>
            <p className="max-w-2xl text-base sm:text-lg text-white/30 leading-relaxed animate-slide-up" style={{ animationDelay: '0.45s' }}>
              Artist. Builder. Mentor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-10 animate-slide-up" style={{ animationDelay: '0.55s' }}>
              <Button variant="primary" size="lg">Access Mike</Button>
              <Button variant="outline" size="lg">Explore Legacy</Button>
            </div>
          </header>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2">
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

      <SectionWrapper id="legacy" eyebrow="Legacy timeline" heading="Key chapters from the sport's defining years.">
        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex-shrink-0 w-80 snap-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative group">
                  {/* Year badge */}
                  <div className="absolute -top-4 left-6 z-10">
                    <span className="inline-block px-4 py-2 bg-clay text-white text-sm font-semibold rounded-full">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Card */}
                  <div className="pt-8 rounded-[2rem] border border-white/12 bg-surfaceMuted p-8 transition-all duration-300 hover:border-white/20 hover:shadow-medium">
                    {/* Media placeholder */}
                    <div className="aspect-[4/3] rounded-xl bg-surface/50 mb-6 overflow-hidden border border-white/10">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-3">
                            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[14px] border-t-white border-r-[8px] border-r-transparent ml-0.5" />
                          </div>
                          <p className="text-xs text-white/30 uppercase tracking-[0.2em]">{item.media}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll hint */}
          <div className="flex justify-center mt-4">
            <p className="text-xs text-white/30 uppercase tracking-[0.3em]">Scroll to explore</p>
          </div>
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

      <SectionWrapper id="pricing" eyebrow="Office Hours with Mike Metzger" heading="Get Direct Access To Mike">
        <div className="mb-12 max-w-3xl">
          <p className="text-lg text-white/70 leading-relaxed">
            For decades, Mike has built brands, launched projects, navigated sponsors, created art, performed globally, and helped shape an entire sport. Now you can access that experience directly.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {/* Community Access */}
          <div className="rounded-[2rem] border border-white/12 bg-surface-4 p-8 transition-all duration-300 hover:border-white/20 hover:shadow-medium">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Community Access</h3>
              <p className="text-3xl font-display font-semibold text-white">$29<span className="text-lg text-white/60">/mo</span></p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Monthly AMA sessions
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Behind-the-scenes updates
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Priority questions
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Private content access
              </li>
            </ul>
            <Button variant="secondary" size="md" className="w-full">Join Community</Button>
          </div>

          {/* Direct Access */}
          <div className="rounded-[2rem] border-2 border-clay bg-surface-4 p-8 transition-all duration-300 hover:shadow-glow relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 bg-clay text-white text-xs font-semibold rounded-full uppercase tracking-wider">Most Popular</span>
            </div>
            <div className="mb-6 pt-4">
              <h3 className="text-xl font-semibold text-white mb-2">Direct Access</h3>
              <p className="text-3xl font-display font-semibold text-white">$149<span className="text-lg text-white/60">/mo</span></p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Everything in Community
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Submit questions anytime
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Voice note responses
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Business/project feedback
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Priority input from Mike
              </li>
            </ul>
            <Button variant="primary" size="md" className="w-full">Get Direct Access</Button>
          </div>

          {/* 1-on-1 Advisory */}
          <div className="rounded-[2rem] border border-white/12 bg-surface-4 p-8 transition-all duration-300 hover:border-white/20 hover:shadow-medium">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">1-on-1 Advisory</h3>
              <p className="text-3xl font-display font-semibold text-white">$499<span className="text-lg text-white/60">/session</span></p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                60-minute private call
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Personalized feedback
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Recorded session
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Action plan included
              </li>
            </ul>
            <Button variant="secondary" size="md" className="w-full">Book Session</Button>
          </div>

          {/* Strategic Partnerships */}
          <div className="rounded-[2rem] border border-white/12 bg-surface-4 p-8 transition-all duration-300 hover:border-white/20 hover:shadow-medium">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Partnerships</h3>
              <p className="text-3xl font-display font-semibold text-white">Custom</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Brand consulting
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Athlete advisory
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Product feedback
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-clay mt-0.5">✓</span>
                Collaborations
              </li>
            </ul>
            <Button variant="outline" size="md" className="w-full">Inquire</Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-medium text-white mb-2">What makes this different from coaching?</h4>
              <p className="text-white/60 text-sm leading-relaxed">This is not coaching. This is direct access to decades of experience across professional sports, brand building, sponsorships, and entrepreneurship. You're getting strategic input, not generic advice.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-medium text-white mb-2">Who is this for?</h4>
              <p className="text-white/60 text-sm leading-relaxed">Athletes, founders, creators, and brands who want strategic input from someone who has built careers, negotiated deals, and created at the highest level.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-medium text-white mb-2">How quickly do I get responses?</h4>
              <p className="text-white/60 text-sm leading-relaxed">Direct Access members typically receive responses within 48 hours. 1-on-1 sessions are scheduled within 7 days of booking.</p>
            </div>
          </div>
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
