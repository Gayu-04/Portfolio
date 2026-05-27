import { useEffect, useRef } from 'react'

const marqueeSkills = ['ReactJS', 'Next.js', 'PhaserJS', 'Java', 'Spring Boot', 'React Native', 'TypeScript', 'MySQL', 'Tailwind CSS', 'REST APIs']

export default function Hero({ data }) {
  const cursorRef = useRef(null)

  useEffect(() => {
    const blink = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0'
      }
    }, 530)
    return () => clearInterval(blink)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '8rem 3rem 4rem',
      maxWidth: '1100px', margin: '0 auto', position: 'relative',
    }}>
      {/* Blobs */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'rgba(200,241,53,0.06)', filter: 'blur(100px)',
        top: '5%', right: '-10%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 350, height: 350, borderRadius: '50%',
        background: 'rgba(255,107,157,0.06)', filter: 'blur(90px)',
        bottom: '10%', left: '-5%', pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'rgba(200,241,53,0.08)', border: '1px solid rgba(200,241,53,0.2)',
        color: 'var(--lime)', borderRadius: 100, padding: '6px 16px',
        fontSize: '0.78rem', fontWeight: 600, marginBottom: '2rem', width: 'fit-content',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        animation: 'fadeUp 0.6s ease 0.1s both',
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: '50%', background: 'var(--lime)',
          animation: 'blink 2s infinite',
        }} />
        Open to opportunities
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(3.2rem, 9vw, 7rem)', lineHeight: 1.0,
        letterSpacing: '-0.03em', marginBottom: '1.5rem',
        animation: 'fadeUp 0.6s ease 0.2s both',
      }}>
        <span style={{ display: 'block', color: 'var(--text)' }}>Gayatri</span>
        <span style={{
          display: 'block',
          WebkitTextStroke: '2px var(--lime)', color: 'transparent',
        }}>
          Siddha
        </span>
        <span ref={cursorRef} style={{
          display: 'inline-block', width: 4, height: 'clamp(2.8rem,7vw,5.5rem)',
          background: 'var(--lime)', marginLeft: 4, verticalAlign: 'bottom',
          transition: 'opacity 0.1s',
        }} />
      </h1>

      {/* Role pill */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        marginBottom: '1.5rem', animation: 'fadeUp 0.6s ease 0.35s both',
      }}>
        <span style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          padding: '8px 20px', borderRadius: 100, fontSize: '1.05rem',
          color: 'var(--text)', fontWeight: 500,
        }}>
          Full-Stack Developer
        </span>
        <span style={{
          background: 'rgba(91,200,245,0.1)', border: '1px solid rgba(91,200,245,0.25)',
          padding: '8px 16px', borderRadius: 100, fontSize: '0.85rem',
          color: 'var(--sky)', fontWeight: 500,
        }}>
          🎮 Game Dev
        </span>
        <span style={{
          background: 'rgba(255,184,48,0.1)', border: '1px solid rgba(255,184,48,0.25)',
          padding: '8px 16px', borderRadius: 100, fontSize: '0.85rem',
          color: 'var(--amber)', fontWeight: 500,
        }}>
          📱 Mobile
        </span>
      </div>

      <p style={{
        fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 560, marginBottom: '2.5rem',
        lineHeight: 1.75, animation: 'fadeUp 0.6s ease 0.45s both',
      }}>
        I build fast, interactive web experiences — from educational games deployed in
        the wild to AI-powered platforms. Based in <strong style={{ color: 'var(--text)' }}>Pune</strong>, available worldwide.
      </p>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: '1rem', flexWrap: 'wrap',
        animation: 'fadeUp 0.6s ease 0.55s both', marginBottom: '5rem',
      }}>
        <a href="#projects" style={{
          background: 'var(--lime)', color: '#0a1a00',
          padding: '0.85rem 2.2rem', borderRadius: 100,
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem',
          textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(200,241,53,0.35)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
        >
          See my work ↓
        </a>
        <a href={data.resume} download style={{
          background: 'transparent', color: 'var(--text)',
          border: '1px solid var(--border)', padding: '0.85rem 2.2rem', borderRadius: 100,
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem',
          textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = '' }}
        >
          Download CV ↗
        </a>
      </div>

      {/* Scrolling marquee */}
      <div style={{
        position: 'relative', overflow: 'hidden', marginLeft: '-3rem', marginRight: '-3rem',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '14px 0',
        animation: 'fadeUp 0.6s ease 0.65s both',
      }}>
        <div style={{
          display: 'flex', gap: '2.5rem', width: 'max-content',
          animation: 'marquee 18s linear infinite',
        }}>
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span key={i} style={{
              color: 'var(--muted)', fontSize: '0.82rem', fontWeight: 500,
              letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: '2.5rem',
            }}>
              {s}
              <span style={{ color: 'var(--lime)', fontSize: '0.5rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
