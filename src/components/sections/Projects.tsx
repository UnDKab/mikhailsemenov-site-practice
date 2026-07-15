import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

type ProjectsProps = {
  dict: Dictionary
}

export default function Projects({ dict }: ProjectsProps) {
  const { projects } = dict

  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <RevealBlock className="sec-head">
          <p className="kicker">{projects.kicker}</p>
          <h2>{projects.title}</h2>
        </RevealBlock>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }} className="proj-grid">
          {projects.items.map((p, i) => (
            <RevealBlock key={p.url} delay={i as 0|1}>
              <a
              
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: 44,
                  background: 'rgba(255,255,255,.72)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  overflow: 'hidden',
                  minHeight: 340,
                  transition: 'all .45s var(--ease)',
                  boxShadow: '0 12px 40px rgba(15,73,137,.08)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: 220,
                    height: 220,
                    borderRadius: '50%',
                    background: 'rgba(0,160,227,.08)',
                    filter: 'blur(60px)',
                    top: -90,
                    right: -90,
                    pointerEvents: 'none',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  left: 0, right: 0, top: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform .55s var(--ease)',
                }} className="proj-line" />

                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                  {p.tag}
                </div>
                <h3 style={{ fontSize: 36, fontWeight: 800, lineHeight:1.15, letterSpacing: '-.015em', marginBottom: 18, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.7, margin: '0 auto auto', maxWidth: 520 }}>
                  {p.text}
                </p>
                <span style={{ marginTop: 30, display: 'inline-flex', alignItems: 'center', gap: 9, fontWeight: 700, fontSize: 15, color: 'var(--primary)', transition: 'gap .35s var(--ease)' }} className="proj-visit">
                  {p.visitLabel} <span style={{ transition: 'transform .35s var(--ease)' }} className="proj-arr">→</span>
                </span>
              </a>
            </RevealBlock>
          ))}
        </div>
      </div>

      <style>{`
        .proj-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow:
              0 35px 80px rgba(15,73,137,.18);
        }
        .proj-card:hover .proj-arr{
          transform:translateX(6px) rotate(-180deg);
        }
        .proj-card:hover .proj-line { transform: scaleX(1) !important; }
        .proj-card:hover .proj-visit { gap: 15px !important; }
        @media (max-width: 980px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
        .proj-card::before{
            content:"";
            position:absolute;
            inset:0;
            border-radius:inherit;
            pointer-events:none;
            opacity:0;
            transition:opacity .45s var(--ease);

            background:
                radial-gradient(
                    circle at center,
                    rgba(0,160,227,.10) 0%,
                    rgba(15,73,137,.05) 65%,
                    transparent 75%
                );
        }

        .proj-card:hover::before{
            opacity:1;
        }
      `}</style>
    </section>
  )
}
