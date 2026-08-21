import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import SkillsRing from './components/SkillsRing.jsx'
import SpiderCursor from './components/SpiderCursor.jsx'

export default function App() {
  return (
    <>
      <SpiderCursor />
      <div className="site-content">
        <Header />
        <main>
          <Hero />
          <SkillsRing />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}
