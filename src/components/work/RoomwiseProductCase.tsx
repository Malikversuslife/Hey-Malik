import { ProductCase, ProductCaseHero, ProductCaseIntro, ProductCaseSection, ProductCaseStatement, ProductCaseCopy, ProductCasePull, ProductCaseDecision, ProductCaseMedia, ProductCaseNote, ProductCaseNext, ProductCaseClosing } from './ProductCase'
import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'

const META = productCaseMeta.roomwise
const NEXT = productCaseProjectMeta.prima
const VIDEO = '/roomwise/videos/'
const clip = (index: string, title: string, name: string, note?: string) => ({ index, title, ratio: 'full' as const, source: `${VIDEO}${name}.mp4`, poster: `${VIDEO}${name}.jpg`, note })

export function RoomwiseProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-roomwise" id="top">
    <ProductCaseHero meta={META} media={clip('01', 'ROOMWISE / LISTING, PLAN AND 3D TOUR', 'roomwise-01-hero', 'A walkthrough of the pre-launch concept. Press play to explore the listing, floor plan and 3D view.')} />
    <ProductCaseIntro>{META.intro}</ProductCaseIntro>

    <ProductCaseSection id="roomwise-problem" label="THE PROBLEM">
      <ProductCaseStatement>Photos showed the home. They didn’t show its size.</ProductCaseStatement>
      <ProductCaseCopy>Wide-angle photos can make a bedroom feel bigger, while a careful crop can hide the corridor. In Lagos, discovering the real proportions often means paying an inspection fee and spending hours on a viewing. People relocating from elsewhere may have to decide from photos alone.</ProductCaseCopy>
      <ProductCasePull>Will my life fit in this space?</ProductCasePull>
      <ProductCaseCopy>A renter wants to know whether a bed and wardrobe fit. A buyer wants to compare what the price buys per square metre. A land buyer needs to understand boundaries and frontage. Roomwise treats these as one design problem: a listing should make its size verifiable.</ProductCaseCopy>
      <ProductCaseMedia media={clip('02', 'THE PROBLEM / ROOM-TAGGED PHOTOS', 'roomwise-02-the-problem')} />
    </ProductCaseSection>

    <ProductCaseSection id="roomwise-decision" label="THE PRODUCT DECISION">
      <ProductCaseStatement>Keep photos first. Put the plan one tap away.</ProductCaseStatement>
      <ProductCaseCopy>People already browse property through photos. Replacing that familiar entry point with a diagram would ask them to change behaviour before they trust the product. Roomwise keeps the visual story and the spatial evidence connected.</ProductCaseCopy>
      <ProductCaseDecision statement="Photos sell the feeling. The plan proves the size. Neither replaces the other." rationale="The concept gives each listing a photo layer and a measured floor-plan and 3D layer. A proposed on-site measurement date appears with the plan, so the dimensions would be a claim the service stands behind rather than an unverified agent estimate." />
    </ProductCaseSection>

    <ProductCaseSection id="roomwise-rooms" label="CONNECTED ROOM VIEW">
      <ProductCaseStatement>Every photo knows which room it shows.</ProductCaseStatement>
      <ProductCaseCopy>Room tags put dimensions directly on the image, such as “Master bedroom · 4.0 × 4.0 m · 16.0 m².” Selecting “Show on floor plan” highlights that same room on the plan. Tapping a room on the plan brings its photo back. If a room has no agent photo, the interface says so.</ProductCaseCopy>
      <ProductCaseCopy>The plan draws dimensions, area, doors and furniture to scale. A two-point measure tool answers specific clearance questions, while one unit setting switches the app between metric and imperial.</ProductCaseCopy>
      <ProductCaseMedia media={clip('03', 'CONNECTED ROOM VIEW / PHOTO TO PLAN', 'roomwise-03-connected-room-view')} />
      <ProductCaseMedia media={clip('04', 'FLOOR PLAN / SELECTION AND MEASUREMENT', 'roomwise-04-floor-plan')} />
      <ProductCaseNote label="INTERACTION PRINCIPLE">The photo viewer, floor plan and 3D view share one room selection. Moving between them should preserve context.</ProductCaseNote>
    </ProductCaseSection>

    <ProductCaseSection id="roomwise-scale" label="PROPORTION, NOT JUST NUMBERS">
      <ProductCaseStatement>A number needs a reference.</ProductCaseStatement>
      <ProductCaseCopy>The 3D tour can orbit and zoom around the home. Its wall-height slider moves from full-height walls to a dollhouse view, so the layout becomes legible from above. A 1.75 m figure and a 1.8 × 2.0 m king bed turn abstract floor area into familiar scale.</ProductCaseCopy>
      <ProductCaseMedia media={clip('05', '3D TOUR / WALL HEIGHT AND SCALE', 'roomwise-05-3d-and-scale')} />
      <ProductCaseCopy>The furniture fit check tests a footprint in both orientations and looks for 0.6 m of walking clearance. It distinguishes “fits,” “tight” and “doesn’t fit,” then draws the result on the plan.</ProductCaseCopy>
      <ProductCaseMedia media={clip('06', 'FURNITURE FIT CHECK', 'roomwise-06-furniture-fit')} />
      <ProductCaseDecision statement="The floor plan is an interface, not an attachment." rationale="It answers the question people bring a tape measure to a viewing for, before they leave the house." />
    </ProductCaseSection>

    <ProductCaseSection id="roomwise-system" label="FROM FEATURE TO SYSTEM">
      <ProductCaseStatement>Size becomes useful wherever a decision happens.</ProductCaseStatement>
      <ProductCaseCopy>Measured area can filter search results, appear on every property card, and support price-per-square-metre comparisons. The compare view overlays two floor plans at the same scale, making a 140 m² flat and a 92 m² flat visibly different shapes rather than just different numbers.</ProductCaseCopy>
      <ProductCaseMedia media={clip('07', 'SEARCH, SIZE FILTER AND MAP', 'roomwise-07-search-and-map')} />
      <ProductCaseMedia media={clip('08', 'TWO HOMES, ONE SCALE / COMPARE', 'roomwise-08-compare')} />
      <ProductCaseCopy>The same listing structure adapts to rent, purchase, shortlet and land. Rent makes service charges clear. Purchase shows title-document status. Shortlet shows the full price and fees before payment. Land replaces room plans with a scaled plot, beacons, frontage and an example building footprint.</ProductCaseCopy>
      <ProductCaseMedia media={clip('09', 'RENT, BUY, SHORTLET AND LAND', 'roomwise-09-four-listing-types')} />
    </ProductCaseSection>

    <ProductCaseSection id="roomwise-flow" label="A CONNECTED APP">
      <ProductCaseStatement>One home, one set of facts across the journey.</ProductCaseStatement>
      <ProductCaseCopy>The concept spans 25 screens and six flows: onboarding, discovery, listing details, listing types and comparison, booking, and saved homes with viewings and inbox. A home saved from the map is the same home in Compare and chat. A plan sent in a message retains its room context.</ProductCaseCopy>
      <ProductCaseCopy>Viewing requests distinguish waiting for the agent from confirmed. The proposed flow shares the exact address after confirmation and makes the plan available offline for the visit. The visit can then focus on light, noise, finishes and the street, things a plan cannot convey.</ProductCaseCopy>
      <ProductCaseMedia media={clip('10', 'BOOKING A VIEWING', 'roomwise-10-booking')} />
      <ProductCaseMedia media={clip('11', 'SAVED HOMES AND CONNECTED JOURNEY', 'roomwise-11-connected-journey')} />
    </ProductCaseSection>

    <ProductCaseSection id="roomwise-walkthrough" label="FULL APP WALKTHROUGH">
      <ProductCaseStatement>The complete journey, from first visit to a better decision.</ProductCaseStatement>
      <ProductCaseCopy>Watch the connected concept move through onboarding, discovery, the listing, measured floor plan, 3D tour, furniture fit, comparison and viewing request.</ProductCaseCopy>
      <ProductCaseMedia media={clip('12', 'ROOMWISE / FULL APP WALKTHROUGH', 'roomwise-full-app-walkthrough', 'Full app concept walkthrough · 2 min 39 sec. Playback is controlled by the reader.')} />
    </ProductCaseSection>

    <ProductCaseSection id="roomwise-reflection" label="REFLECTION">
      <ProductCaseStatement>Trust in property is a measurement problem.</ProductCaseStatement>
      <ProductCaseCopy>Roomwise began with listing photos and became a question about evidence. Putting the plan on the photo, one tap away and linked room by room, made size part of browsing instead of a separate document to find later.</ProductCaseCopy>
    </ProductCaseSection>

    <ProductCaseClosing descriptor="A pre-launch property app concept for Nigeria, where every photo connects to the room it shows.">SEE THE REAL SIZE.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
