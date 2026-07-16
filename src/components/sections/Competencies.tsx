import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

const icons = [
  (
    <svg key="1" viewBox="0 0 24 24" fill="none" width="34" height="34">
      <path d="M3 12h6l2-7 2 14 2-7h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg key="2" viewBox="0 0 24 24" fill="none" width="34" height="34">
      <rect x="3" y="3" width="7" height="7" rx="1.4" stroke="var(--primary)" strokeWidth="1.6"/>
      <rect x="14" y="3" width="7" height="7" rx="1.4" stroke="var(--accent)" strokeWidth="1.6"/>
      <rect x="3" y="14" width="7" height="7" rx="1.4" stroke="var(--accent)" strokeWidth="1.6"/>
      <rect x="14" y="14" width="7" height="7" rx="1.4" stroke="var(--primary)" strokeWidth="1.6"/>
    </svg>
  ),
  (
    <svg key="3" viewBox="0 0 24 24" fill="none" width="34" height="34">
      <circle cx="7" cy="8" r="3" stroke="var(--primary)" strokeWidth="1.6"/>
      <circle cx="17" cy="8" r="3" stroke="var(--accent)" strokeWidth="1.6"/>
      <path d="M2 20c0-2.8 2.2-5 5-5s5 2.2 5 5M12 20c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg key="4" viewBox="0 0 24 24" fill="none" width="34" height="34">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3.2" stroke="var(--accent)" strokeWidth="1.6"/>
    </svg>
  ),
  (
    <svg key="5" viewBox="0 0 24 24" fill="none" width="34" height="34">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 21h8M12 17v4" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7 9l2.5 2.5L7 14" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg key="6" viewBox="0 0 24 24" fill="none" width="34" height="34">
      <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
]

type CompetenciesProps = {
  dict: Dictionary
}

export default function Competencies({ dict }: CompetenciesProps) {
  const { competencies } = dict

  return (
    <section className="sec skills" id="skills" style={{ background: 'var(--surface)' }}>
      <div className="wrap">
        <RevealBlock className="sec-head">
          <p className="kicker">{competencies.kicker}</p>
          <h2>{competencies.title}</h2>
        </RevealBlock>

        <div className="comp-list">
          <div className="mobile-swipe-hint">
            ← Листайте карточки →
          </div>
          {competencies.cards.map((card, i) => (
            <RevealBlock key={card.idx} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className={`comp-card${card.feature ? ' comp-card--feature' : ''}`}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 24,
                  padding: 42,

                  background: card.feature
                    ? 'linear-gradient(145deg,#0F4989,#1365B9,#00A0E3)'
                    : 'rgba(255,255,255,.72)',

                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',

                  border: card.feature
                    ? 'none'
                    : '1px solid rgba(255,255,255,.7)',

                  boxShadow: '0 12px 40px rgba(15,73,137,.08)',

                  color: card.feature ? '#fff' : 'inherit',

                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div className="comp-line" />

                <div className="comp-glow" />

                <div
                  className="icon-box"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: card.feature
                      ? 'rgba(255,255,255,.12)'
                      : 'rgba(0,160,227,.08)',

                    marginBottom: 18,
                  }}
                >
                  {icons[i]}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '.16em',
                    color: card.feature ? 'rgba(255,255,255,.75)' : 'var(--text3)',
                    marginBottom: 12,
                  }}
                >
                  {card.idx}
                </div>

                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-.02em',
                    marginBottom: 14,
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    color: card.feature ? '#fff' : 'var(--text)',
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    maxWidth: 470,
                    color: card.feature
                      ? 'rgba(255,255,255,.82)'
                      : 'var(--text2)',
                  }}
                >
                  {card.text}
                </p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>

      <style>{`
        .comp-list{
          display:flex;
          flex-direction:column;
          gap:24px;
          max-width:700px;
          margin:0 auto;
        }

        .comp-card{
          transition:
            transform .45s var(--ease),
            box-shadow .45s var(--ease),
            border-color .45s var(--ease);
        }

        .comp-line{
          position:absolute;
          top:0;
          left:0;
          right:0;
          height:4px;
          background:linear-gradient(90deg,var(--primary),var(--accent));
          opacity:.25;
          transition:.4s var(--ease);
        }

        .comp-glow{
          position:absolute;
          width:240px;
          height:240px;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          border-radius:50%;
          background:
            radial-gradient(circle,
            rgba(0,160,227,.16),
            transparent 70%);
          filter:blur(35px);
          opacity:0;
          transition:.45s var(--ease);
          pointer-events:none;
        }

        .icon-box svg{
          transition:transform .45s var(--ease);
        }

        .comp-card:hover{
          transform:translateY(-10px) scale(1.015);
          box-shadow:0 34px 80px rgba(15,73,137,.18)!important;
          border-color:var(--accent)!important;
        }

        .comp-card:hover .comp-glow{
          opacity:1;
        }

        .comp-card:hover .comp-line{
          opacity:1;
          height:5px;
        }

        .comp-card:hover .icon-box svg{
          transform:scale(1.15) rotate(-6deg);
        }

        .comp-card--feature:hover{
          box-shadow:0 40px 90px rgba(15,73,137,.35)!important;
        }

        @media (max-width:768px){

          .comp-list{
            display:flex;
            flex-direction:row;
            overflow-x:auto;
            gap:18px;
            max-width:none;

            margin:0 -24px;
            padding:0 24px 12px;

            scroll-snap-type:x mandatory;
            -webkit-overflow-scrolling:touch;

            scrollbar-width:none;
          }

          .comp-list::-webkit-scrollbar{
            display:none;
          }

          .comp-list > div{
            flex:0 0 88%;
            scroll-snap-align:center;
          }

          .comp-card{
            padding:34px !important;
            min-height:100%;
          }

          .comp-card h3{
            font-size:22px !important;
          }

          .comp-card p{
            font-size:15px !important;
          }

        }

        @media (max-width:480px){

          .comp-list > div{
            flex:0 0 92%;
          }

        }
        .mobile-swipe-hint{
          display:none;
        }

        @media (max-width:768px){

          .mobile-swipe-hint{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:10px;

            margin-top:18px;

            color:var(--text3);
            font-size:13px;
            font-weight:600;
            letter-spacing:.08em;
            text-transform:uppercase;

            animation:hintPulse 2.2s ease-in-out infinite;
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
    </section>
  )
}