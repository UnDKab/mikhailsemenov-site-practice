import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

type StatsProps = {
  dict: Dictionary
}

export default function Stats({ dict }: StatsProps) {
  const { stats } = dict

  return (
    <section
      className="stats-section"
      style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg,#0F4989,#0B3868)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Сетка */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: .6,
          maskImage:
            'radial-gradient(circle at center,#000 45%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at center,#000 45%,transparent 100%)',
        }}
      />

      {/* Свечение */}
      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'rgba(0,160,227,.18)',
          filter: 'blur(130px)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="wrap"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="stats-grid">
          {stats.items.map((s, i) => (
            <RevealBlock key={s.label} delay={i as 0 | 1 | 2}>
              <div className="stat-card">
                <div className="stat-glow" />

                <div className="stat-number">
                  {s.value}
                </div>

                <div className="stat-label">
                  {s.label}
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid{
            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:28px;
        }

        .stat-card{
            position:relative;
            overflow:hidden;

            padding:42px 30px;

            border-radius:24px;

            background:rgba(255,255,255,.08);

            backdrop-filter:blur(18px);
            -webkit-backdrop-filter:blur(18px);

            border:1px solid rgba(255,255,255,.12);

            text-align:center;

            transition:
                transform .45s var(--ease),
                box-shadow .45s var(--ease),
                border-color .45s var(--ease);
        }

        .stat-glow{
            position:absolute;
            width:240px;
            height:240px;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            border-radius:50%;

            background:
                radial-gradient(circle,
                rgba(0,160,227,.22),
                transparent 70%);

            filter:blur(35px);

            opacity:0;

            transition:.45s var(--ease);
        }

        .stat-number{
            position:relative;
            z-index:2;

            font-family:var(--font-playfair),Georgia,serif;

            font-size:clamp(60px,7vw,90px);

            font-weight:800;

            line-height:1;

            letter-spacing:-.03em;
        }

        .stat-label{
            position:relative;
            z-index:2;

            margin-top:18px;

            font-size:15px;

            color:rgba(255,255,255,.78);

            line-height:1.7;

            max-width:220px;

            margin-left:auto;
            margin-right:auto;
        }

        .stat-card:hover{
            transform:
                translateY(-10px)
                scale(1.03);

            border-color:rgba(255,255,255,.22);

            box-shadow:
                0 30px 70px rgba(0,0,0,.25);
        }

        .stat-card:hover .stat-glow{
            opacity:1;
        }

        .stat-card:hover .stat-number{
            color:#7FDBFF;
        }

        .stat-number{
            transition:color .4s var(--ease);
        }

        @media (max-width:980px){
            .stats-grid{
                grid-template-columns:1fr;
            }
        }

        @media (max-width:768px){
            .stats-section{
                padding:90px 0;
            }
        }
      `}</style>
    </section>
  )
}