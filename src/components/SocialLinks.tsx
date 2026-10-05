import { contact } from '../data/contact'
import { Icon, type IconName } from './Icon'

const profiles: { label: string; icon: IconName; url?: string }[] = [
  { label: 'LinkedIn', icon: 'linkedin', url: contact.linkedin },
  { label: 'X', icon: 'x', url: contact.x }
]
export function SocialLinks() {
  return <div className="social-links" aria-label="Social profiles">{profiles.map(profile => profile.url
    ? <a key={profile.label} href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`${profile.label}, opens in a new tab`}><Icon name={profile.icon} /><span>{profile.label}</span></a>
    : <span key={profile.label} className="social-pending" aria-disabled="true" title={`${profile.label} profile link coming soon`}><Icon name={profile.icon} /><span>{profile.label}</span></span>
  )}</div>
}
