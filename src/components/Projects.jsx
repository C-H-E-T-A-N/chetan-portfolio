import { projects } from '../data.js'
import { ArrowIcon, ProjectArt } from './Icons.jsx'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => {
          const external = project.href.startsWith('http')
          return (
          <a
            className="project-card"
            key={project.id}
            href={project.href}
            {...(external
              ? { target: '_blank', rel: 'noreferrer noopener' }
              : {})}
          >
            <div className="project-media">
              <ProjectArt type={project.art} />
              <div className="project-overlay">
                <span>Click here to visit</span>
              </div>
            </div>
            <div className="project-meta">
              <div>
                <h3>{project.title}</h3>
                <p>{project.blurb}</p>
              </div>
              <ArrowIcon />
            </div>
          </a>
          )
        })}
      </div>
    </section>
  )
}
