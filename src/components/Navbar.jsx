import { useState, useEffect } from 'react'

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 3rem',
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <a href="#hero" style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem',
        color: 'var(--lime)', textDecoration: 'none', letterSpacing: '-0.02em',
      }}>
        GS<span style={{ color: 'var(--text)' }}>.dev</span>
      </a>

      {/* Desktop */}
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l} style={{ display: window.innerWidth < 700 ? 'none' : 'block' }}>
            <a href={`#${l.toLowerCase()}`} style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '0.88rem', fontWeight: 500, letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        background: 'var(--lime)', color: '#0a1a00',
        padding: '0.5rem 1.2rem', borderRadius: '100px',
        fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
        fontFamily: 'var(--font-display)',
        transition: 'transform 0.15s, box-shadow 0.15s',
      }}
      onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 20px rgba(200,241,53,0.3)' }}
      onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
      >
        Hire me ↗
      </a>
    </nav>
  )
}
