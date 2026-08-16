import { experience } from '../data.js'
import { CompanyLogo } from './Icons.jsx'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <ul className="exp-list">
        {experience.map((job) => (
          <li className="exp-item" key={`${job.role}-${job.period}`}>
            <div className="exp-logo">
              <CompanyLogo type={job.logo} />
            </div>
            <div className="exp-body">
              <div className="exp-head">
                <h3>{job.role}</h3>
                <span>{job.period}</span>
              </div>
              <p>{job.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
