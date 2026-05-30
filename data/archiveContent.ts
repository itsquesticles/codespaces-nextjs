export interface TimelineEntry {
  year: string
  title: string
  summary: string
  media: string
  slug: string
  image: string
  body: string
}

const archiveImages = [
  '/pictures/mike.jpg',
  '/pictures/OIP-1657554817.jpg',
  '/pictures/OIP-10383125.jpg',
  '/pictures/OIP-1553909786.jpg',
  '/pictures/OIP-236460011.jpg',
  '/pictures/OIP-931402721.jpg',
  '/pictures/OIP-1290660185.jpg',
  '/pictures/OIP-2840115766.jpg',
  '/pictures/OIP-1822825350.jpg',
  '/pictures/OIP-334864886.jpg',
  '/pictures/OIP-2386913321.jpg',
  '/pictures/OIP-3992041538.jpg'
]

const timelineBase = [
  {
    year: '1996',
    title: 'Freestyle foundations',
    summary: 'The first public years where Mike’s style, control, and risk discipline started standing apart.',
    media: 'Photo set'
  },
  {
    year: '1998',
    title: 'Red Bull partnership begins',
    summary: 'A major sponsorship chapter that expanded reach and unlocked larger stages.',
    media: 'Press feature'
  },
  {
    year: '2000',
    title: 'X Games debut era',
    summary: 'Competition visibility accelerated and FMX progression entered mainstream conversation.',
    media: 'Broadcast stills'
  },
  {
    year: '2001',
    title: 'Double backflip breakthrough',
    summary: 'A technical leap that changed the perceived limits of freestyle motocross.',
    media: 'Event footage'
  },
  {
    year: '2002',
    title: 'X Games gold chapter',
    summary: 'Peak competitive moment captured across press coverage and event media.',
    media: 'Photo + article'
  },
  {
    year: '2004',
    title: 'Global tour period',
    summary: 'International shows and campaigns built a broader audience beyond core fans.',
    media: 'Tour gallery'
  },
  {
    year: '2006',
    title: 'Caesars Palace leap',
    summary: 'A high-impact moment that crossed from action sports into wider culture.',
    media: 'Video clip'
  },
  {
    year: '2010',
    title: 'Creative transition',
    summary: 'Shift from competition-heavy years toward art, fabrication, and long-form storytelling.',
    media: 'Studio journal'
  },
  {
    year: '2014',
    title: 'Story-first media direction',
    summary: 'Narrative-focused projects replaced highlight-only edits to preserve context and legacy.',
    media: 'Edit reel'
  },
  {
    year: '2019',
    title: 'Garage chronicles',
    summary: 'Build process documentation became a core part of the archive identity.',
    media: 'Photo essay'
  },
  {
    year: '2021',
    title: 'Archive digitization',
    summary: 'Historical materials were organized into a cleaner, searchable digital structure.',
    media: 'Archive log'
  },
  {
    year: '2024',
    title: 'Office Hours launch',
    summary: 'Experience was productized into direct access for founders, athletes, and creators.',
    media: 'Launch interview'
  }
] as const

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const legacyTimeline: TimelineEntry[] = timelineBase.map((entry, index) => {
  const slug = `${entry.year}-${slugify(entry.title)}`

  return {
    ...entry,
    slug,
    image: archiveImages[index % archiveImages.length],
    body: `${entry.summary} This draft entry is written for final-site tone and structure, and can be swapped 1:1 with verified historical copy as source material is approved.`
  }
})

export const archiveCollections = [
  {
    title: 'Timeline archive',
    description: 'Curated milestone entries with context-focused summaries and image support.',
    items: `${legacyTimeline.length} documented entries`
  },
  {
    title: 'Photo library',
    description: 'Draft visual sequence built from currently available image assets.',
    items: `${archiveImages.length} images in use`
  },
  {
    title: 'Press and interview index',
    description: 'Structured space for future sourced articles, interviews, and citations.',
    items: 'Ready for source ingestion'
  }
]

export const timelineBySlug = new Map(legacyTimeline.map((entry) => [entry.slug, entry]))
