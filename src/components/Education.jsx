import { education } from '../data.js'

export default function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <ol className="timeline timeline--edu">
        {education.map((item) => (
          <li className="timeline-item" key={item.school}>
            <span className="timeline-dot" />
            <article className="timeline-card">
              <div className="exp-body">
                <div className="exp-head">
                  <h3>{item.title}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="edu-school">
                  {item.school} · {item.place}
                </p>
                <p>{item.detail}</p>
                <div className="metrics">
                  {item.metrics.map((metric) => (
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
