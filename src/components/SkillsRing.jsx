import { skillRings } from '../data.js'

const CX = 50
const CY = 50
const RING_R = 33

function polar(r, deg) {
  const rad = (deg * Math.PI) / 180
  return {
    x: CX + r * Math.cos(rad),
    y: CY + r * Math.sin(rad),
  }
}

function arcPath(startDeg, endDeg) {
  const start = polar(RING_R, startDeg)
  const end = polar(RING_R, endDeg)
  const delta = ((endDeg - startDeg) % 360 + 360) % 360
  const large = delta > 180 ? 1 : 0
  return `M ${start.x.toFixed(3)} ${start.y.toFixed(3)} A ${RING_R} ${RING_R} 0 ${large} 1 ${end.x.toFixed(3)} ${end.y.toFixed(3)}`
}

function LetterBadge({ text }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <text
        x="24"
        y="26"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#fff"
        fontSize={text.length > 2 ? 11 : 15}
        fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif"
      >
        {text}
      </text>
    </svg>
  )
}

function SkillBadge({ type }) {
  if (type === 'react') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <g fill="none" stroke="#fff" strokeWidth="1.8">
          <ellipse cx="24" cy="24" rx="16" ry="6.4" />
          <ellipse cx="24" cy="24" rx="16" ry="6.4" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="16" ry="6.4" transform="rotate(120 24 24)" />
        </g>
        <circle cx="24" cy="24" r="3" fill="#fff" />
      </svg>
    )
  }

  if (type === 'html' || type === 'css') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 6h24l-2.2 28L24 40 14.2 34 12 6Z" fill="#fff" />
        <text
          x="24"
          y="26"
          textAnchor="middle"
          fill="#000"
          fontSize="12"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
        >
          {type === 'html' ? '5' : '3'}
        </text>
      </svg>
    )
  }

  const labels = {
    js: 'JS',
    next: 'N',
    ts: 'TS',
    rn: 'RN',
    expo: 'EX',
    vue: 'V',
    redux: 'RTK',
    query: 'RQ',
    zt: 'ZT',
    rest: 'API',
    gql: 'QL',
    tw: 'TW',
    mui: 'MUI',
    jest: 'JT',
    a11y: 'A11',
    git: 'Git',
    gh: 'GH',
    post: 'PM',
    fig: 'Fg',
    jira: 'JI',
    perf: '⚡',
  }

  return <LetterBadge text={labels[type] || type.slice(0, 3).toUpperCase()} />
}

function SkillHub({ ring }) {
  return (
    <article className="skills-card">
      <h3>{ring.title}</h3>
      <p className="skills-caption">{ring.caption}</p>
      <div className="skills-hub">
        <svg className="skills-svg" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            {ring.skills.map((skill) => (
              <filter
                key={skill.id}
                id={`glow-${ring.id}-${skill.id}`}
                x="-40%"
                y="-40%"
                width="180%"
                height="180%"
              >
                <feGaussianBlur stdDeviation="1.6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
          </defs>
          <circle
            className="skills-ring-base"
            cx={CX}
            cy={CY}
            r={RING_R}
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="0.28"
            strokeDasharray="1.15 1.35"
          />
          {ring.skills.map((skill) => (
            <path
              key={skill.id}
              className="skills-arc"
              d={arcPath(skill.angle - 24, skill.angle + 24)}
              fill="none"
              stroke={skill.color}
              strokeWidth="1.15"
              strokeLinecap="round"
              filter={`url(#glow-${ring.id}-${skill.id})`}
            />
          ))}
        </svg>
        <div className="skills-core">
          <strong>{ring.title}</strong>
        </div>
        <ul className="skills-nodes">
          {ring.skills.map((skill) => {
            const pos = polar(RING_R, skill.angle)
            return (
              <li
                key={skill.id}
                className={`skill-node skill-node--${skill.copy}`}
                style={{
                  '--color': skill.color,
                  '--x': `${pos.x}%`,
                  '--y': `${pos.y}%`,
                }}
              >
                <span className="skill-badge">
                  <SkillBadge type={skill.badge} />
                </span>
                <div className={`skill-copy skill-copy--${skill.copy}`}>
                  <strong>{skill.name}</strong>
                  <p>{skill.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default function SkillsRing() {
  return (
    <section className="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Experience with</h2>
      <div className="skills-grid">
        {skillRings.map((ring) => (
          <SkillHub key={ring.id} ring={ring} />
        ))}
      </div>
    </section>
  )
}
