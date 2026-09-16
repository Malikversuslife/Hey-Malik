import { ProductCase, ProductCaseHero, ProductCaseIntro, ProductCaseSection, ProductCaseStatement, ProductCaseCopy, ProductCaseDecision, ProductCaseMedia, ProductCasePair, ProductCaseNext, ProductCaseClosing } from './ProductCase'
import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'

const META = productCaseMeta.hanya
const NEXT = productCaseProjectMeta.yousewire

export function HanyaProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-hanya" id="top">
    <ProductCaseHero meta={META} media={{ index:'01', title:'HANYA / UNDERSTANDING', ratio:'full' }} />
    <ProductCaseIntro>{META.intro}</ProductCaseIntro>

    <ProductCaseSection id="hanya-navigation-gap" label="THE NAVIGATION GAP">
      <ProductCaseStatement>PEOPLE DESCRIBE SYMPTOMS. HEALTHCARE SYSTEMS ASK THEM TO CHOOSE SERVICES.</ProductCaseStatement>
      <ProductCaseCopy>The gap is the question between those two moments: what kind of care do I actually need? Hanya was designed around natural language first, progressive understanding, safety before completion, and guidance rather than diagnosis.</ProductCaseCopy>
      <ProductCaseDecision statement="Reduce the experience to three decisions: understanding, next step, find care." />
      <ProductCaseMedia media={{ index:'02', title:'THREE-STAGE PROGRESS INDICATOR', ratio:'full' }} />
    </ProductCaseSection>

    <ProductCaseSection id="hanya-understanding" label="DESIGNING UNDERSTANDING">
      <ProductCaseStatement>THE CONVERSATION IS STRUCTURED UNDERNEATH, EVEN WHEN IT FEELS NATURAL.</ProductCaseStatement>
      <ProductCaseCopy>Natural language is translated into structured context. The system tracks what is known, what is still missing, and the next useful question instead of repeating the same intake pattern.</ProductCaseCopy>
      <ProductCasePair a={{ index:'03', title:'UNDERSTANDING / INITIAL CONCERN' }} b={{ index:'04', title:'UNDERSTANDING / FOLLOW-UP' }} />
    </ProductCaseSection>

    <ProductCaseSection id="hanya-ai-boundary" label="THE AI BOUNDARY">
      <ProductCaseStatement>THE AI WAS NOT ALLOWED TO OWN THE SAFETY DECISION.</ProductCaseStatement>
      <ProductCaseDecision statement="Conversational intelligence and healthcare pathway logic are separate." rationale="The model assists interpretation. A deterministic Hanya engine controls context accumulation, safety rules, missing fields, pathway selection and provider matching." />
    </ProductCaseSection>

    <ProductCaseSection id="hanya-safety" label="SAFETY INTERRUPTS THE JOURNEY">
      <ProductCaseStatement>WHEN SAFETY BECOMES THE PRIORITY, SECONDARY DECISIONS DISAPPEAR.</ProductCaseStatement>
      <ProductCaseCopy>Potential emergency patterns interrupt the normal flow. Hanya gives clear instruction to seek emergency care and removes provider browsing because it cannot determine or rule out a medical emergency.</ProductCaseCopy>
      <ProductCaseMedia media={{ index:'05', title:'EMERGENCY / SEEK EMERGENCY CARE NOW', ratio:'full' }} />
    </ProductCaseSection>

    <ProductCaseSection id="hanya-guidance" label="FROM GUIDANCE TO CARE">
      <ProductCaseStatement>DIRECTION WITHOUT PRESENTING A DIAGNOSIS.</ProductCaseStatement>
      <ProductCaseCopy>Recommended care type, location, availability, consultation cost, insurance compatibility and match reason carry into Find Care. Provider search begins with context the user has already given.</ProductCaseCopy>
      <ProductCaseMedia media={{ index:'06', title:'GUIDANCE / BASED ON WHAT YOU SHARED', ratio:'full' }} />
      <ProductCasePair a={{ index:'07', title:'FIND CARE / RESULTS' }} b={{ index:'08', title:'PROVIDER DETAIL' }} />
    </ProductCaseSection>

    <ProductCaseSection id="hanya-system" label="BUILDING THE SYSTEM">
      <ProductCaseStatement>THE PRODUCT STILL NEEDED TO WORK BEFORE LIVE AI USAGE.</ProductCaseStatement>
      <ProductCaseCopy>Mock and OpenAI-ready modes share the same context structure, safety engine and pathway logic. The interpretation layer can change without changing the safety and navigation architecture.</ProductCaseCopy>
      <ProductCaseDecision label="IMPLEMENTATION" statement="263 tests passing across 13 test files, with TypeScript and the production build passing in the documented MVP." />
    </ProductCaseSection>

    <ProductCaseSection id="hanya-reflection" label="REFLECTION">
      <ProductCaseStatement>ONE CONVERSATION. ONE CLEARER NEXT STEP.</ProductCaseStatement>
      <ProductCaseCopy>The design questions became: what should the model be responsible for, which decisions need deterministic control, how should the system show what it understands, and what happens when the AI service is unavailable?</ProductCaseCopy>
      <ProductCaseMedia media={{ index:'09', title:'FINAL NAVIGATOR JOURNEY', ratio:'full' }} />
    </ProductCaseSection>

    <ProductCaseClosing descriptor="An AI-assisted healthcare navigation MVP built around guidance, safety and human judgement.">GUIDANCE FOR THE NEXT DECISION.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
