import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'
import { ProductCase, ProductCaseClosing, ProductCaseConnected, ProductCaseDisclosure, ProductCaseHero, ProductCaseIntro, ProductCaseMedia, ProductCaseNext, ProductCaseNote, ProductCasePull, ProductCaseSection, ProductCaseStatement, ProductCaseSticky } from './ProductCase'

const META = productCaseMeta['anansi-gallery']
const NEXT = productCaseProjectMeta[META.nextProject]
const MEDIA_ROOT = '/Anansi%20Gallery%20Files/'

function CaseList({ children }: { children: string[] }) {
  return <ul className="pc-case-list pc-reveal">{children.map(item => <li key={item}>{item}</li>)}</ul>
}

export function AnansiProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-anansi" id="top">
    <ProductCaseHero meta={META} media={{ index:'01', title:'ANANSI / A PLACE FOR THINGS THAT REMAIN', ratio:'full', source:`${MEDIA_ROOT}anansi-cinematic-opening.png`, caption:'The deployed gallery establishes architecture, atmosphere, and art as one encounter.', note:'Actual gallery capture from the deployed frontend demonstration.' }} />
    <ProductCaseIntro>Anansi is a browser-based art experience where guests can discover exhibitions, enter an explorable gallery, read artwork stories, save favourites, and create photographic keepsakes of their visit.</ProductCaseIntro>

    <ProductCaseSection id="anansi-opportunity" label="THE OPPORTUNITY">
      <ProductCaseStatement>What if visiting art online felt less like browsing a catalogue and more like entering a place?</ProductCaseStatement>
      <p className="pc-copy pc-reveal">An artwork can mean more after a few minutes spent with it. Scale, surroundings, story, and relationships with nearby works shape the encounter. Anansi explores how a digital visit can preserve curiosity, movement, atmosphere, and the freedom to linger.</p>
      <ProductCasePull>How might an online gallery feel like somewhere to spend time, without making art harder to access?</ProductCasePull>
      <CaseList children={['Make the gallery feel spatial and atmospheric.', 'Keep artwork stories and next actions easy to find.', 'Provide a useful experience when someone cannot or does not want to run the 3D view.']} />
      <ProductCaseNote label="EVIDENCE BOUNDARY">The direction developed through iterative review of working prototypes. These priorities are product hypotheses, not findings from a formal user-research study.</ProductCaseNote>
    </ProductCaseSection>

    <ProductCaseSection id="anansi-entry" label="ONE EXPERIENCE, TWO WAYS IN">
      <ProductCaseStatement>The website is the front door. The virtual gallery is the spatial encounter.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The public website supports direct discovery through exhibitions, artworks, artists, and saved pieces. The gallery lets guests move through the architecture and approach works at their own pace. Neither route is treated as secondary.</p>
      <ProductCaseConnected items={['DISCOVER ANANSI', 'CHOOSE A WAY TO EXPLORE', 'ENCOUNTER A WORK', 'UNDERSTAND ITS STORY', 'SAVE, EXPRESS INTEREST, OR KEEP WANDERING']} />
      <ProductCaseMedia media={{ index:'02', title:'PUBLIC WEBSITE / DISCOVERY PATH', ratio:'full', source:`${MEDIA_ROOT}anansi-deployed-public-website.png`, caption:'The public website keeps exhibitions and artwork stories available without requiring the 3D experience.' }} />
    </ProductCaseSection>

    <ProductCaseSection id="anansi-architecture" label="BRINGING THE ARCHITECTURE TO LIFE">
      <ProductCaseStatement>A striking image had to become a believable place from every direction.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The entrance, atrium, staircase, upper gallery, glazing, and exhibition surfaces were developed as parts of one building. Iteration resolved practical details such as the staircase meeting the upper floor, railings staying within their boundaries, and seating clearing the walls.</p>
      <p className="pc-copy pc-reveal">Lighting, reflective flooring, and views beyond the glazing create atmosphere, while the current interactive model remains intentionally described as a frontend demonstration rather than a photoreal architectural simulation.</p>
      <ProductCaseMedia media={{ index:'03', title:'GALLERY ARCHITECTURE / ATRIUM + UPPER FLOOR', ratio:'full', source:`${MEDIA_ROOT}anansi-moving-gallery-hero.png`, caption:'The real model provides a continuous route through the gallery architecture.' }} />
    </ProductCaseSection>

    <ProductCaseSection id="anansi-expression" label="AN ENTRANCE THAT BELONGS TO THE GUEST">
      <ProductCaseStatement>A small moment of self-expression before entering the gallery.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Guests begin with a display name and a supported appearance choice. The flow offers six coherent character presets with controls for skin tone, hair colour, clothing tint, footwear where supported, and accessories.</p>
      <p className="pc-copy pc-reveal">Procedurally generated heads did not reach the intended standard, so the design returned to licensed modelled presets and built honest controls around what those assets could support convincingly.</p>
      <ProductCaseSticky>Six coherent presets were more useful than a promise of unlimited customisation that the model quality could not sustain.</ProductCaseSticky>
      <ProductCaseMedia media={{ index:'04', title:'GUEST ENTRY / APPEARANCE CONTROLS', ratio:'full', source:`${MEDIA_ROOT}anansi-appearance-controls.png`, caption:'Display name, character selection, and supported appearance controls precede gallery entry.' }} />
    </ProductCaseSection>

    <ProductCaseSection id="anansi-artwork" label="MAKING AN ARTWORK MORE THAN AN IMAGE">
      <ProductCaseStatement>Atmosphere matters only when the artwork remains the focus.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Selecting a work opens its details and story, with clear routes to save it, express interest, or continue exploring. The public website provides a parallel path to those stories for visitors who prefer direct browsing.</p>
      <p className="pc-copy pc-reveal">The illustrative Tidal Intervals collection and surrounding decorative works are AI-generated presentation assets. They are not attributed to invented artists or presented as real works for sale.</p>
      <ProductCaseMedia media={{ index:'05', title:'ARTWORK / STORY + SAVED WORKS', ratio:'full', source:`${MEDIA_ROOT}anansi-artwork-journey.png`, caption:'Artwork discovery connects spatial encounter, story, and browser-local saving.' }} />
    </ProductCaseSection>

    <ProductCaseSection id="anansi-presence" label="PRESENCE WITHOUT INTERRUPTION">
      <ProductCaseStatement>Social presence should wait until the visitor is ready.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Instead of opening a conversation modal during exploration, Anansi uses a notification control. Guests decide when to respond, preserving the continuity of the visit.</p>
      <CaseList children={['Conversation invitations are demonstrated through simulated frontend interactions.', 'Accept, decline, block, and unblock paths are represented.', 'Display names and pseudonymous IDs avoid mandatory email or phone collection for ordinary entry.', 'A live implementation still needs secure sessions, participant verification, moderation, and clear privacy rules.']} />
      <ProductCaseMedia media={{ index:'06', title:'VISIT CONTROLS / DELIBERATE ENGAGEMENT', ratio:'full', source:`${MEDIA_ROOT}anansi-public-controls.png`, caption:'Guest controls remain available without repeatedly interrupting exploration.' }} />
    </ProductCaseSection>

    <ProductCaseSection id="anansi-linger" label="GIVING PEOPLE REASONS TO LINGER">
      <ProductCaseStatement>Not every interaction needs to lead toward a transaction.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Seating, personal music mute, room shortcuts, and photographs help the gallery feel more like a visit. A polaroid-like keepsake carries Anansi’s tagline and exhibition context, connecting the image to the place where it was made.</p>
      <ProductCaseMedia media={{ index:'07', title:'KEEPSAKE / A PLACE FOR THINGS THAT REMAIN', ratio:'full', source:`${MEDIA_ROOT}anansi-polaroid-tagline.png`, caption:'The photographic keepsake connects personal expression with the exhibition context.' }} />
    </ProductCaseSection>

    <ProductCaseSection id="anansi-mobile" label="TRANSLATING THE EXPERIENCE TO MOBILE">
      <ProductCaseStatement>Mobile needed a new control hierarchy, not a smaller desktop arrangement.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Gallery actions were consolidated into an expandable menu beside the guest name, destinations became a separate compact control, and movement received dedicated space. Modal back actions preserve a visitor’s place in the journey.</p>
      <p className="pc-copy pc-reveal">The responsive website keeps navigation and motion controls legible around the wordmark. Mobile layouts were checked through viewport simulation, with physical-device testing across browsers and GPU capabilities still required.</p>
      <ProductCaseMedia media={{ index:'08', title:'MOBILE / GALLERY ACTIONS + DESTINATIONS', ratio:'full', source:`${MEDIA_ROOT}anansi-mobile-menus.png`, caption:'Compact menus separate visit actions from movement and destination controls.' }} />
    </ProductCaseSection>

    <ProductCaseSection id="anansi-performance" label="WORKING WITHIN BROWSER LIMITS">
      <ProductCaseStatement>Immersion creates a technical cost.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The frontend reduces mobile rendering resolution, loads selectively, pauses hidden or offscreen scenes, and cleans up the homepage scene when visitors leave it. Still imagery provides a fallback when continuous motion or 3D is unavailable.</p>
      <ProductCaseNote label="CURRENT LIMITS">Shared visitor presence, private messaging, durable server-side records, and headset VR are not live. Saved information remains in the current browser, and social interactions are simulated.</ProductCaseNote>
    </ProductCaseSection>

    <ProductCaseSection id="anansi-outcome" label="WHAT THE PROTOTYPE ESTABLISHES">
      <ProductCaseStatement>A connected guest journey, ready for the systems that make it trustworthy at scale.</ProductCaseStatement>
      <CaseList children={['A public website with exhibition, artwork, artist, and saved-work journeys.', 'An explorable architectural gallery with guest entry and appearance choices.', 'Artwork stories, browser-local saves, and a demonstrated interest path.', 'Simulated social interactions that let guests choose when to engage.', 'Personal visit controls, seating, and photographic keepsakes.', 'Responsive navigation and a non-3D browsing alternative.']} />
      <p className="pc-copy pc-reveal">Verification included browser walkthroughs, form and navigation checks, guest-entry and appearance paths, and code-level checks for movement and interaction rules. There are no validated conversion, retention, satisfaction, or visitor-growth results to report.</p>
      <ProductCaseDisclosure label="PUBLIC WEBSITE" url="https://anansi-gallery.vercel.app/catalogue.html#home" cta="Explore Anansi" simulates={['public exhibition and artwork discovery', 'saved-work journeys in the current browser', 'motion and still-view presentation modes']} excludes={['live commerce outcomes', 'durable cross-device visitor records', 'validated adoption or retention results']} />
      <ProductCaseDisclosure label="GUEST GALLERY" url="https://anansi-gallery.vercel.app/gallery.html" cta="Enter as a guest" simulates={['browser-based spatial exploration', 'guest appearance choices and visit controls', 'artwork stories, keepsakes, and simulated invitations']} excludes={['live multiplayer presence', 'private message delivery', 'headset VR support']} />
    </ProductCaseSection>

    <ProductCaseSection id="anansi-reflection" label="REFLECTION">
      <ProductCaseStatement>Realism is a relationship between space, story, behaviour, and restraint.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The strongest lesson was that realism is not one rendering setting. It emerges from a staircase meeting the floor properly, a bench belonging in the room, a story opening when someone approaches a painting, and a message waiting until the visitor is ready.</p>
      <p className="pc-copy pc-reveal">Accepting the limits of character presets, offering a still-view alternative, and maintaining a useful non-3D website made the experience more coherent.</p>
    </ProductCaseSection>

    <ProductCaseClosing descriptor="Anansi makes room for both the artwork and the person encountering it.">A PLACE FOR THINGS THAT REMAIN.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
