export default function Memoji() {
  return (
    <div className="memoji" aria-hidden="true">
      <svg viewBox="0 0 320 320">
        <defs>
          <radialGradient id="glow" cx="35%" cy="28%" r="75%">
            <stop offset="0%" stopColor="#FFB4C8" />
            <stop offset="45%" stopColor="#FF7E6B" />
            <stop offset="100%" stopColor="#FF9F43" />
          </radialGradient>
          <clipPath id="round">
            <circle cx="160" cy="160" r="160" />
          </clipPath>
        </defs>
        <g clipPath="url(#round)">
          <circle cx="160" cy="160" r="160" fill="url(#glow)" />
          <ellipse cx="160" cy="300" rx="130" ry="70" fill="#111" />
          <path d="M58 300c18-70 48-120 102-128 54-8 96 28 112 128" fill="#1c1c1c" />
          <ellipse cx="160" cy="178" rx="62" ry="72" fill="#E8B48A" />
          <path
            d="M96 168c6-70 28-102 64-104 38-2 62 34 70 96 2 18-8 28-22 22-18-8-70-10-96-4-12 2-18-2-16-10Z"
            fill="#3A2418"
          />
          <path d="M108 128c18-28 70-34 100-8" fill="#2A1810" />
          <ellipse cx="132" cy="176" rx="16" ry="12" fill="#fff" />
          <ellipse cx="188" cy="176" rx="16" ry="12" fill="#fff" />
          <circle cx="134" cy="176" r="6.5" fill="#2B1A12" />
          <circle cx="190" cy="176" r="6.5" fill="#2B1A12" />
          <path
            d="M112 176h40M168 176h40"
            stroke="#222"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path d="M152 176h16" stroke="#222" strokeWidth="5" />
          <path
            d="M148 206c8 9 18 9 26 0"
            fill="none"
            stroke="#C57B63"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <ellipse cx="118" cy="192" rx="10" ry="6" fill="#E39A86" opacity="0.55" />
          <ellipse cx="202" cy="192" rx="10" ry="6" fill="#E39A86" opacity="0.55" />
          <g transform="translate(78 214)">
            <rect x="0" y="18" width="164" height="92" rx="10" fill="#C9CED6" />
            <rect x="10" y="26" width="144" height="76" rx="6" fill="#0f1115" />
            <rect x="22" y="40" width="46" height="8" rx="2" fill="#5BADFF" />
            <rect x="22" y="56" width="88" height="6" rx="2" fill="#FF8660" />
            <rect x="22" y="70" width="64" height="6" rx="2" fill="#888" />
            <rect x="62" y="0" width="40" height="22" rx="4" fill="#A8ADB6" />
          </g>
        </g>
      </svg>
    </div>
  )
}
