export function TechIcon({ name }) {
  const icons = {
    javascript: (
      <svg viewBox="0 0 48 48" aria-label="JavaScript">
        <rect width="48" height="48" rx="8" fill="#F7DF1E" />
        <path
          d="M20 36.5c0 3.4-2 5.5-5.5 5.5-3 0-4.8-1.5-5.7-3.4l3.1-1.9c.5 1 .9 1.7 2 1.7 1 0 1.6-.4 1.6-2V24h4.5v12.5Zm8.2 5.4c-3.5 0-5.8-1.7-6.9-4l3.1-1.8c.8 1.4 1.8 2.4 3.6 2.4 1.5 0 2.5-.8 2.5-1.9 0-1.3-1-1.8-2.8-2.6l-1-.4c-2.8-1.2-4.7-2.7-4.7-5.9 0-2.9 2.2-5.1 5.7-5.1 2.5 0 4.3.9 5.6 3.1l-3 2c-.7-1.2-1.4-1.7-2.6-1.7-1.2 0-1.9.7-1.9 1.7 0 1.2.7 1.6 2.5 2.4l1 .4c3.3 1.4 5.2 3 5.2 6.1 0 3.5-2.7 5.3-6.3 5.3Z"
          fill="#000"
        />
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 48 48" aria-label="Next.js">
        <circle cx="24" cy="24" r="22" fill="#fff" />
        <path
          d="M20 14h4.2l9.6 14.6V14H38v20h-4.1L24.2 19.2V34H20V14Z"
          fill="#000"
        />
      </svg>
    ),
    html5: (
      <svg viewBox="0 0 48 48" aria-label="HTML5">
        <path d="M10 6h28l-2.5 32L24 42 12.5 38 10 6Z" fill="#E44D26" />
        <path d="M24 9v29.5l9.2-2.6L35.4 9H24Z" fill="#F16529" />
        <path d="M24 20h-7l.4 4H24v-4Zm-6.4 8 .4 4.6L24 34v-4.2l-5.8-1.6-.6-4.2H24V20" fill="#EBEBEB" />
        <path d="M24 20v4h6.6l-.5 5.2L24 29.8V34l8.4-2.3L33.4 20H24Z" fill="#fff" />
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 48 48" aria-label="CSS3">
        <path d="M10 6h28l-2.5 32L24 42 12.5 38 10 6Z" fill="#1572B6" />
        <path d="M24 9v29.5l9.2-2.6L35.4 9H24Z" fill="#33A9DC" />
        <path d="M24 20H17l.4 4H24v-4Zm0 8h-6l.5 5.2L24 34v-4.2l-5.2-1.4-.4-4.4H24" fill="#EBEBEB" />
        <path d="M24 20v4h6.4l-.4 4H24v4.2l6.8 1.8.8-8.8.4-5.2H24Z" fill="#fff" />
      </svg>
    ),
    react: (
      <svg viewBox="0 0 48 48" aria-label="React">
        <circle cx="24" cy="24" r="22" fill="#111" />
        <g fill="none" stroke="#61DAFB" strokeWidth="2">
          <ellipse cx="24" cy="24" rx="16" ry="6.5" />
          <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(120 24 24)" />
        </g>
        <circle cx="24" cy="24" r="3.2" fill="#61DAFB" />
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 48 48" aria-label="TypeScript">
        <rect width="48" height="48" rx="8" fill="#3178C6" />
        <path
          d="M22 20h-8v3h2.6v13h3.6V23H23v-3Zm5.2 6.4c.5-1 1.6-1.8 3.3-1.8 2.6 0 4 1.4 4.1 3.8v8.6h-3.4v-8c0-1.2-.5-1.8-1.6-1.8-1.1 0-1.8.7-1.8 1.9v7.9h-3.4V25h3.4v1.4Z"
          fill="#fff"
        />
      </svg>
    ),
  }

  return icons[name] ?? null
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

export function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.5 9H3.7v11h2.8V9ZM5.1 3.3A1.8 1.8 0 1 0 5.1 7a1.8 1.8 0 0 0 0-3.7ZM20.3 20h-2.8v-5.6c0-1.8-.7-2.4-1.8-2.4s-2 .9-2 2.5V20h-2.8V9h2.7v1.5c.6-.9 1.8-1.8 3.6-1.8 2.4 0 4.1 1.5 4.1 4.8V20Z" />
    </svg>
  )
}

