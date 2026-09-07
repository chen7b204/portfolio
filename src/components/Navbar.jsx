import { useState, useEffect } from 'react'
import { PROFILE } from '../constants/profile'

const NAV_ITEMS = [
  { id: 'about', label: '关于' },
  { id: 'works', label: '作品' },
  { id: 'skills', label: '优势' },
  { id: 'contact', label: '联系' },
]

export default function Navbar({ activeId }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGameClick = () => {
    setMenuOpen(false)
    window.open('./game/', '_blank')
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <span className="star">✦</span> {PROFILE.name}
        </a>
        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="navbar-game" onClick={(e) => { e.preventDefault(); handleGameClick() }}>
              🎮 小游戏
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="navbar-cta"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          联系我
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.label}
          </a>
        ))}
        <a href="#" onClick={(e) => { e.preventDefault(); handleGameClick() }}>
          🎮 小游戏
        </a>
      </div>
    </>
  )
}
