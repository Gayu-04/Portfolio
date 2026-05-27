import { useEffect, useRef } from 'react'

const colorMap = {
  '--lime': '#C8F135',
  '--sky':  '#5BC8F5',
}

export default function Experience({ experience }) {
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
    <section id="experience" ref={ref} style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '7rem 3rem' }}>
        <p className="fade-up" style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.75rem',
        }}>Where I've worked</p>

        <h2 className="fade-up" style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '3.5rem',
        }}>
          <span style={{ color: 'var(--amber)' }}>Experience</span>
        </h2>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 12, bottom: 12,
            width: 1, background: 'var(--border)',
          }} />

          {experience.map((exp, i) => {
            const hex = colorMap[exp.color] || '#C8F135'
            return (
              <div key={i} className="fade-up" style={{
                position: 'relative', marginBottom: i < experience.length - 1 ? '3rem' : 0,
              }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '-2.4rem', top: 14,
                  width: 10, height: 10, borderRadius: '50%',
                  background: hex, boxShadow: `0 0 12px ${hex}66`,
                }} />

                <div style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 20, padding: '2rem',
                  transition: 'border-color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${hex}44`}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem',
                        color: 'var(--text)', marginBottom: 4,
                      }}>{exp.role}</h3>
                      <div style={{ color: hex, fontWeight: 600, fontSize: '0.92rem' }}>{exp.company}</div>
                    </div>
                    <span style={{
                      background: 'var(--card)', border: '1px solid var(--border)',
                      padding: '5px 14px', borderRadius: 100,
                      fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}>{exp.period}</span>
                  </div>

                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ color: 'var(--muted)', fontSize: '0.93rem', lineHeight: 1.7 }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
