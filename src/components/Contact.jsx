import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <h2>Contact</h2>
      <p className="contact-bio">{profile.bio}</p>
      <div className="contact-lines">
        <a className="contact-email" href={`mailto:${profile.email}`}>
          <MailIcon />
          {profile.email}
        </a>
        <a className="contact-email" href={profile.phoneHref}>
          <PhoneIcon />
          9996686450
        </a>
      </div>
      <div className="socials">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <MailIcon />
        </a>
      </div>
    </footer>
  )
}
