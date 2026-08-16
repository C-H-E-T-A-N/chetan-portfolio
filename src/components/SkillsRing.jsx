const skills = [
  {
    id: 'javascript',
    name: 'JavaScript',
    desc: 'Building interactive web experiences.',
    color: '#F7DF1E',
    angle: 240,
    copy: 'nw',
    badge: 'js',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    desc: 'React framework for production-grade apps.',
    color: '#4ADE80',
    angle: 300,
    copy: 'ne',
    badge: 'next',
  },
  {
    id: 'react',
    name: 'React',
    desc: 'Building reusable UI components.',
    color: '#7DD3FC',
    angle: 0,
    copy: 'e',
    badge: 'react',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    desc: 'Writing safer, more maintainable code.',
    color: '#C084FC',
    angle: 60,
    copy: 'se',
    badge: 'ts',
  },
  {
    id: 'html5',
    name: 'HTML5',
    desc: 'Structuring content for the web.',
    color: '#FF6B8A',
    angle: 120,
    copy: 'sw',
    badge: 'html',
  },
  {
    id: 'css3',
    name: 'CSS3',
    desc: 'Styling beautiful user interfaces.',
    color: '#FB923C',
    angle: 180,
    copy: 'w',
    badge: 'css',
  },
]

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

function SkillBadge({ type }) {
  if (type === 'js') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <text
          x="24"
          y="26"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize="16"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
        >
          JS
        </text>
      </svg>
    )
  }

  if (type === 'next') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <text
          x="24"
          y="27"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize="22"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
        >
          N
        </text>
      </svg>
    )
  }

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

  if (type === 'ts') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <text
          x="24"
          y="26"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize="16"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
        >
          TS
        </text>
      </svg>
    )
  }

  if (type === 'html') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 6h24l-2.2 28L24 40 14.2 34 12 6Z" fill="#fff" />
        <path d="M24 10v25.2l7.8-2.2L34 10H24Z" fill="#000" opacity="0.18" />
        <text
          x="24"
          y="26"
          textAnchor="middle"
          fill="#000"
          fontSize="12"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
        >
          5
        </text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 6h24l-2.2 28L24 40 14.2 34 12 6Z" fill="#fff" />
      <path d="M24 10v25.2l7.8-2.2L34 10H24Z" fill="#000" opacity="0.18" />
      <text
        x="24"
        y="26"
        textAnchor="middle"
        fill="#000"
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif"
      >
        3
      </text>
    </svg>
  )
}

export default function SkillsRing() {
  return (
    <section className="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Experience with</h2>
      <div className="skills-stage">
        <div className="skills-hub">
          <svg className="skills-svg" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              {skills.map((skill) => (
                <filter
                  key={skill.id}
                  id={`glow-${skill.id}`}
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
            {skills.map((skill) => (
              <path
                key={skill.id}
                d={arcPath(skill.angle - 24, skill.angle + 24)}
                fill="none"
                stroke={skill.color}
                strokeWidth="1.15"
                strokeLinecap="round"
                filter={`url(#glow-${skill.id})`}
              />
            ))}
          </svg>

          <div className="skills-core">
            <svg className="skills-code" viewBox="0 0 64 48" aria-hidden="true">
              <path
                d="M22 8 6 24l16 16"
                fill="none"
                stroke="#fff"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M38 6 26 42"
                fill="none"
                stroke="#fff"
                strokeWidth="3.4"
                strokeLinecap="round"
              />
              <path
                d="M42 8l16 16-16 16"
                fill="none"
                stroke="#fff"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Building modern, scalable and high-performance web applications.</p>
          </div>

          <ul className="skills-nodes">
            {skills.map((skill) => {
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
      </div>
    </section>
  )
}
