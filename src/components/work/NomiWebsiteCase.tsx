import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'
import { ProductCase, ProductCaseClosing, ProductCaseConnected, ProductCaseDisclosure, ProductCaseHero, ProductCaseIntro, ProductCaseNext, ProductCaseNote, ProductCasePair, ProductCasePull, ProductCaseSection, ProductCaseStatement, ProductCaseSticky } from './ProductCase'

const META = productCaseMeta['nomi-website']
const NEXT = productCaseProjectMeta[META.nextProject]

function CaseList({ children }: { children: string[] }) {
  return <ul className="pc-case-list pc-reveal">{children.map(item => <li key={item}>{item}</li>)}</ul>
}

export function NomiWebsiteCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-nomi pc-case-nomi-website" id="top">
    <ProductCaseHero meta={META} media={{ index:'01', title:'NOMI HOMEPAGE / CURIOUS MASCOT + PLAYABLE PRACTICE', ratio:'full', note:'The hero pairs the product promise with an interactive practice question.' }} />
    <ProductCaseIntro>The Nomi website turns a connected adaptive learning system into a product story that learners and parents can understand before creating an account.</ProductCaseIntro>

    <ProductCaseSection id="nomi-website-overview" label="THE CHALLENGE">
      <ProductCaseStatement>Show what adaptation means instead of making another broad claim about AI.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">“AI tutor” is a familiar but vague category. Nomi needed to explain that practice, progress, recommendations, and tutoring share the same learner context, while still feeling warm, playful, and credible.</p>
      <ProductCasePull>How might the website demonstrate adaptation before asking someone to sign up?</ProductCasePull>
      <CaseList children={['Clarify how Nomi differs from a generic chatbot.', 'Introduce the character without making the product feel childish.', 'Present the initial subject catalogue honestly.', 'Connect new and returning learners to the web app.']} />
    </ProductCaseSection>

    <ProductCaseSection id="nomi-website-story" label="THE PRODUCT STORY">
      <ProductCaseStatement>Learning that learns you.</ProductCaseStatement>
      <ProductCasePull>Nomi notices how you perform as you practise and chooses what should come next.</ProductCasePull>
      <p className="pc-copy pc-reveal">The page follows a simple rhythm: make the promise, demonstrate the behaviour, explain the details, introduce the personality, show what can be studied, and offer a clear next action.</p>
      <ProductCaseConnected items={['PROMISE', 'PROOF', 'DETAIL', 'PERSONALITY', 'SUBJECTS', 'ACTION']} />
    </ProductCaseSection>

    <ProductCaseSection id="nomi-website-demo" label="THE INTERACTIVE PROOF">
      <ProductCaseStatement>One playable question explains more than a wall of feature cards.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Visitors can answer a practice question in the hero. A correct choice produces reinforcement. An incorrect choice reveals what Nomi noticed and recommends a useful next step.</p>
      <ProductCasePair a={{ index:'02', title:'PRACTICE QUESTION / BEFORE ANSWER' }} b={{ index:'03', title:'ADAPTIVE RESPONSE / AFTER ANSWER' }} />
      <ProductCaseSticky>The interaction connects an action, an observation, and a next step before the visitor reaches the product explanation.</ProductCaseSticky>
    </ProductCaseSection>

    <ProductCaseSection id="nomi-website-system" label="EXPLAINING THE SYSTEM">
      <ProductCaseStatement>Practise. Notice patterns. Change the next step.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The rest of the page expands that three-part loop. Compact product examples show how difficulty, explanations, misconception support, progress, and recommendations respond to learner evidence.</p>
      <ProductCasePair a={{ index:'04', title:'HOW IT WORKS / ADAPTIVE LOOP' }} b={{ index:'05', title:'PRODUCT EXAMPLES / WHAT CHANGES' }} />
    </ProductCaseSection>

    <ProductCaseSection id="nomi-website-visual" label="VISUAL + BRAND EXPERIENCE">
      <ProductCaseStatement>Playful enough to feel alive. Calm enough to earn trust.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Nomi purple, warm cream surfaces, expressive typography, subject colours, 3D learning objects, and purposeful character moods give the page energy without overwhelming the story. Light and dark modes carry the same hierarchy and personality.</p>
      <ProductCasePair a={{ index:'06', title:'HOMEPAGE / LIGHT THEME' }} b={{ index:'07', title:'HOMEPAGE / DARK THEME' }} />
      <ProductCaseNote label="CHARACTER RULE">Curious supports discovery. Supportive helps explain. Reinforcing responds to mistakes. Encouraging frames the next action.</ProductCaseNote>
    </ProductCaseSection>

    <ProductCaseSection id="nomi-website-auth" label="ONE PRODUCT, NOT TWO">
      <ProductCaseStatement>The website remains useful after someone creates an account.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">New visitors see Start learning and Sign in. Authenticated learners see Dashboard. The Nomi wordmark returns learners to the public site without ending their session, and the site provides a direct route back into the product.</p>
      <ProductCaseConnected items={['WEBSITE', 'SIGN UP OR SIGN IN', 'DASHBOARD', 'WEBSITE', 'DASHBOARD']} />
      <ProductCasePair a={{ index:'08', title:'DESKTOP / WIDE EDITORIAL STORY' }} b={{ index:'09', title:'MOBILE / FOCUSED SINGLE COLUMN' }} />
    </ProductCaseSection>

    <ProductCaseSection id="nomi-website-outcome" label="OUTCOME + REFLECTION">
      <ProductCaseStatement>A clear front door for the product behind it.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The live website introduces the promise, demonstrates the learning behaviour, shows Nomi’s personality, previews the available subjects, and carries both new and returning learners into the application.</p>
      <p className="pc-copy pc-reveal">The strongest lesson was simple: the most effective way to explain an adaptive product is to let people experience a small adaptive moment.</p>
      <ProductCaseDisclosure label="LIVE WEBSITE" url="https://nomi-alpha-bay.vercel.app" cta="Open Nomi website" simulates={['the complete public product story', 'an interactive adaptive-learning moment', 'signed-out and authenticated calls to action']} excludes={['conversion claims before meaningful traffic', 'comprehension or brand-perception claims before research']} />
      <ProductCaseStatement>What I would test next.</ProductCaseStatement>
      <CaseList children={['Whether visitors can explain how Nomi differs from a chatbot.', 'Whether the playable question improves understanding.', 'Which message best motivates account creation.', 'Whether parents and learners need different entry points.']} />
    </ProductCaseSection>

    <ProductCaseClosing descriptor="A focused promise, a demonstrated learning behaviour, and a seamless path into the product.">CLEAR ABOUT WHAT IT NOTICES. USEFUL ABOUT WHAT COMES NEXT.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
