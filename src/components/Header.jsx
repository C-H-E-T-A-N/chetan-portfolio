import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="site-header">
      <a className="signature" href="#home" onClick={() => setOpen(false)}>
        {profile.name}
      </a>
      <button
        type="button"
        className={`menu-btn${open ? ' open' : ''}`}
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav${open ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
