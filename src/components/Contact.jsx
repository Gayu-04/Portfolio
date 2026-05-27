import { useEffect, useRef } from 'react'

export default function Contact({ data }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (ref.current) ref.current.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const links = [
    {
      label: 'Email me',
      href: `mailto:${data.email}`,
      sub: data.email,
      color: '#FF6B9D',
      bg: 'rgba(255,107,157,0.08)',
      border: 'rgba(255,107,157,0.2)',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m2 7 10 7 10-7"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: data.github,
      sub: 'github.com/gayatrisiddha',
      color: '#C8F135',
      bg: 'rgba(200,241,53,0.08)',
      border: 'rgba(200,241,53,0.2)',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: data.linkedin,
      sub: 'linkedin.com/in/gayatri-siddha',
      color: '#5BC8F5',
      bg: 'rgba(91,200,245,0.08)',
      border: 'rgba(91,200,245,0.2)',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: 'Download CV',
      href: data.resume,
      download: true,
      sub: 'Gayatri-Full-StackDeveloper.pdf',
      color: '#FFB830',
      bg: 'rgba(255,184,48,0.08)',
      border: 'rgba(255,184,48,0.2)',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" ref={ref} style={{
      background: 'var(--surface)', borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '7rem 3rem', textAlign: 'center' }}>

        {/* Big CTA */}
        <div className="fade-up" style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 28, padding: '4rem 3rem', marginBottom: '2.5rem',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* glow */}
          <div style={{
            position: 'absolute', width: 400, height: 400, borderRadius: '50%',
            background: 'rgba(200,241,53,0.05)', filter: 'blur(80px)',
            top: '-100px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none',
          }} />

          <p style={{
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--lime)', marginBottom: '1rem',
          }}>Contact</p>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem',
            lineHeight: 1.1,
          }}>
            Let's build something<br />
            <span style={{ color: 'var(--lime)' }}>awesome together</span>
          </h2>

          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Open to internships, full-time roles, and freelance projects.
            Drop me a message — I reply fast!
          </p>

          <a href={`mailto:${data.email}`} style={{
            display: 'inline-block',
            background: 'var(--lime)', color: '#0a1a00',
            padding: '1rem 3rem', borderRadius: 100,
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(200,241,53,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
          >
            Say hello ↗
          </a>
        </div>

        {/* Link tiles */}
        <div className="fade-up" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem',
        }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} target={l.download ? undefined : '_blank'}
              rel="noreferrer"
              download={l.download || undefined}
              style={{
                background: l.bg, border: `1px solid ${l.border}`,
                borderRadius: 16, padding: '1.2rem',
                textDecoration: 'none', color: l.color,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${l.color}22` }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              {l.icon}
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem' }}>{l.label}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--muted)', wordBreak: 'break-all' }}>{l.sub}</span>
            </a>
          ))}
        </div>
      </div>

      <footer style={{
        borderTop: '1px solid var(--border)', textAlign: 'center',
        padding: '1.5rem 3rem', color: 'var(--muted)', fontSize: '0.83rem',
      }}>
        Designed & built by <strong style={{ color: 'var(--text)' }}>Gayatri Siddha</strong> · 2025 ✨
      </footer>
    </section>
  )
}
