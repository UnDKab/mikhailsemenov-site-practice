import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

type PrinciplesProps = {
  dict: Dictionary
}

export default function Principles({ dict }: PrinciplesProps) {
  const { principles } = dict

  return (
    <section
      className="sec"
      id="philosophy"
      style={{
        background: '#fff',
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
          background: 'rgba(0,160,227,.07)',
          filter: 'blur(120px)',
          left: -220,
          top: 100,
          pointerEvents: 'none',
        }}
      />

      <div className="wrap">
        <RevealBlock className="sec-head">
          <p className="kicker">{principles.kicker}</p>
          <h2>{principles.title}</h2>
        </RevealBlock>

        <div className="principles-grid">
          {principles.items.map((p, i) => (
            <RevealBlock
              key={p.num}
              delay={(i as 0 | 1 | 2)}
            >
              <div className="principle-card">

                <div className="principle-glow"/>

                <div className="principle-number">
                  {p.num}
                </div>

                <h3>
                  {p.title}
                </h3>

                <p>
                  {p.text}
                </p>

              </div>
            </RevealBlock>
          ))}
        </div>
        <div className="mobile-swipe-hint">
        ← ... →
      </div>
      </div>

      <style>{`

        .principles-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:28px;
        }

        .principle-card{

          position:relative;
          overflow:hidden;

          background:rgba(255,255,255,.72);

          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);

          border:1px solid rgba(255,255,255,.7);

          border-radius:24px;

          padding:42px 34px;

          min-height:330px;

          transition:
            transform .45s var(--ease),
            box-shadow .45s var(--ease),
            border-color .45s var(--ease);

          box-shadow:0 12px 36px rgba(15,73,137,.08);

        }

        .principle-glow{

          position:absolute;

          width:220px;
          height:220px;

          left:50%;
          top:50%;

          transform:translate(-50%,-50%);

          border-radius:50%;

          background:
          radial-gradient(circle,
          rgba(0,160,227,.18),
          transparent 70%);

          filter:blur(32px);

          opacity:0;

          transition:.45s var(--ease);

          pointer-events:none;

        }

        .principle-number{

          position:absolute;

          right:22px;
          top:18px;

          font-size:84px;

          font-weight:800;

          line-height:1;

          color:rgba(15,73,137,.08);

          font-family:var(--font-playfair),Georgia,serif;

          transition:.45s var(--ease);

        }

        .principle-card h3{

          position:relative;
          z-index:2;

          font-size:30px;

          margin-bottom:22px;

          font-family:var(--font-playfair),Georgia,serif;

          line-height:1.2;

          letter-spacing:-.02em;

        }

        .principle-card p{

          position:relative;
          z-index:2;

          color:var(--text2);

          line-height:1.8;

          font-size:17px;

        }

        @media (hover:hover) and (pointer:fine){

        .principle-card:hover{

          transform:
            translateY(-10px)
            scale(1.02);

          border-color:var(--accent);

          box-shadow:
            0 34px 80px rgba(15,73,137,.18);

        }

        .principle-card:hover .principle-number{

          color:rgba(0,160,227,.22);

          transform:scale(1.06);

        }

        .principle-card:hover .principle-glow{

          opacity:1;

        }

        }

        @media (max-width:768px){

        .principles-grid{

          display:flex;

          overflow-x:auto;

          gap:18px;

          margin:0 -24px;
          padding:0 24px 12px;

          scroll-snap-type:x mandatory;

          -webkit-overflow-scrolling:touch;

          scrollbar-width:none;

        }

        .principles-grid::-webkit-scrollbar{
            display:none;
          }

          .principles-grid > div{

            flex:0 0 88%;

            scroll-snap-align:center;

            display:flex;

          }

          .principle-card{

            width:100%;

            min-height:auto;

            padding:34px 28px;

          }

          .principle-card h3{

            font-size:26px;

          }

          .principle-card p{

            font-size:15px;

          }

        }

        @media (max-width:480px){

          .principles-grid > div{

            flex:0 0 92%;

          }

        }
        .mobile-swipe-hint{
          display:none;
        }

        @media (max-width:768px){

          .mobile-swipe-hint{

            display:flex;

            justify-content:center;
            align-items:center;

            margin-top:20px;

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