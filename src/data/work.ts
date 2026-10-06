export type WorkProject = {
  index: string
  name: string
  slug: string
  cover: string | null
  status: 'IN PREPARATION' | 'CASE STUDY LIVE' | 'LIVE WEBSITE'
  tags: string[]
  featured: boolean
  category?: string
  summary?: string
  hasCaseStudy: boolean
  externalUrl?: string
}

export const workProjects: WorkProject[] = [
  { index: '01', name: 'PRIMA', slug: 'prima', cover: '/Prima Files/Prima Thumbnail.mp4', status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'AI / TRUST / PAYMENTS', summary: 'AI-assisted verification OS for decentralized payments.' },
  { index: '02', name: 'NOMI', slug: 'nomi', cover: null, status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'AI / EDUCATION / ADAPTIVE LEARNING', summary: 'An adaptive learning companion where practice, progress, recommendations, and contextual AI work together to shape what the learner does next.' },
  { index: '03', name: 'NOMI WEBSITE', slug: 'nomi-website', cover: null, status: 'LIVE WEBSITE', tags: [], featured: true, hasCaseStudy: false, externalUrl: 'https://nomi-alpha-bay.vercel.app', category: 'WEB DESIGN / BRAND EXPERIENCE / EDUCATION', summary: 'A responsive marketing website that demonstrates Nomi\'s adaptive learning behaviour through a clear, playful product story.' },
  { index: '04', name: 'HANYA', slug: 'hanya', cover: null, status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'AI / HEALTHCARE / NAVIGATION', summary: 'AI-assisted healthcare navigation that helps people understand what kind of care to seek next.' },
  { index: '05', name: 'YOUSEWIRE', slug: 'yousewire', cover: null, status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'FINTECH / FINANCIAL SYSTEMS', summary: 'A unified cross-border financial system designed for personal money management and business financial operations.' },
  { index: '06', name: 'FINLANCER WEBSITE', slug: 'finlancer-website', cover: null, status: 'LIVE WEBSITE', tags: [], featured: true, hasCaseStudy: false, externalUrl: 'https://finlancer-virid.vercel.app/', category: 'WEB DESIGN / FINTECH / BRAND EXPERIENCE', summary: 'A mobile-first marketing website that turns invoices, income, tax planning, and goals into one connected financial story.' }
]
