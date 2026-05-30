import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

export default function Contact() {
  return (
    <main className="relative overflow-hidden bg-surface-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30">Contact</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-white">
              Get in Touch
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
              For partnerships, collaborations, or press inquiries.
            </p>
          </header>
        </div>
      </section>

      {/* Contact Form */}
      <SectionWrapper id="contact-form" eyebrow="Inquiries" heading="Send a message.">
        <div className="max-w-2xl">
          <form className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-white/60 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-full bg-surface-4 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-6 py-4 rounded-full bg-surface-4 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-white/60 mb-2">Subject</label>
              <select className="w-full px-6 py-4 rounded-full bg-surface-4 border border-white/10 text-white focus:outline-none focus:border-white/20 transition-colors">
                <option value="">Select a topic</option>
                <option value="partnership">Partnership</option>
                <option value="press">Press & Media</option>
                <option value="collaboration">Collaboration</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-white/60 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-6 py-4 rounded-[2rem] bg-surface-4 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </SectionWrapper>

      {/* Alternative Contact */}
      <SectionWrapper id="alternative" eyebrow="Other Ways" heading="Connect directly.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
            <h3 className="text-lg font-semibold text-white mb-2">Office Hours</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              For direct access to Mike's experience and insights.
            </p>
            <a href="#pricing" className="text-clay text-sm hover:underline">
              View membership options →
            </a>
          </div>
          
          <div className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
            <h3 className="text-lg font-semibold text-white mb-2">Press Inquiries</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              For media requests, interviews, and press materials.
            </p>
            <p className="text-white/40 text-sm">press@metzger.com</p>
          </div>
          
          <div className="rounded-[2rem] border border-white/12 bg-surface-4 p-8">
            <h3 className="text-lg font-semibold text-white mb-2">Business Inquiries</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              For partnerships, collaborations, and strategic opportunities.
            </p>
            <p className="text-white/40 text-sm">business@metzger.com</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Social Links */}
      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50 mb-8">Follow</p>
            <div className="flex justify-center gap-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
