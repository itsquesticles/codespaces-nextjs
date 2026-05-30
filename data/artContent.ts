export interface ArtworkEntry {
  id: number
  title: string
  year: string
  medium: string
  description: string
  collection: string
  available: boolean
  slug: string
  image: string
  body: string
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const baseArtworks = [
  { id: 1, title: 'Office Hours archive', year: '2024', medium: 'Digital Archive', description: 'Weekly conversations, project notes, and candid analysis of what matters now.', collection: 'Membership Access', available: true, image: '/pictures/mike.jpg' },
  { id: 2, title: 'Film & narrative direction', year: '2023', medium: 'Video Production', description: 'Visual storytelling rooted in athletic history and modern creative ambition.', collection: 'Current Projects', available: true, image: '/pictures/OIP-1657554817.jpg' },
  { id: 3, title: 'Select collaborations', year: '2022-2024', medium: 'Mixed Media', description: 'Curated work with brands, media partners, and cultural storytellers.', collection: 'Collaborations', available: false, image: '/pictures/OIP-10383125.jpg' },
  { id: 4, title: 'Studio studies', year: '2021', medium: 'Photography', description: 'Documentary photography capturing the creative process and workspace.', collection: 'Personal Archive', available: true, image: '/pictures/OIP-1553909786.jpg' },
  { id: 5, title: 'Metal work series', year: '2020', medium: 'Sculpture', description: 'Fabricated metal pieces exploring form, function, and athletic movement.', collection: 'Sculpture', available: false, image: '/pictures/OIP-236460011.jpg' },
  { id: 6, title: 'Garage chronicles', year: '2019', medium: 'Photography', description: 'Behind-the-scenes documentation of builds, experiments, and fabrication.', collection: 'Photography', available: true, image: '/pictures/OIP-931402721.jpg' },
  { id: 7, title: 'Impact studies', year: '2018', medium: 'Mixed Media', description: 'Layered studies combining archival imagery with industrial textures.', collection: 'Legacy Studies', available: false, image: '/pictures/OIP-1290660185.jpg' },
  { id: 8, title: 'Blueprint sketches', year: '2017', medium: 'Drawing', description: 'Technical sketches bridging fabrication plans and visual composition.', collection: 'Studio Drafts', available: true, image: '/pictures/OIP-2840115766.jpg' },
  { id: 9, title: 'Tour fragments', year: '2016', medium: 'Photography', description: 'Photo series from touring years documenting performance environments.', collection: 'Archive Prints', available: true, image: '/pictures/OIP-1822825350.jpg' },
  { id: 10, title: 'Motion residue', year: '2015', medium: 'Painting', description: 'Abstract motion studies inspired by trajectory, timing, and consequence.', collection: 'Paintings', available: false, image: '/pictures/OIP-334864886.jpg' },
  { id: 11, title: 'Workshop objects', year: '2014', medium: 'Sculpture', description: 'Functional pieces assembled from reclaimed mechanical materials.', collection: 'Object Series', available: true, image: '/pictures/OIP-2386913321.jpg' },
  { id: 12, title: 'Signal and steel', year: '2013', medium: 'Mixed Media', description: 'Early experiments combining archival press textures with metal surfaces.', collection: 'Foundational Works', available: false, image: '/pictures/OIP-3992041538.jpg' }
] as const

export const artworks: ArtworkEntry[] = baseArtworks.map((item) => ({
  ...item,
  slug: `${item.id}-${slugify(item.title)}`,
  body: `${item.description} This piece sits inside the ${item.collection.toLowerCase()} and reflects the same progression mindset used in riding years: iterate, test, and refine with intention.`
}))

export const artworkBySlug = new Map(artworks.map((entry) => [entry.slug, entry]))
