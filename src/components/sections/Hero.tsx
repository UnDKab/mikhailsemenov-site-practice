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

            <div key={m.label} className="hero-stat-slide">

              <div className="hero-stat">

                <b
                  style={{
                    fontFamily:
                      'var(--font-playfair), Georgia, serif',
                    color:'var(--primary)',
                  }}
                >
                  {m.value}
                </b>


                <span
                  style={{
                    color:'var(--text3)',
                    fontSize:14,
                    fontWeight:600,
                    letterSpacing:'.05em',
                    textTransform:'uppercase',
                  }}
                >
                  {m.label}
                </span>


              </div>


              <div className="mobile-swipe-hint">
                ← ... →
              </div>

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

        @media (max-width:768px){

          .hero{

            min-height:100svh !important;

            padding:110px 0 70px !important;

          }


          .hero .wrap{

            padding-left:24px;

            padding-right:24px;

          }


          .hero-title{

            font-size:54px !important;

            line-height:1.08 !important;

            margin-bottom:24px !important;

          }


          .hero p{

            font-size:17px !important;

            line-height:1.75 !important;

          }


          .hero .reveal.d4{

            display:flex !important;

            flex-direction:column;

            gap:14px !important;

            align-items:stretch;

            margin-top:36px !important;

          }


          .hero .btn{

            width:100%;

            justify-content:center;

            padding:18px 24px;

            font-size:16px;

          }



          /* ОДНА КАРУСЕЛЬ ИЗ ТРЁХ КАРТОЧЕК */

          .hero-stats{

            margin-top:44px !important;


            display:flex !important;

            flex-direction:row !important;


            overflow-x:auto;


            gap:18px !important;


            margin-left:-24px !important;

            margin-right:-24px !important;


            padding:

              0 24px 12px;


            scroll-snap-type:x mandatory;


            -webkit-overflow-scrolling:touch;


            scrollbar-width:none;

          }


          .hero-stats::-webkit-scrollbar{

            display:none;

          }



          .hero-stat{

            flex:0 0 88%;


            scroll-snap-align:center;


            width:auto !important;


            padding:28px;


            border-radius:20px;

          }



          .hero-stat b{

            font-size:40px;

            margin-bottom:8px;

          }



          .mobile-swipe-hint{

            display:flex;


            justify-content:center;


            margin-top:14px;


            color:var(--text3);


            font-size:13px;


            font-weight:600;


            letter-spacing:.08em;


            text-transform:uppercase;


            animation:hintPulse 2.2s ease-in-out infinite;

          }

        }



        @media(max-width:480px){


          .hero{

            padding-top:100px !important;

          }


          .hero-title{

            font-size:42px !important;

          }


          .hero p{

            font-size:16px !important;

          }


          .hero-stat{

            flex-basis:92%;

            padding:24px;

          }


          .hero-stat b{

            font-size:34px;

          }

        }



        @keyframes hintPulse{

          0%,100%{

            opacity:.45;

            transform:translateX(0);

          }


          50%{

            opacity:1;

            transform:translateX(4px);

          }

        }


        `}</style>
    </header>
  )
}
