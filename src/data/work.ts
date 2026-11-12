export type WorkProject = {
  index: string
  name: string
  slug: string
  cover: string | null
  status: 'IN PREPARATION' | 'CASE STUDY LIVE' | 'CASE STUDY · MEDIA IN PROGRESS' | 'LIVE WEBSITE'
  tags: string[]
  featured: boolean
  category?: string
  summary?: string
  hasCaseStudy: boolean
  externalUrl?: string
}

export const workProjects: WorkProject[] = [
  { index: '01', name: 'ROOMWISE', slug: 'roomwise', cover: '/roomwise/videos/roomwise-00-thumbnail-loop.mp4', status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'Proptech / Mobile / Property', summary: 'A pre-launch property app concept that connects listing photos to room measurements, floor plans and a 3D view.' },
  { index: '02', name: 'NOMI', slug: 'nomi', cover: '/Nomi Product Files/00-project-card-thumbnail.mp4', status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'AI / EDUCATION / ADAPTIVE LEARNING', summary: 'An adaptive learning companion where practice, progress, recommendations, and contextual AI work together to shape what the learner does next.' },
  { index: '03', name: 'FINLANCER APP', slug: 'finlancer-app', cover: '/finlancer-app/videos/03-home.mp4', status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'Fintech / Mobile / Brand experience', summary: 'A calm iOS money app for freelancers, connecting each payment to spending, tax reserves and goals.' },
  { index: '04', name: 'PRIMA', slug: 'prima', cover: '/Prima Files/Prima Thumbnail.mp4', status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'AI / TRUST / PAYMENTS', summary: 'AI-assisted verification OS for decentralized payments.' },
  { index: '05', name: 'YOUSEWIRE', slug: 'yousewire', cover: '/Yousewire Product Files/01-primary-product-view.mp4', status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'FINTECH / FINANCIAL SYSTEMS', summary: 'A unified cross-border financial system designed for personal money management and business financial operations.' },
  { index: '06', name: 'NOMI WEBSITE', slug: 'nomi-website', cover: '/Nomi Website Thumbnail.mp4', status: 'LIVE WEBSITE', tags: [], featured: true, hasCaseStudy: false, externalUrl: 'https://nomi-alpha-bay.vercel.app', category: 'Web design / Brand experience / Education', summary: 'A responsive marketing website that demonstrates Nomi\'s adaptive learning behaviour through a clear, playful product story.' },
  { index: '07', name: 'ANANSI GALLERY', slug: 'anansi-gallery', cover: '/Anansi%20Gallery%20Files/anansi-gallery-entry.webm', status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'Immersive web / Art discovery / 3D experience', summary: 'An immersive art-discovery experience connecting a public website, an explorable gallery, and personal expression in one journey.' },
  { index: '08', name: 'FINLANCER WEBSITE', slug: 'finlancer-website', cover: null, status: 'LIVE WEBSITE', tags: [], featured: true, hasCaseStudy: false, externalUrl: 'https://finlancer-virid.vercel.app/', category: 'Web design / Fintech / Brand experience', summary: 'A mobile-first marketing website that turns invoices, income, tax planning, and goals into one connected financial story.' },
  { index: '09', name: 'HANYA', slug: 'hanya', cover: '/Hanya Product Files/00-project-thumbnail.mp4', status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'AI / HEALTHCARE / NAVIGATION', summary: 'AI-assisted healthcare navigation that helps people understand what kind of care to seek next.' }
]
