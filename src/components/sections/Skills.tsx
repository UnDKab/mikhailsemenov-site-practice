import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

type SkillsProps = {
  dict: Dictionary
}

export default function Skills({ dict }: SkillsProps) {
  const { skills } = dict

  return (
    <section
      className="sec"
      id="navyki"
      style={{
        background: 'var(--surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'rgba(0,160,227,.08)',
          filter: 'blur(120px)',
          right: -220,
          top: 120,
          pointerEvents: 'none',
        }}
      />

      <div className="wrap">
        <RevealBlock className="sec-head">
          <p className="kicker">{skills.kicker}</p>

          <h2>{skills.title}</h2>

          <p
            style={{
              fontSize: 18,
              color: 'var(--text2)',
              lineHeight: 1.7,
              maxWidth: 620,
              margin: '20px auto 0',
            }}
          >
            {skills.subtitle}
          </p>
        </RevealBlock>

        <RevealBlock>
          <ul className="skill-list">
            {skills.items.map((s) => (
              <li key={s.name} className="skill-item">
                <div className="skill-glow" />

                <span className="skill-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span style={{ position: 'relative', zIndex: 2 }}>
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-cert">{s.cert}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="skills-mobile-tip">
            ← ... →
          </div>
        </RevealBlock>
      </div>

      <style>{`
        .skill-item{
          position:relative;
          overflow:hidden;

          background:rgba(255,255,255,.72);
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);

          border:1px solid rgba(255,255,255,.7);
          border-radius:18px;

          transition:
            transform .45s var(--ease),
            box-shadow .45s var(--ease),
            border-color .45s var(--ease);
        }

        .skill-glow{
          position:absolute;
          width:180px;
          height:180px;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          border-radius:50%;

          background:
            radial-gradient(circle,
            rgba(0,160,227,.16),
            transparent 70%);

          filter:blur(30px);

          opacity:0;

          transition:.45s var(--ease);

          pointer-events:none;
        }

        .skill-item:hover{
          transform:
            translateY(-8px)
            scale(1.02);

          border-color:var(--accent);

          box-shadow:
            0 28px 70px rgba(15,73,137,.18);
        }

        .skill-item:hover .skill-glow{
          opacity:1;
        }

        .skill-item:hover .skill-mark{
          transform:rotate(-10deg) scale(1.15);
          background:var(--primary);
          color:white;
        }

        .skill-mark{
          transition:
            transform .4s var(--ease),
            background .4s var(--ease),
            color .4s var(--ease);
        }

        .skill-name{
          transition:color .35s var(--ease);
        }

        .skill-item:hover .skill-name{
          color:var(--primary);
        }

        .skills-mobile-tip{
          display:none;
        }

        @media (max-width:768px){

          .skill-list{
            display:flex !important;
            gap:18px;

            overflow-x:auto;
            overflow-y:hidden;

            scroll-snap-type:x mandatory;
            -webkit-overflow-scrolling:touch;

            padding:8px 4px 12px;
          }

          .skill-list::-webkit-scrollbar{
            display:none;
          }

          .skill-item{
            flex:0 0 88%;
            scroll-snap-align:center;
            min-height:130px;
          }

          .skill-item:hover{
            transform:none;
          }

          .skills-mobile-tip{
            display:block;
            margin-top:18px;

            text-align:center;

            color:var(--text3);

            font-size:13px;

            letter-spacing:.08em;

            text-transform:uppercase;
          }

        }

        @media (max-width:480px){

          .skill-item{
            flex:0 0 92%;
            padding:22px 18px;
          }

          .skill-name{
            font-size:17px;
          }

          .skill-cert{
            font-size:13px;
          }

        }
      `}</style>
    </section>
  )
}