import { useEffect, useRef } from 'react'

export default function About({ data }) {
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
    <section id="about" ref={ref} style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '7rem 3rem' }}>

        <p className="fade-up" style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--lime)', marginBottom: '0.75rem',
        }}>About me</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div className="fade-up">
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em',
            }}>
              I craft code that<br />
              <span style={{ color: 'var(--lime)' }}>people actually use</span>
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.02rem' }}>
              I'm a Full-Stack Developer from Pune with hands-on experience in building
              everything from <strong style={{ color: 'var(--text)' }}>interactive educational games</strong> running on museum kiosks,
              to <strong style={{ color: 'var(--text)' }}>AI-powered tax platforms</strong> serving real users.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.02rem' }}>
              My stack spans the full spectrum — <strong style={{ color: 'var(--text)' }}>ReactJS, Next.js, Java, Spring Boot</strong>,
              mobile with <strong style={{ color: 'var(--text)' }}>React Native</strong>, and game dev with <strong style={{ color: 'var(--text)' }}>PhaserJS</strong>.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '1.02rem' }}>
              Currently exploring travel apps and society management tools — because
              great software should solve real problems around us.
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                🎓 B.E. — Savitribai Phule Pune University · CGPA {data.education.cgpa}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="fade-up" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
          }}>
            {data.stats.map((s, i) => {
              const colors = ['--lime', '--sky', '--pink', '--amber']
              return (
                <div key={i} style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 16, padding: '1.75rem 1.5rem',
                  transition: 'border-color 0.25s, transform 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `var(${colors[i]})`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = ''
                }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700,
                    lineHeight: 1, color: `var(${colors[i]})`, marginBottom: 6,
                  }}>{s.number}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 500 }}>{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
