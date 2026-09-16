import { ProductCase, ProductCaseHero, ProductCaseIntro, ProductCaseSection, ProductCaseStatement, ProductCaseCopy, ProductCaseDecision, ProductCaseMedia, ProductCasePair, ProductCaseNext, ProductCaseClosing } from './ProductCase'
import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'

const META = productCaseMeta.yousewire
const NEXT = productCaseProjectMeta.prima

export function YousewireProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-yousewire" id="top">
    <ProductCaseHero meta={META} media={{ index:'01', title:'YOUSEWIRE CONSOLE / PRIMARY PRODUCT VIEW', ratio:'full' }} />
    <ProductCaseIntro>{META.intro}</ProductCaseIntro>

    <ProductCaseSection id="yousewire-contexts" label="ONE SYSTEM, TWO CONTEXTS">
      <ProductCaseStatement>CROSS-BORDER FINANCE BECOMES COMPLEX VERY QUICKLY.</ProductCaseStatement>
      <ProductCaseCopy>Personal and Business share one product ecosystem while navigation, data and responsibilities remain segmented. The shared system stays consistent, but the complexity changes with the context.</ProductCaseCopy>
      <ProductCasePair a={{ index:'02', title:'PERSONAL DASHBOARD' }} b={{ index:'03', title:'BUSINESS DASHBOARD' }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-money" label="MONEY ACROSS BORDERS">
      <ProductCaseStatement>MULTIPLE CURRENCIES. DIFFERENT RAILS. ONE ACCOUNT MODEL.</ProductCaseStatement>
      <ProductCaseCopy>Currency wallets bring balance, account information, funding, sending and conversion into one model. Compliance appears when it becomes relevant to the action instead of dominating the whole experience.</ProductCaseCopy>
      <ProductCasePair a={{ index:'04', title:'MULTI-CURRENCY WALLETS' }} b={{ index:'05', title:'SEND MONEY / TRANSFER REVIEW' }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-verification" label="COMPLIANCE WITHOUT FRICTION">
      <ProductCaseStatement>COMPLIANCE NEEDED TO BE VISIBLE WITHOUT FEELING HOSTILE.</ProductCaseStatement>
      <ProductCaseDecision statement="Yousewire owns the context. The verification provider owns the verification process." rationale="Verification status and transaction limits stay legible inside the product while the underlying verification process remains separated." />
      <ProductCasePair a={{ index:'06', title:'VERIFICATION + LIMITS' }} b={{ index:'07', title:'ADDRESS VERIFICATION' }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-operations" label="FROM WALLET TO OPERATIONS WORKSPACE">
      <ProductCaseStatement>A BUSINESS NEEDS MORE THAN A WALLET.</ProductCaseStatement>
      <ProductCaseCopy>The business console expands into pay-ins, payouts, bulk payouts, balances, disputes and referrals. Bulk payouts move from batch creation through recipient validation, review, approval, processing and results without letting invalid rows break the entire mental model.</ProductCaseCopy>
      <ProductCaseMedia media={{ index:'08', title:'BULK PAYOUT CREATION / VALIDATION / BATCH REVIEW', ratio:'full' }} />
      <ProductCasePair a={{ index:'09', title:'PAY-INS + PAYOUTS' }} b={{ index:'10', title:'BALANCES' }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-control" label="DESIGNING CONTROL">
      <ProductCaseStatement>MOVING MONEY IS AN ACTION. CONTROLLING WHO CAN MOVE IT IS A SYSTEM.</ProductCaseStatement>
      <ProductCaseCopy>Roles, permissions, limits, approvals, transaction states and audit activity form one authority model. Financial states also need to answer what happened, what the user can do, and whether action is required.</ProductCaseCopy>
      <ProductCasePair a={{ index:'11', title:'TEAM + ROLES / PERMISSIONS' }} b={{ index:'12', title:'APPROVAL QUEUE / PAYMENT APPROVAL' }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-settings" label="THE CONTROL CENTER">
      <ProductCaseStatement>SETTINGS BECAME A CONTROL CENTER.</ProductCaseStatement>
      <ProductCaseCopy>Personal settings cover profile, verification, security, payment preferences and linked accounts. Business settings expand into compliance, teams, roles, approval workflows, limits, payment configuration, payout methods, documents and audit activity. Payroll extends the same system into employee pay configuration.</ProductCaseCopy>
      <ProductCasePair a={{ index:'13', title:'BUSINESS SETTINGS / TEAM SETTINGS' }} b={{ index:'14', title:'PAYROLL / EMPLOYEE PAY CONFIGURATION' }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-reflection" label="REFLECTION">
      <ProductCaseStatement>THE PRODUCT BECAME MORE COMPLEX. THE EXPERIENCE DID NOT HAVE TO.</ProductCaseStatement>
      <ProductCaseCopy>The work was designed in Figma with Product and Project Managers, Developers and Stakeholders around requirements, operational rules, implementation feasibility, edge cases, evolving flows and development handoff.</ProductCaseCopy>
      <a className="pc-disclosure-link" href="https://app.yousewire.com/personal/wallets" target="_blank" rel="noreferrer">Visit live product <span aria-hidden="true">↗</span></a>
    </ProductCaseSection>

    <ProductCaseClosing descriptor="A cross-border financial system for personal money management and business financial operations.">COMPLEXITY WHERE IT BELONGS.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
