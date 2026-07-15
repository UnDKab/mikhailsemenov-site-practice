import type { Dictionary } from '@/i18n/types'

type HeroProps = {
  dict: Dictionary
}

export default function Hero({ dict }: HeroProps) {
  const { hero } = dict

  return (
    <header
      id="top"
      className="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '120px 0 80px',
      }}
    >
      {/* Декоративные орбы */}
      <div className="hero-orb one" />
      <div className="hero-orb two" />

      <div
        className="wrap"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: 950,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 90,
              height: 4,
              borderRadius: 999,
              background:
                'linear-gradient(90deg,var(--primary),var(--accent))',
              margin: '0 auto 30px',
            }}
          />

          <p className="kicker solo reveal in d1" style={{ marginBottom: 24 }}>
            {hero.kicker}
          </p>

          <h1
            className="hero-title reveal in d2"
            style={{
              fontSize: 'clamp(46px,7vw,92px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              marginBottom: 30,
              fontFamily: 'var(--font-playfair), Georgia, serif',
            }}
          >
            {hero.title1}
            <br />

            <em
              style={{
                fontStyle: 'normal',
                fontWeight: 900,
              }}
            >
              {hero.title2}
            </em>
          </h1>

          <p
            className="reveal in d3"
            style={{
              fontSize: 'clamp(18px,2vw,22px)',
              color: 'var(--text2)',
              maxWidth: 720,
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            {hero.subtitle}
          </p>

          <div
            className="reveal in d4"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 18,
              flexWrap: 'wrap',
              marginTop: 42,
            }}
          >
            <a href="#projects" className="btn btn-primary">
              {hero.ctaProjects}
              <span className="arr">→</span>
            </a>

            <a href="#contact" className="btn btn-ghost">
              {hero.ctaContact}
            </a>
          </div>

          <div className="hero-stats reveal in d5">
            {hero.meta.map((m) => (
              <div key={m.label} className="hero-stat">
                <b
                  style={{
                    fontFamily:
                      'var(--font-playfair), Georgia, serif',
                    color: 'var(--primary)',
                  }}
                >
                  {m.value}
                </b>

                <span
                  style={{
                    color: 'var(--text3)',
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text3)',
          fontSize: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          animation: 'floatOrb 2.5s ease-in-out infinite',
          zIndex: 2,
        }}
      >
      </a>

      <style>{`
        @media (max-width: 768px){

          .hero{
            min-height:auto!important;
            padding:120px 0 90px!important;
          }

          .hero-stats{
            gap:16px;
          }

          .hero-stat{
            width:100%;
          }

        }

        @media (max-width:480px){

          .hero-title{
            font-size:42px!important;
          }

        }
      `}</style>
    </header>
  )
}
