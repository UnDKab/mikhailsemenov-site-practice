import Image from 'next/image'
import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

type AboutProps = {
  dict: Dictionary
}

export default function About({ dict }: AboutProps) {
  const { about } = dict

  return (
    <section className="sec about" id="about" style={{ background: 'var(--surface)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 46, textAlign: 'center' }}>
          <RevealBlock className="portrait-wrap" style={{ position: 'relative', maxWidth: 300, margin: '0 auto' } as React.CSSProperties}>
            <div style={{
              position: 'relative',
              borderRadius: 28,
              overflow: 'hidden',
              boxShadow: '0 40px 80px -30px rgba(15,73,137,.4)',
              aspectRatio: '1133/1500',
            }}>
              <div
                style={{
                  position: 'absolute',
                  width: 240,
                  height: 240,
                  borderRadius: '50%',
                  background: 'rgba(0,160,227,.15)',
                  filter: 'blur(60px)',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                  zIndex: -1,
                }}
              />
              <Image
                className="portrait-card"
                src="/assets/portrait.jpg"
                alt={about.portraitAlt}
                width={300}
                height={450}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 18%' }}
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 280px, 300px"
              />
            </div>
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: -20,
              background:'rgba(255,255,255,.72)',
              backdropFilter:'blur(18px)',
              border:'1px solid rgba(255,255,255,.7)',
              borderRadius: 100,
              padding: '13px 22px',
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              boxShadow: '0 18px 40px -18px rgba(15,73,137,.35)',
              fontSize: 14,
              fontWeight: 700,
              color: 'var(--primary)',
              whiteSpace: 'nowrap',
            }}>
              <span style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 0 4px rgba(0,160,227,.18)',
                display: 'inline-block',
                flexShrink: 0,
              }} />
              {about.location}
            </div>
          </RevealBlock>

          <RevealBlock delay={1} style={{ maxWidth: 720, margin: '0 auto' } as React.CSSProperties}>
            <p className="kicker solo" style={{ marginBottom: 24 }}>{about.kicker}</p>
            <p style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize:'clamp(28px,3vw,36px)',
              lineHeight: 1.45,
              color: 'var(--text)',
              fontWeight: 600,
              margin: '8px 0 30px',
            }}>
              {about.lead}
            </p>
            {about.paragraphs.map((text) => (
              <p
                key={text.slice(0, 24)}
                style={{ fontSize:18, maxWidth:700, lineHeight: 1.85, color: 'var(--text2)', marginBottom: 26 }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </RevealBlock>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .portrait-wrap { max-width: 420px !important; }
        }
        .about{
            position:relative;
            overflow:hidden;
        }

        .about::before{
            content:"";
            position:absolute;
            width:520px;
            height:520px;
            border-radius:50%;
            background:rgba(0,160,227,.08);
            filter:blur(110px);

            left:-180px;
            top:80px;

            pointer-events:none;
        }
        .portrait-card{
            transition:
                transform .5s var(--ease),
                box-shadow .5s var(--ease);
        }

        .portrait-card:hover{
            transform:scale(1.05);
            box-shadow:0 50px 90px -25px rgba(15,73,137,.28);
        }
      `}</style>
    </section>
  )
}
