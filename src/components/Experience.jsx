import { experience } from '../data.js'
import { CompanyLogo } from './Icons.jsx'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline-item" key={`${job.role}-${job.period}`}>
            <span className="timeline-dot" />
            <article className="timeline-card">
              <div className="exp-logo">
                <CompanyLogo type={job.logo} />
              </div>
              <div className="exp-body">
                <div className="exp-head">
                  <h3>
                    {job.role} <span className="exp-at">@ {job.company}</span>
                  </h3>
                  <span>
                    {job.place} · {job.period}
                  </span>
                </div>
                <p>{job.description}</p>
                <ul className="exp-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="metrics">
                  {job.metrics.map((metric) => (
                    <span className="metric" key={metric.label}>
                      <strong>{metric.value}</strong> {metric.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
