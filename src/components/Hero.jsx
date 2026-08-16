import { profile } from '../data.js'
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
    </section>
  )
}