export function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function CompanyLogo({ type }) {
  if (type === 'upwork') {
    return (
      <svg viewBox="0 0 48 48" aria-label="Upwork">
        <circle cx="24" cy="24" r="24" fill="#14A800" />
        <path
          d="M14 18h3.2c.3 2.8 1.7 7.4 4.8 7.4 1.2 0 2-.6 2-2.2V18H27v5.3c0 3.4-1.8 5-4.4 5-2.3 0-4.1-1.5-5.2-3.4l-.9 8.1H13.4L14 18Zm16.5-1.5c2.8 0 4.8 2.2 4.8 5.4v.3h-7.3c.3 1.6 1.5 2.6 3.2 2.6 1 0 1.9-.4 2.6-1.1l1.8 2c-1.1 1.1-2.7 1.8-4.6 1.8-3.4 0-5.8-2.4-5.8-5.6 0-3.2 2.3-5.4 5.3-5.4Zm0 2.4c-1.3 0-2.2.9-2.5 2.2h4.9c-.3-1.3-1.2-2.2-2.4-2.2Z"
          fill="#fff"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-label="Adglobal360">
      <circle cx="24" cy="24" r="24" fill="#1E4DFF" />
      <path d="M15 33 24 13l9 20h-3.4l-1.6-3.7h-8l-1.6 3.7H15Zm6.4-6.4h5.2L24 19.2 21.4 26.6Z" fill="#fff" />
    </svg>
  )
}

export function ProjectArt({ type }) {
  if (type === 'charts') {
    return (
      <svg className="project-thumb" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="400" fill="#141820" />
        <rect x="48" y="40" width="544" height="320" rx="16" fill="#1c2330" />
        <rect x="80" y="250" width="48" height="80" rx="6" fill="#5BADFF" />
        <rect x="160" y="190" width="48" height="140" rx="6" fill="#FF8660" />
        <rect x="240" y="140" width="48" height="190" rx="6" fill="#61DAFB" />
        <rect x="320" y="210" width="48" height="120" rx="6" fill="#9A33FF" />
        <rect x="400" y="160" width="48" height="170" rx="6" fill="#FF8660" />
        <rect x="480" y="120" width="48" height="210" rx="6" fill="#5BADFF" />
      </svg>
    )
  }
  if (type === 'mobile') {
    return (
      <svg className="project-thumb" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="400" fill="#1a1020" />
        <rect x="230" y="36" width="180" height="328" rx="28" fill="#111" stroke="#FF8660" strokeWidth="4" />
        <rect x="248" y="72" width="144" height="240" rx="8" fill="#2a2140" />
        <circle cx="320" cy="334" r="12" fill="#C5C5C5" />
      </svg>
    )
  }
  if (type === 'viz') {
    return (
      <svg className="project-thumb" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="400" fill="#101418" />
        <circle cx="200" cy="200" r="90" fill="none" stroke="#5BADFF" strokeWidth="28" strokeDasharray="180 400" />
        <circle cx="200" cy="200" r="90" fill="none" stroke="#FF8660" strokeWidth="28" strokeDasharray="90 400" strokeDashoffset="-180" />
        <rect x="340" y="120" width="220" height="18" rx="9" fill="#2a3140" />
        <rect x="340" y="160" width="180" height="18" rx="9" fill="#FF8660" />
        <rect x="340" y="200" width="200" height="18" rx="9" fill="#5BADFF" />
        <rect x="340" y="240" width="140" height="18" rx="9" fill="#9A33FF" />
      </svg>
    )
  }
  return (
    <svg className="project-thumb" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="400" fill="#1b1524" />
      <rect x="70" y="70" width="500" height="260" rx="18" fill="#2a2038" />
      <rect x="100" y="110" width="160" height="180" rx="12" fill="#FF8660" opacity="0.85" />
      <rect x="290" y="110" width="240" height="28" rx="8" fill="#fff" opacity="0.2" />
      <rect x="290" y="160" width="200" height="16" rx="8" fill="#fff" opacity="0.15" />
      <rect x="290" y="190" width="170" height="16" rx="8" fill="#fff" opacity="0.12" />
      <rect x="290" y="240" width="120" height="36" rx="18" fill="#fff" />
    </svg>
  )
}
