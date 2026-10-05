export type BrandRatio = '1:1' | '4:5' | '3:4' | '9:16' | '16:9' | '21:9' | 'tall' | 'ultra-wide'

export type BrandMediaData = {
  index: number
  title: string
  ratio?: BrandRatio
  caption?: string
  alt?: string
  source?: string
}

export type BrandSegment =
  | { kind: 'label'; text: string }
  | { kind: 'statement'; text: string }
  | { kind: 'copy'; text: string }
  | { kind: 'media'; media: BrandMediaData }
  | { kind: 'pair'; left: BrandMediaData; right: BrandMediaData }
  | { kind: 'grid'; tiles: BrandMediaData[] }
  | { kind: 'video'; index: number; title: string; ratio?: BrandRatio; caption?: string; source?: string; poster?: string; alt?: string }
  | { kind: 'quote'; text: string; source?: string }
  | { kind: 'spacer'; tall?: boolean }

export type BrandMovement = {
  number: string
  title: string
  id: string
  segments: BrandSegment[]
}

export type BrandProject = {
  slug: string
  category: string
  number: string
  name: string
  tagline: string
  descriptor: string
  intro: string
  meta: { label: string; value: string }[]
  hero: BrandMediaData
  movements: BrandMovement[]
  next: { name: string; slug: string; note: string; available?: boolean }
  world: string
}

export type BrandingIndexProject = {
  id: string
  index: string
  slug: string
  title: string
  category: string
  descriptor: string
  ratio: BrandRatio
  caseStudy: 'live' | 'preparing'
}

export const brandingIndex: BrandingIndexProject[] = [
  { id: 'b-side-b', index: '001', slug: 'side-b', title: 'SIDE B', category: 'BRANDING', descriptor: 'Brand Identity · Packaging · Art Direction', ratio: 'ultra-wide', caseStudy: 'live' },
  { id: 'b-the-kim-couture', index: '002', slug: 'the-kim-couture', title: 'THE KIM COUTURE', category: 'BRANDING', descriptor: 'Brand Identity · Fashion', ratio: '3:4', caseStudy: 'live' },
  { id: 'b-finlancer', index: '003', slug: 'finlancer', title: 'FINLANCER', category: 'BRANDING', descriptor: 'Brand / Visual Identity', ratio: '21:9', caseStudy: 'live' },
  { id: 'b-pycon', index: '004', slug: 'pycon-nigeria-2024', title: 'PYCON NIGERIA 2024', category: 'BRANDING', descriptor: 'Conference Identity', ratio: '16:9', caseStudy: 'live' },
  { id: 'b-nomi', index: '005', slug: 'nomi', title: 'NOMI', category: 'BRANDING', descriptor: 'Brand / Visual Identity', ratio: '1:1', caseStudy: 'live' },
  { id: 'b-belsquared', index: '006', slug: 'belsquared', title: 'BELSQUARED', category: 'BRANDING', descriptor: 'Brand Identity · Packaging', ratio: '21:9', caseStudy: 'live' }
]

