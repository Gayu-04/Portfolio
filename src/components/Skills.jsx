import { useEffect, useRef } from 'react'

const colorMap = {
  '--pink':  { bg: 'rgba(255,107,157,0.08)', border: 'rgba(255,107,157,0.22)', text: 'var(--pink)' },
  '--sky':   { bg: 'rgba(91,200,245,0.08)',  border: 'rgba(91,200,245,0.22)',  text: 'var(--sky)' },
  '--lime':  { bg: 'rgba(200,241,53,0.08)',  border: 'rgba(200,241,53,0.22)',  text: 'var(--lime)' },
  '--amber': { bg: 'rgba(255,184,48,0.08)',  border: 'rgba(255,184,48,0.22)',  text: 'var(--amber)' },
  '--mint':  { bg: 'rgba(78,205,196,0.08)',  border: 'rgba(78,205,196,0.22)',  text: 'var(--mint)' },
  '--coral': { bg: 'rgba(255,107,107,0.08)', border: 'rgba(255,107,107,0.22)', text: 'var(--coral)' },
}

export default function Skills({ skills }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (ref.current) ref.current.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '7rem 3rem' }}>
        <p className="fade-up" style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--sky)', marginBottom: '0.75rem',
        }}>Skills & tools</p>

        <h2 className="fade-up" style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '3.5rem',
        }}>
          My <span style={{ color: 'var(--sky)' }}>tech arsenal</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {skills.map((group, i) => {
            const c = colorMap[group.color] || colorMap['--pink']
            return (
              <div key={i} className="fade-up" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 16, padding: '1.5rem 2rem',
                display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1.5rem', alignItems: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem',
                  letterSpacing: '0.04em', color: c.text, textTransform: 'uppercase',
                }}>
                  {group.category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.tags.map((t, j) => (
                    <span key={j} style={{
                      background: c.bg, border: `1px solid ${c.border}`,
                      color: c.text, borderRadius: 100,
                      padding: '5px 14px', fontSize: '0.84rem', fontWeight: 500,
                      transition: 'transform 0.15s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = ''}
                    >{t}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
