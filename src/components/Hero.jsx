import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons.jsx'
import Memoji from './Memoji.jsx'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Memoji />
      <h1>
        I do code and turn ideas <span>into products.</span>
      </h1>
      <p className="hero-sub">{profile.subtitle}</p>
      <div className="hero-ctas">
        <a className="btn-solid" href="#contact">
          Get In Touch
        </a>
        <a className="btn-outline" href={profile.resume} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
      <div className="hero-socials">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <MailIcon />
        </a>
        <a href={profile.phoneHref} aria-label="Phone">
          <PhoneIcon />
        </a>
      </div>
    </section>
  )
}
