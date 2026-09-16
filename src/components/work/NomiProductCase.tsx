import { ProductCase, ProductCaseHero, ProductCaseIntro, ProductCaseSection, ProductCaseStatement, ProductCaseCopy, ProductCaseDecision, ProductCaseMedia, ProductCasePair, ProductCaseNext, ProductCaseClosing } from './ProductCase'
import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'

const META = productCaseMeta.nomi
const NEXT = productCaseProjectMeta.hanya

export function NomiProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-nomi" id="top">
    <ProductCaseHero meta={META} media={{ index:'01', title:'NOMI HOME / PRIMARY PRODUCT EXPERIENCE', ratio:'full' }} />
    <ProductCaseIntro>{META.intro}</ProductCaseIntro>

    <ProductCaseSection id="nomi-gap" label="THE LEARNING GAP">
      <ProductCaseStatement>EDUCATION DELIVERS CONTENT. FEW PLATFORMS UNDERSTAND THE PERSON CONSUMING IT.</ProductCaseStatement>
      <ProductCaseCopy>A learner may understand one concept immediately but struggle with another, repeat the same kind of mistake, need more practice before moving forward, or return without knowing what to continue.</ProductCaseCopy>
      <ProductCaseDecision statement="The task was not another dashboard. It was a product that observes, responds, recommends, and keeps the learner in control." />
    </ProductCaseSection>

    <ProductCaseSection id="nomi-loop" label="THE ADAPTIVE LOOP">
      <ProductCaseStatement>LEARN. PRACTISE. EVALUATE. ADAPT. CONTINUE.</ProductCaseStatement>
      <ProductCaseCopy>Assessment stops being an endpoint and becomes an input for the next learning decision. When a learner struggles, Nomi can encourage another attempt, reinforce the concept, surface related learning, and shape what appears next.</ProductCaseCopy>
      <ProductCaseMedia media={{ index:'02', title:'NOMI HOME / CONTINUE LEARNING', ratio:'full' }} />
    </ProductCaseSection>

    <ProductCaseSection id="nomi-principles" label="ADAPTATION WITHOUT LOSING CONTROL">
      <ProductCaseStatement>THE SYSTEM RECOMMENDS. THE LEARNER STILL CHOOSES.</ProductCaseStatement>
      <ProductCaseCopy>Subjects, lessons and practice remain explorable. Feedback explains what happens next: continue, try again, revisit, or ask Nomi. The adaptive model is expressed through ordinary product interactions rather than a separate AI mode.</ProductCaseCopy>
      <ProductCasePair a={{ index:'03', title:'PRACTICE / QUESTION' }} b={{ index:'04', title:'PRACTICE / FEEDBACK + REINFORCEMENT' }} />
    </ProductCaseSection>

    <ProductCaseSection id="nomi-ai" label="NOMI, THE COMPANION">
      <ProductCaseStatement>THE SYSTEM IS NOT THE CHAT INTERFACE.</ProductCaseStatement>
      <ProductCaseDecision statement="Nomi the system and Nomi the chat interface are separate." rationale="The character appears across recommendations and feedback, while the dedicated Nomi area supports deeper explanation, guidance, reinforcement and next-action recommendations." />
      <ProductCasePair a={{ index:'05', title:'NOMI / CONTEXTUAL EXPLANATION' }} b={{ index:'06', title:'NOMI / RECOMMENDED NEXT ACTION' }} />
      <ProductCaseCopy>Progress connects activity and performance back to the journey. Practice informs progress, progress informs recommendations, and recommendations influence the next learning action.</ProductCaseCopy>
    </ProductCaseSection>

    <ProductCaseSection id="nomi-brand" label="PERSONALITY + PRODUCT SYSTEM">
      <ProductCaseStatement>PERSONALITY SHOULD SUPPORT USABILITY, NOT COMPETE WITH IT.</ProductCaseStatement>
      <ProductCaseCopy>Nomi the character became a contextual communication layer, used where emotion or guidance adds value. The product combines a warm cream canvas, primary purple, expressive headings, restrained interface typography, rounded surfaces and functional line icons.</ProductCaseCopy>
      <ProductCasePair a={{ index:'07', title:'NOMI CHARACTER STATES' }} b={{ index:'08', title:'3D SUBJECT ILLUSTRATIONS' }} />
    </ProductCaseSection>

    <ProductCaseSection id="nomi-reflection" label="REFLECTION">
      <ProductCaseStatement>THE AI IS NOT THE EXPERIENCE. THE RELATIONSHIP IS.</ProductCaseStatement>
      <ProductCaseCopy>Designing closer to implementation exposed decisions static screens could not reveal. Shared buttons, borders, mascot usage, typography and brand assets became system rules rather than one-screen corrections.</ProductCaseCopy>
      <ProductCaseMedia media={{ index:'09', title:'PROGRESS / MASTERY + RECOMMENDATION', ratio:'full' }} />
    </ProductCaseSection>

    <ProductCaseClosing descriptor="Practice informs progress. Progress informs recommendations. Recommendations influence the next learning action.">LEARNS HOW YOU LEARN.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
