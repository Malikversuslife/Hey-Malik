import type { ComponentType } from 'react'

export type LabStatus = 'EXPERIMENT' | 'PROTOTYPE' | 'IN PROGRESS' | 'SHIPPED' | 'ARCHIVED'

export type LabExperiment = {
  id: string
  slug: string
  title: string
  year: string
  category: string
  question: string
  summary: string
  experiment: string
  learning: string[]
  tools: string[]
  cover: string | null
  media: string | null
  liveUrl?: string
  aiTool?: string
  badges?: string[]
  previewMode?: 'mobile' | 'desktop'
  status: LabStatus
  Artifact?: ComponentType
}

export const labExperiments: LabExperiment[] = [
  {
    id: '002', slug: 'ad-astra', title: 'AD ASTRA', year: '2026',
    category: 'ICON LIBRARY / FIGMA PLUGIN',
    question: 'HOW MIGHT A SCULPTURAL ICON SYSTEM FEEL PREMIUM WITHOUT LOSING EDITABILITY?',
    summary: 'Explore Ad Astra, a sculptural icon library of 106 editable SVG objects for premium digital products. Search, favorite, copy, and insert its chrome, graphite, and spectral icons directly in Figma with the Ad Astra plugin.',
    experiment: 'Ad Astra brings a searchable library of sculptural SVG icons into one focused browsing experience, then extends the same collection into Figma for direct insertion and editing.',
    learning: [
      'A distinctive material language can remain usable when every object stays editable as SVG.',
      'Search and favourites make a large visual library easier to revisit during active design work.',
      'The Figma plugin shortens the path from discovery to placement without flattening the character of the set.',
    ],
    tools: ['SVG ICON SYSTEM', 'SEARCH + FAVORITES', 'FIGMA PLUGIN'],
    cover: '/ad-astra-lab.png', media: '/ad-astra-lab.png',
    liveUrl: 'https://ad-astra-icons-library.vercel.app/', aiTool: 'OpenAI (Codex)', badges: ['Figma Plugin'], previewMode: 'desktop', status: 'SHIPPED',
  },
  {
    id: '001', slug: 'clear-road', title: 'CLEAR ROAD', year: '2026',
    category: 'CIVIC TECH / INTERACTIVE MAP',
    question: 'HOW MIGHT PEOPLE SEE WHAT IS HAPPENING ON THE ROAD BEFORE SETTING OUT?',
    summary: "See what's ahead with Clear Road. Explore community-reported traffic, road hazards, flooding and checkpoints on an interactive map of Nigerian roads.",
    experiment: 'Clear Road turns community road reports into a shared live map for Nigerian commuters. People can scan nearby conditions, switch map views, locate themselves and report traffic, hazards, flooding or checkpoints.',
    learning: [
      'Community reports become more useful when people can see them in their geographic context.',
      'A reporting flow needs to stay quick enough to use while road conditions are changing.',
      'Clear hierarchy helps a live map remain readable while keeping its most useful actions close at hand.',
    ],
    tools: ['INTERACTIVE MAP', 'GEOLOCATION', 'COMMUNITY REPORTING'],
    cover: '/clear-road-lab.png', media: '/clear-road-lab.png',
    liveUrl: 'https://clear-road-zeta.vercel.app/', aiTool: 'OpenAI (Codex)', previewMode: 'mobile', status: 'SHIPPED',
  },
]
