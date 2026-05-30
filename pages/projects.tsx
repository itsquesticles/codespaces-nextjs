import SectionWrapper from '../components/SectionWrapper'

const projects = [
  { id: 1, title: 'Office Hours Platform', category: 'Venture', status: 'Active', description: 'A membership platform providing direct access to decades of experience in sports, business, and creative direction.', year: '2024' },
  { id: 2, title: 'Custom Fabrication Studio', category: 'Build', status: 'Ongoing', description: 'Dedicated space for metal work, prototyping, and experimental fabrication projects.', year: '2020-Present' },
  { id: 3, title: 'Documentary Film Series', category: 'Media', status: 'In Development', description: 'Visual storytelling exploring the intersection of athletic history and modern creative practice.', year: '2023' },
  { id: 4, title: 'Brand Collaborations', category: 'Partnership', status: 'Active', description: 'Strategic partnerships with brands seeking authentic creative direction and athletic insight.', year: '2022-Present' },
  { id: 5, title: 'Archive Digitization', category: 'Preservation', status: 'Ongoing', description: 'Comprehensive digital preservation of career milestones, press, and historical materials.', year: '2021-Present' },
  { id: 6, title: 'Art Collection', category: 'Art', status: 'Active', description: 'Ongoing creation of visual work exploring themes of movement, form, and athletic expression.', year: '2019-Present' },
  { id: 7, title: 'X Games Annotation Project', category: 'Archive', status: 'Active', description: 'Annotated timeline linking event footage, judging context, and progression milestones.', year: '2025' },
  { id: 8, title: 'Creator Residency Sessions', category: 'Collaboration', status: 'Planning', description: 'Invited creators build narrative pieces from legacy materials and current studio process.', year: '2026' },
  { id: 9, title: 'Athlete Brand Playbooks', category: 'Advisory', status: 'Active', description: 'Frameworks for athletes building post-competition businesses with durable positioning.', year: '2024-Present' },
  { id: 10, title: 'Press Vault Restoration', category: 'Preservation', status: 'Ongoing', description: 'Restoration of high-value scans and clippings for long-term archive quality.', year: '2025' },
  { id: 11, title: 'Legacy Talk Series', category: 'Media', status: 'In Development', description: 'Recorded talks covering sponsorships, reinvention, and performance psychology.', year: '2026' },
  { id: 12, title: 'Museum Print Editions', category: 'Art', status: 'Planning', description: 'Limited archival print editions sourced from restored historical photography.', year: '2027' }
]

export default function Projects() {
  return (
    <main className="relative overflow-hidden bg-surface-1 pt-28">
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/30">Current Work</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-white">Projects</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">Active builds, collaborations, and creative ventures.</p>
          </header>
        </div>
      </section>

      <SectionWrapper id="projects" eyebrow="Active Work" heading="What Mike is building now.">
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="rounded-[2rem] border border-white/12 bg-surface-4 p-8 transition-all duration-300 hover:border-white/20 hover:shadow-medium">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/50 uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-semibold text-white">{project.title}</h3>
                </div>
                <span className="text-xs text-white/40">{project.year}</span>
              </div>

              <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>

              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${project.status === 'Active' || project.status === 'Ongoing' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                <span className="text-xs text-white/50 uppercase tracking-wider">{project.status}</span>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[3rem] border border-white/12 bg-surface-4 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Collaboration</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Bring a serious brief.</h2>
              </div>
              <div className="text-white/60">Open to focused partnerships, creative collaborations, and advisory engagements.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
