export type WorkProject = {
  index: string
  name: string
  slug: string
  cover: null
  status: 'IN PREPARATION' | 'CASE STUDY LIVE'
  tags: string[]
  featured: boolean
  category?: string
  summary?: string
  hasCaseStudy: boolean
}

export const workProjects: WorkProject[] = [
  { index: '01', name: 'PRIMA', slug: 'prima', cover: null, status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'AI / TRUST / PAYMENTS', summary: 'Designing understandable trust for decentralized payments.' },
  { index: '02', name: 'NOMI', slug: 'nomi', cover: null, status: 'IN PREPARATION', tags: [], featured: true, hasCaseStudy: false },
  { index: '03', name: 'HANYA', slug: 'hanya', cover: null, status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'AI / HEALTHCARE / NAVIGATION', summary: 'AI-assisted healthcare navigation that helps people understand what kind of care to seek next.' },
  { index: '04', name: 'YOUSEWIRE', slug: 'yousewire', cover: null, status: 'CASE STUDY LIVE', tags: [], featured: true, hasCaseStudy: true, category: 'FINTECH / FINANCIAL SYSTEMS', summary: 'A unified cross-border financial system designed for personal money management and business financial operations.' }
]
