'use client'

import { useEffect, useRef } from 'react'
import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

type StatsProps = {
  dict: Dictionary
}

export default function Stats({ dict }: StatsProps) {
  const { stats } = dict

  const cardsRef = useRef<HTMLDivElement[]>([])


  useEffect(() => {
    const updateCardsHeight = () => {
      if (window.innerWidth > 980) return

      const cards = cardsRef.current.filter(Boolean)

      if (!cards.length) return

      cards.forEach(card => {
        card.style.height = 'auto'
      })

      const maxHeight = Math.max(
        ...cards.map(card => card.offsetHeight)
      )

      cards.forEach(card => {
        card.style.height = `${maxHeight}px`
      })
    }


    updateCardsHeight()

    window.addEventListener('resize', updateCardsHeight)

    return () => {
      window.removeEventListener('resize', updateCardsHeight)
    }

  }, [stats.items])


  return (
    <section
      className="stats-section"
      style={{
        padding:'120px 0',
        background:'linear-gradient(135deg,#0F4989,#0B3868)',
        color:'#fff',
        position:'relative',
        overflow:'hidden',
      }}
    >

      <div
        style={{
          position:'absolute',
          inset:0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize:'60px 60px',
          opacity:.6,
          maskImage:
            'radial-gradient(circle at center,#000 45%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at center,#000 45%,transparent 100%)',
        }}
      />


      <div
        style={{
          position:'absolute',
          width:600,
          height:600,
          borderRadius:'50%',
          background:'rgba(0,160,227,.18)',
          filter:'blur(130px)',
          left:'50%',
          top:'50%',
          transform:'translate(-50%,-50%)',
          pointerEvents:'none',
        }}
      />


      <div
        className="wrap"
        style={{
          position:'relative',
          zIndex:2,
        }}
      >

        <div className="stats-grid">

          {stats.items.map((s,i)=>(

            <RevealBlock key={s.label} delay={i as 0|1|2}>

              <div className="stat-slide">

                <div
                  ref={(el)=>{
                    if(el){
                      cardsRef.current[i]=el
                    }
                  }}
                  className="stat-card"
                >

                  <div className="stat-glow"/>


                  <div className="stat-number">
                    {s.value}
                  </div>


                  <div className="stat-label">
                    {s.label}
                  </div>


                </div>


                <div className="mobile-swipe-hint">
                  ← ... →
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


        .stat-slide{
          display:flex;
          flex-direction:column;
        }


        .stat-card{

          position:relative;

          overflow:hidden;

          padding:42px 30px;

          border-radius:24px;

          background:rgba(255,255,255,.08);

          backdrop-filter:blur(18px);

          -webkit-backdrop-filter:blur(18px);

          border:
            1px solid rgba(255,255,255,.12);

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

          transform:
            translate(-50%,-50%);

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

          font-family:
            var(--font-playfair),
            Georgia,
            serif;


          font-size:
            clamp(60px,7vw,90px);


          font-weight:800;

          line-height:1;

          letter-spacing:-.03em;

          transition:
            color .4s var(--ease);

        }


        .stat-label{

          position:relative;

          z-index:2;

          margin-top:18px;

          font-size:15px;

          color:
            rgba(255,255,255,.78);

          line-height:1.7;

          max-width:220px;

          margin-left:auto;

          margin-right:auto;

        }


        .stat-card:hover{

          transform:
            translateY(-10px)
            scale(1.03);

          border-color:
            rgba(255,255,255,.22);

          box-shadow:
            0 30px 70px rgba(0,0,0,.25);

        }


        .stat-card:hover .stat-glow{

          opacity:1;

        }


        .stat-card:hover .stat-number{

          color:#7FDBFF;

        }



        .mobile-swipe-hint{

          display:none;

        }



        @media(max-width:980px){


          .stats-grid{

            display:flex;

            overflow-x:auto;

            overflow-y:hidden;

            gap:18px;

            margin:
              0 -24px;

            padding:
              0 24px 12px;


            scroll-snap-type:
              x mandatory;


            -webkit-overflow-scrolling:
              touch;


            scrollbar-width:none;

          }



          .stats-grid::-webkit-scrollbar{

            display:none;

          }



          .stats-grid > div{

            flex:
              0 0 88%;


            scroll-snap-align:center;

          }



          .stat-card{

            width:100%;

            flex:1;

            padding:34px 26px;

          }


          .stat-number{

            font-size:64px;

          }



          .stat-card:hover{

            transform:none;

          }



          .mobile-swipe-hint{

            display:flex;

            justify-content:center;

            align-items:center;

            margin-top:18px;

            color:
              rgba(255,255,255,.55);


            font-size:13px;

            font-weight:600;

            letter-spacing:.08em;

            text-transform:uppercase;


            animation:
              hintPulse 2.2s ease-in-out infinite;

          }


        }



        @media(max-width:480px){


          .stats-grid > div{

            flex:
              0 0 92%;

          }


        }



        @keyframes hintPulse{


          0%,100%{

            opacity:.45;

            transform:
              translateX(0);

          }


          50%{

            opacity:1;

            transform:
              translateX(4px);

          }


        }


      `}</style>


    </section>
  )
}