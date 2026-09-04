export type WorkProject = {
  index: string
  name: string
  slug: string
  cover: null
  status: 'IN PREPARATION'
  tags: string[]
  featured: boolean
  category?: string
  summary?: string
}

export const workProjects: WorkProject[] = [
  { index: '01', name: 'PRIMA', slug: 'prima', cover: null, status: 'IN PREPARATION', tags: [], featured: true, category: 'AI / TRUST / PAYMENTS', summary: 'Designing understandable trust for decentralized payments.' },
  { index: '02', name: 'NOMI', slug: 'nomi', cover: null, status: 'IN PREPARATION', tags: [], featured: true },
  { index: '03', name: 'HANYA', slug: 'hanya', cover: null, status: 'IN PREPARATION', tags: [], featured: true },
  { index: '04', name: 'YOUSEWIRE', slug: 'yousewire', cover: null, status: 'IN PREPARATION', tags: [], featured: true }
]
