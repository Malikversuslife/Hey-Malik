import type { SimpleIcon } from 'simple-icons'
import { siClaude, siCss, siCursor, siFigma, siFramer, siGithub, siGooglegemini, siHtml5, siMiro, siNotion, siOpencode, siShopify, siWebflow } from 'simple-icons'

type Tool = { key: string; label: string; icon?: SimpleIcon; image?: string }

const tools: Tool[] = [
  { key: 'figma', label: 'Figma', icon: siFigma }, { key: 'framer', label: 'Framer', icon: siFramer },
  { key: 'claude', label: 'Claude', icon: siClaude }, { key: 'lovable', label: 'Lovable', image: '/tool-logos/lovable.ico' },
  { key: 'opencode', label: 'OpenCode', icon: siOpencode }, { key: 'webflow', label: 'Webflow', icon: siWebflow },
  { key: 'shopify', label: 'Shopify', icon: siShopify }, { key: 'chatgpt', label: 'ChatGPT', image: '/openai-logo.svg' },
  { key: 'base44', label: 'Base44', image: '/tool-logos/base44.ico' }, { key: 'miro', label: 'Miro', icon: siMiro },
  { key: 'notion', label: 'Notion', icon: siNotion }, { key: 'illustrator', label: 'Illustrator', image: '/tool-logos/illustrator.svg' },
  { key: 'photoshop', label: 'Photoshop', image: '/tool-logos/photoshop.svg' }, { key: 'cursor', label: 'Cursor', icon: siCursor },
  { key: 'github', label: 'GitHub', icon: siGithub }, { key: 'html', label: 'HTML', icon: siHtml5 },
  { key: 'css', label: 'CSS', icon: siCss }, { key: 'gemini', label: 'Gemini', icon: siGooglegemini },
  { key: 'stitch', label: 'Google Stitch', image: '/tool-logos/google-stitch.ico' },
]

function ToolMark({ tool }: { tool: Tool }) {
  if (tool.icon) return <svg role="img" viewBox="0 0 24 24" aria-label={`${tool.label} logo`}><path d={tool.icon.path} /></svg>
  return <img src={tool.image} alt={`${tool.label} logo`} />
}

export function ToolCarousel() {
  const repeated = [...tools, ...tools]
  return <section className="rail-tools" aria-label="Tools Malik uses">
    <div className="rail-tools-label"><span>TOOLS</span><small>DESIGN · BUILD · AI</small></div>
    <div className="rail-tools-window">
      <div className="rail-tools-track" role="list">{repeated.map((tool, index) => <span className={`rail-tool rail-tool-${tool.key}`} key={`${tool.key}-${index}`} role="listitem" aria-label={tool.label} aria-hidden={index >= tools.length || undefined}>
        <i><ToolMark tool={tool} /></i><b>{tool.label}</b>
      </span>)}</div>
    </div>
  </section>
}
