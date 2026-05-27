import { useEffect, useRef } from 'react'

const statusColor = {
  'Live':        { bg: 'rgba(200,241,53,0.1)',  border: 'rgba(200,241,53,0.3)',  text: '#C8F135' },
  'In Progress': { bg: 'rgba(255,184,48,0.1)',  border: 'rgba(255,184,48,0.3)',  text: '#FFB830' },
  'Completed':   { bg: 'rgba(91,200,245,0.1)',  border: 'rgba(91,200,245,0.3)',  text: '#5BC8F5' },
}

const accentColorMap = {
  '--lime':  '#C8F135',
  '--sky':   '#5BC8F5',
  '--amber': '#FFB830',
  '--pink':  '#FF6B9D',
  '--mint':  '#4ECDC4',
}

export default function Projects({ projects }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    if (ref.current) ref.current.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '7rem 3rem' }}>
        <p className="fade-up" style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--pink)', marginBottom: '0.75rem',
        }}>What I've built</p>

        <h2 className="fade-up" style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '3.5rem',
        }}>
          <span style={{ color: 'var(--pink)' }}>Projects</span> I'm proud of
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => {
            const sc = statusColor[p.status]
            const accentHex = accentColorMap[p.accent] || '#C8F135'
            return (
              <div key={i} className="fade-up" style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 20, overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.5)`
                e.currentTarget.style.borderColor = `${accentHex}33`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
              >
                {/* Thumb */}
                <div style={{
                  height: 140, background: p.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '4rem', position: 'relative',
                }}>
                  {p.emoji}
                  {/* accent line */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: 2, background: accentHex, opacity: 0.6,
                  }} />
                </div>

                {/* Body */}
                <div style={{ padding: '1.4rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {p.type}
                    </span>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 600, padding: '3px 10px', borderRadius: 100,
                      background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text,
                    }}>{p.status}</span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem',
                    marginBottom: '0.6rem', color: 'var(--text)',
                  }}>{p.title}</h3>

                  <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65, flex: 1, marginBottom: '1.2rem' }}>
                    {p.desc}
                  </p>

                  {/* Stack pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.2rem' }}>
                    {p.stack.map((s, j) => (
                      <span key={j} style={{
                        background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
                        color: 'var(--muted)', borderRadius: 100,
                        padding: '3px 10px', fontSize: '0.75rem', fontWeight: 500,
                      }}>{s}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" style={{
                        background: accentHex, color: '#0a0a0a',
                        padding: '7px 16px', borderRadius: 100,
                        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem',
                        textDecoration: 'none', transition: 'box-shadow 0.2s, transform 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 4px 16px ${accentHex}44`; e.currentTarget.style.transform = 'translateY(-1px)' }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
                      >
                        Live ↗
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" style={{
                        background: 'transparent', color: 'var(--text)',
                        border: '1px solid var(--border)', padding: '7px 16px', borderRadius: 100,
                        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8rem',
                        textDecoration: 'none', transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                      >
                        GitHub
                      </a>
                    )}
                    {!p.live && !p.github && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--muted)', paddingTop: 7 }}>Coming soon...</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