function galleryProject(config: {
  slug: string
  number: string
  name: string
  descriptor: string
  tagline: string
  intro: string
  year: string
  world: string
  story: { title: string; statement?: string; copy: string }[]
  next: BrandProject['next']
}): BrandProject {
  return {
    slug: config.slug,
    category: 'BRANDING',
    number: config.number,
    name: config.name,
    tagline: config.tagline,
    descriptor: config.descriptor,
    intro: config.intro,
    meta: [
      { label: 'YEAR', value: config.year },
      { label: 'SCOPE OF WORK', value: config.descriptor }
    ],
    hero: { index: 1, title: 'HERO IMAGE', ratio: 'ultra-wide' },
    movements: [
      ...config.story.map((section, index): BrandMovement => ({
        number: String(index + 1).padStart(2, '0'),
        title: section.title,
        id: `${config.slug}-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        segments: [
          ...(section.statement ? [{ kind: 'statement' as const, text: section.statement }] : []),
          { kind: 'copy' as const, text: section.copy }
        ]
      })),
      {
      number: String(config.story.length + 1).padStart(2, '0'),
      title: 'PROJECT GALLERY',
      id: `${config.slug}-gallery`,
      segments: [
        { kind: 'media', media: { index: 2, title: 'PROJECT IMAGE 02', ratio: '16:9' } },
        { kind: 'pair', left: { index: 3, title: 'PROJECT IMAGE 03', ratio: '1:1' }, right: { index: 4, title: 'PROJECT IMAGE 04', ratio: '1:1' } },
        { kind: 'media', media: { index: 5, title: 'PROJECT IMAGE 05', ratio: '21:9' } },
        { kind: 'grid', tiles: [
          { index: 6, title: 'PROJECT IMAGE 06', ratio: '4:5' },
          { index: 7, title: 'PROJECT IMAGE 07', ratio: '4:5' },
          { index: 8, title: 'PROJECT IMAGE 08', ratio: '4:5' }
        ] },
        { kind: 'media', media: { index: 9, title: 'PROJECT IMAGE 09', ratio: 'ultra-wide' } },
        { kind: 'grid', tiles: [
          { index: 10, title: 'PROJECT IMAGE 10', ratio: '4:5' },
          { index: 11, title: 'PROJECT IMAGE 11', ratio: '4:5' },
          { index: 12, title: 'PROJECT IMAGE 12', ratio: '4:5' }
        ] },
        { kind: 'media', media: { index: 13, title: 'PROJECT IMAGE 13', ratio: '16:9' } },
        { kind: 'pair', left: { index: 14, title: 'PROJECT IMAGE 14', ratio: '1:1' }, right: { index: 15, title: 'PROJECT IMAGE 15', ratio: '1:1' } },
        { kind: 'media', media: { index: 16, title: 'PROJECT IMAGE 16', ratio: '21:9' } }
      ]
    }],
    next: config.next,
    world: config.world
  }
}

export const brandProjects: BrandProject[] = [
  {
    slug: 'side-b',
    category: 'BRANDING',
    number: '001',
    name: 'SIDE B',
    tagline: 'OLD STUFF.\nNEW SOCKS.',
    descriptor: 'Brand Identity · Packaging · Art Direction',
    intro: 'SIDE B is a sock label built on a simple belief: the objects we stop noticing deserve as much attention as the ones we talk about. This pilot walks a full brand arc, from first mark to product world, packaging, campaign and digital space, for the people who dress for themselves.',
    meta: [
      { label: 'YEAR', value: '2026' },
      { label: 'SCOPE OF WORK', value: 'Brand Identity · Packaging · Art Direction' },
      { label: 'STATUS', value: 'Pilot case study' }
    ],
    hero: { index: 1, title: 'HERO CAMPAIGN IMAGE', ratio: 'ultra-wide' },
    movements: [
      { number: '01', title: 'HERO', id: 'sideb-hero', segments: [] },
      {
        number: '02',
        title: 'PREMISE',
        id: 'sideb-premise',
        segments: [
          { kind: 'copy', text: 'Socks are old stuff: repeated daily, worn without ceremony, noticed last. SIDE B starts where most brands stop looking, on the most ordinary object in the drawer.' },
          { kind: 'media', media: { index: 1, title: 'HERO CAMPAIGN IMAGE', ratio: 'ultra-wide', caption: 'The object before the idea.' } },
          { kind: 'media', media: { index: 2, title: 'PREMISE STUDY', ratio: '1:1', caption: 'Small canvas. Bigger voice.' } }
        ]
      },
      {
        number: '03',
        title: 'IDENTITY',
        id: 'sideb-identity',
        segments: [
          { kind: 'statement', text: 'A SMALL ICON.\nA BIGGER STORY.' },
          { kind: 'copy', text: 'The mark had to live on a hang tag, hold its own on a sock, and survive a billboard three stories up.' },
          { kind: 'media', media: { index: 3, title: 'LOGO SYSTEM', ratio: '1:1', caption: 'Lockup and clear space.' } },
          { kind: 'pair', left: { index: 4, title: 'SYMBOL MARK', ratio: '4:5', caption: 'The mark on its own.' }, right: { index: 5, title: 'CONSTRUCTION GRID', ratio: '16:9', caption: 'Built, not drawn once.' } },
          { kind: 'pair', left: { index: 6, title: 'COLOUR STUDY', ratio: '16:9' }, right: { index: 7, title: 'TYPOGRAPHY SPECIMEN', ratio: '4:5' } }
        ]
      },
      {
        number: '04',
        title: 'VISUAL LANGUAGE',
        id: 'sideb-visual-language',
        segments: [
          { kind: 'copy', text: 'Illustration and photography share one voice; the drawn world extends what the real world gives it.' },
          { kind: 'pair', left: { index: 8, title: 'ILLUSTRATION SYSTEM', ratio: '1:1' }, right: { index: 9, title: 'ICON SYSTEM', ratio: '1:1' } },
          { kind: 'media', media: { index: 10, title: 'PATTERN WORLD', ratio: '21:9' } },
          { kind: 'pair', left: { index: 11, title: 'REAL × ILLUSTRATED', ratio: '3:4' }, right: { index: 12, title: 'STICKER WORLD', ratio: '4:5' } }
        ]
      },
      {
        number: '05',
        title: 'PRODUCT WORLD',
        id: 'sideb-product-world',
        segments: [
          { kind: 'statement', text: 'PRESS PLAY.' },
          { kind: 'quote', text: 'A sock is the closest a brand gets to living with you.', source: 'DROP 001' },
          { kind: 'media', media: { index: 13, title: 'DROP 001', ratio: '16:9', caption: 'The first release, treated like a record.' } },
          { kind: 'pair', left: { index: 14, title: 'SOCK HEROES', ratio: '1:1' }, right: { index: 15, title: 'EMBROIDERY DETAIL', ratio: '1:1', caption: 'The mark stitched, not printed.' } },
          { kind: 'pair', left: { index: 16, title: 'MACRO DETAIL', ratio: '3:4' }, right: { index: 17, title: 'LIFESTYLE / ON FOOT', ratio: '4:5' } },
          { kind: 'media', media: { index: 18, title: 'PACKAGING BEGINS', ratio: 'ultra-wide', caption: 'From drawer to doorstep.' } }
        ]
      },
      {
        number: '06',
        title: 'PACKAGING',
        id: 'sideb-packaging',
        segments: [
          { kind: 'copy', text: 'Packaging carries the same point of view as the sock, from the shipping box to the catalogue.' },
          { kind: 'media', media: { index: 19, title: 'SHIPPING BOX', ratio: '1:1' } },
          { kind: 'pair', left: { index: 20, title: 'MAILER', ratio: '4:5' }, right: { index: 21, title: 'HANG TAGS', ratio: '4:5' } },
          { kind: 'pair', left: { index: 22, title: 'STICKERS', ratio: '1:1' }, right: { index: 23, title: 'TOTE', ratio: '3:4' } },
          { kind: 'media', media: { index: 24, title: 'FOOT BAND + LABEL', ratio: '16:9', caption: 'Where the small icon finally gets its moment.' } },
          { kind: 'media', media: { index: 25, title: 'PRODUCT CATALOGUE', ratio: '21:9' } }
        ]
      },
      {
        number: '07',
        title: 'CAMPAIGN',
        id: 'sideb-campaign',
        segments: [
          { kind: 'statement', text: 'OLD STUFF.\nNEW SOCKS.' },
          { kind: 'copy', text: 'The campaign treats the sock like a cultural artefact: big enough to claim the street, small enough to be worn.' },
          { kind: 'media', media: { index: 26, title: 'OOH / HERO POSTER', ratio: 'ultra-wide' } },
          { kind: 'pair', left: { index: 27, title: 'POSTER SERIES', ratio: '4:5' }, right: { index: 28, title: 'BILLBOARD', ratio: '21:9' } },
          { kind: 'grid', tiles: [{ index: 29, title: 'GRAFFITI MOMENT', ratio: '3:4' }, { index: 30, title: 'SKATE PARK', ratio: '4:5' }, { index: 31, title: 'STREETWEAR MOMENT', ratio: '3:4' }] },
          { kind: 'pair', left: { index: 32, title: 'BUS STOP', ratio: '16:9' }, right: { index: 33, title: 'SHOPPING BAG', ratio: '1:1' } },
          { kind: 'media', media: { index: 34, title: 'CAMPAIGN LIFESTYLE', ratio: '21:9' } }
        ]
      },
      {
        number: '08',
        title: 'DIGITAL WORLD',
        id: 'sideb-digital-world',
        segments: [
          { kind: 'copy', text: 'The same voice at thumb-motion size: feed, story, store and reel.' },
          { kind: 'media', media: { index: 35, title: 'INSTAGRAM', ratio: '1:1' } },
          { kind: 'pair', left: { index: 36, title: 'STORIES', ratio: '9:16' }, right: { index: 37, title: 'MOBILE SHOPPING', ratio: '9:16', caption: 'Tap to own.' } },
          { kind: 'media', media: { index: 38, title: 'WEBSITE', ratio: '16:9' } },
          { kind: 'video', index: 39, title: 'MOTION REEL', ratio: '9:16', caption: 'Loop it.' }
        ]
      },
      {
        number: '09',
        title: 'CLOSING',
        id: 'sideb-closing',
        segments: [
          { kind: 'statement', text: 'OLD STUFF.\nNEW SOCKS.' },
          { kind: 'media', media: { index: 40, title: 'FINAL CAMPAIGN STILL', ratio: 'ultra-wide' } },
          { kind: 'spacer', tall: true }
        ]
      },
      { number: '10', title: 'NEXT PROJECT', id: 'sideb-next', segments: [] }
    ],
    next: { name: 'THE KIM COUTURE', slug: 'the-kim-couture', note: 'Brand Identity · Fashion' },
    world: 'sideb'
  },
  galleryProject({ slug: 'the-kim-couture', number: '002', name: 'THE KIM COUTURE', descriptor: 'Brand Identity · Fashion', tagline: 'MADE TO BE\nREMEMBERED.', intro: 'A fashion identity shaped through elegance, confidence, and a clear visual point of view.', year: '2024', world: 'kim', story: [
    { title: 'Premise', copy: 'The identity needed to feel considered and expressive without competing with the clothes. The system creates a confident frame for each collection.' },
    { title: 'Identity', statement: 'QUIET FORM.\nCLEAR PRESENCE.', copy: 'Typography, proportion, and restraint work together to give the brand a recognisable presence across large and small applications.' },
    { title: 'Visual Language', copy: 'A controlled visual language keeps photography, campaign layouts, and product communication connected while leaving space for each garment to lead.' },
    { title: 'Application', copy: 'The system extends across labels, packaging, campaign material, social content, and digital touchpoints as one coherent fashion identity.' }
  ], next: { name: 'FINLANCER', slug: 'finlancer', note: 'Brand / Visual Identity' } }),
  galleryProject({ slug: 'finlancer', number: '003', name: 'FINLANCER', descriptor: 'Brand / Visual Identity', tagline: 'FINANCE FOR\nINDEPENDENT WORK.', intro: 'A visual identity for a financial product built around the realities of independent work.', year: '2025', world: 'finlancer', story: [
    { title: 'Premise', copy: 'Independent work can make money management feel fragmented. The brand needed to make financial organisation feel calm, capable, and easy to approach.' },
    { title: 'Identity', statement: 'CLARITY FOR\nEVERY MOVE.', copy: 'The identity balances financial confidence with the flexibility and momentum associated with freelance work.' },
    { title: 'Visual Language', copy: 'A structured system of type, colour, iconography, and interface-led composition turns complex financial information into a clear visual rhythm.' },
    { title: 'Application', copy: 'The visual system is designed to move consistently across product screens, launch communication, social content, and supporting brand materials.' }
  ], next: { name: 'PYCON NIGERIA 2024', slug: 'pycon-nigeria-2024', note: 'Conference Identity' } }),
  galleryProject({ slug: 'pycon-nigeria-2024', number: '004', name: 'PYCON NIGERIA 2024', descriptor: 'Conference Identity', tagline: 'A COMMUNITY\nIN MOTION.', intro: 'A conference identity designed to bring the energy of Nigeria’s Python community into one coherent experience.', year: '2024', world: 'pycon', story: [
    { title: 'Premise', copy: 'The conference brings different people, disciplines, and levels of experience into one community. Its identity needed to feel open, energetic, and unmistakably collective.' },
    { title: 'Identity', statement: 'BUILT BY\nTHE COMMUNITY.', copy: 'The system uses a flexible visual structure that can hold technical information while still feeling celebratory and human.' },
    { title: 'Visual Language', copy: 'Bold colour, modular composition, and expressive graphic elements create continuity across speakers, sessions, schedules, and event communication.' },
    { title: 'Event World', copy: 'The identity scales across the website, stage environment, passes, signage, merchandise, social content, and post-event material.' }
  ], next: { name: 'NOMI', slug: 'nomi', note: 'Brand / Visual Identity' } }),
  galleryProject({ slug: 'nomi', number: '005', name: 'NOMI', descriptor: 'Brand / Visual Identity', tagline: 'LEARNING WITH\nA PERSONALITY.', intro: 'A warm visual identity for an adaptive learning product that responds to each learner.', year: '2025', world: 'nomi', story: [
    { title: 'Premise', copy: 'Adaptive learning can feel abstract or mechanical. Nomi needed a brand that made intelligence feel supportive, understandable, and personal.' },
    { title: 'Identity', statement: 'SMART ENOUGH\nTO FEEL HUMAN.', copy: 'The identity combines a clear learning system with a warm personality that can guide, encourage, explain, and celebrate progress.' },
    { title: 'Visual Language', copy: 'Colour, rounded forms, character expression, illustration, and approachable typography give the product a consistent emotional language.' },
    { title: 'Product World', copy: 'The brand extends through onboarding, subject discovery, assessed practice, progress, contextual tutoring, campaigns, and the marketing website.' }
  ], next: { name: 'BELSQUARED', slug: 'belsquared', note: 'Brand Identity · Packaging' } }),
  galleryProject({ slug: 'belsquared', number: '006', name: 'BELSQUARED', descriptor: 'Brand Identity · Packaging', tagline: 'EVERYDAY OBJECTS.\nCLEAR CHARACTER.', intro: 'A brand identity and packaging system built to feel direct, useful, and recognisable.', year: '2023', world: 'belsquared', story: [
    { title: 'Premise', copy: 'The brand needed to bring order and personality to a broad consumer experience without becoming complicated or overly decorative.' },
    { title: 'Identity', statement: 'SIMPLE SHAPES.\nSTRONG RECALL.', copy: 'A direct identity system uses clear geometry, typography, and repetition to build recognition across physical and digital touchpoints.' },
    { title: 'Visual Language', copy: 'The visual system balances functional information with confident colour and composition, giving everyday applications a distinct point of view.' },
    { title: 'Packaging', copy: 'The identity is designed to remain consistent across packaging formats, product communication, campaign assets, and the wider customer experience.' }
  ], next: { name: 'SIDE B', slug: 'side-b', note: 'Brand Identity · Packaging · Art Direction' } })
]
