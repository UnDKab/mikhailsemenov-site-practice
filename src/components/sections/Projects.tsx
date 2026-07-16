'use client'

import { useEffect, useRef } from 'react'
import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

type ProjectsProps = {
  dict: Dictionary
}

export default function Projects({ dict }: ProjectsProps) {
  const { projects } = dict

  const cardsRef = useRef<HTMLAnchorElement[]>([])

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
  }, [projects.items])


  return (
    <section className="sec" id="projects">
      <div className="wrap">

        <RevealBlock className="sec-head">
          <p className="kicker">{projects.kicker}</p>
          <h2>{projects.title}</h2>
        </RevealBlock>


        <div className="proj-grid">

          {projects.items.map((p, i) => (

            <RevealBlock key={p.url} delay={i as 0|1}>

              <div className="proj-slide">

                <a
                  ref={(el) => {
                    if (el) {
                      cardsRef.current[i] = el
                    }
                  }}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-card"
                >

                  <div className="proj-glow"/>

                  <div className="proj-line"/>


                  <div className="proj-tag">
                    <span />
                    {p.tag}
                  </div>


                  <h3>
                    {p.title}
                  </h3>


                  <p>
                    {p.text}
                  </p>


                  <span className="proj-visit">
                    {p.visitLabel}
                    <span className="proj-arr">
                      →
                    </span>
                  </span>


                </a>


                <div className="mobile-swipe-hint">
                  ← ... →
                </div>

              </div>


            </RevealBlock>

          ))}

        </div>

      </div>


      <style>{`

        .proj-grid{

          display:grid;

          grid-template-columns:1fr 1fr;

          gap:28px;

        }


        .proj-slide{
          display:flex;
          flex-direction:column;
        }


        .proj-card{

          display:flex;

          flex-direction:column;

          align-items:center;

          text-align:center;

          position:relative;

          border:1px solid var(--border);

          border-radius:20px;

          padding:44px;

          background:rgba(255,255,255,.72);

          backdrop-filter:blur(18px);

          -webkit-backdrop-filter:blur(18px);

          overflow:hidden;

          min-height:340px;

          transition:
            transform .45s var(--ease),
            box-shadow .45s var(--ease);

          box-shadow:
            0 12px 40px rgba(15,73,137,.08);

          text-decoration:none;

          color:inherit;

        }


        .proj-glow{

          position:absolute;

          width:220px;

          height:220px;

          border-radius:50%;

          background:rgba(0,160,227,.08);

          filter:blur(60px);

          top:-90px;

          right:-90px;

          pointer-events:none;

        }


        .proj-line{

          position:absolute;

          left:0;

          right:0;

          top:0;

          height:4px;

          background:
            linear-gradient(
              90deg,
              var(--primary),
              var(--accent)
            );

          transform:scaleX(0);

          transform-origin:left;

          transition:
            transform .55s var(--ease);

        }


        .proj-tag{

          font-size:12px;

          font-weight:700;

          letter-spacing:.12em;

          text-transform:uppercase;

          color:var(--accent);

          margin-bottom:24px;

          display:flex;

          align-items:center;

          justify-content:center;

          gap:10px;

        }


        .proj-tag span{

          width:6px;

          height:6px;

          border-radius:50%;

          background:var(--accent);

        }


        .proj-card h3{

          font-size:36px;

          font-weight:800;

          line-height:1.15;

          letter-spacing:-.015em;

          margin-bottom:18px;

          font-family:
            var(--font-playfair),
            Georgia,
            serif;

        }


        .proj-card p{

          font-size:17px;

          color:var(--text2);

          line-height:1.7;

          margin:0 auto auto;

          max-width:520px;

        }


        .proj-visit{

          margin-top:30px;

          display:inline-flex;

          align-items:center;

          gap:9px;

          font-weight:700;

          font-size:15px;

          color:var(--primary);

          transition:
            gap .35s var(--ease);

        }


        .proj-arr{

          transition:
            transform .35s var(--ease);

        }


        .proj-card:hover{

          transform:
            translateY(-12px)
            scale(1.02);

          box-shadow:
            0 35px 80px rgba(15,73,137,.18);

        }


        .proj-card:hover .proj-arr{

          transform:
            translateX(6px)
            rotate(-180deg);

        }


        .proj-card:hover .proj-line{

          transform:scaleX(1);

        }


        .proj-card:hover .proj-visit{

          gap:15px;

        }


        .proj-card::before{

          content:"";

          position:absolute;

          inset:0;

          border-radius:inherit;

          pointer-events:none;

          opacity:0;

          transition:
            opacity .45s var(--ease);

          background:

            radial-gradient(
              circle at center,
              rgba(0,160,227,.10),
              rgba(15,73,137,.05) 65%,
              transparent 75%
            );

        }


        .proj-card:hover::before{

          opacity:1;

        }


        .mobile-swipe-hint{

          display:none;

        }



        @media(max-width:980px){


          .proj-grid{

            display:flex;

            overflow-x:auto;

            overflow-y:hidden;

            gap:18px;

            margin:0 -24px;

            padding:
              0 24px 12px;


            scroll-snap-type:x mandatory;

            -webkit-overflow-scrolling:touch;

            scrollbar-width:none;

          }


          .proj-grid::-webkit-scrollbar{

            display:none;

          }


          .proj-grid > div{

            flex:0 0 88%;

            scroll-snap-align:center;

          }


          .proj-slide{

            height:100%;

          }


          .proj-card{

            padding:34px;

            width:100%;

            flex:1;

          }


          .proj-card h3{

            font-size:26px;

          }


          .proj-card p{

            font-size:15px;

          }


          .proj-card:hover{

            transform:none;

          }


          .mobile-swipe-hint{

            display:flex;

            justify-content:center;

            align-items:center;

            margin-top:18px;

            color:var(--text3);

            font-size:13px;

            font-weight:600;

            letter-spacing:.08em;

            text-transform:uppercase;

            animation:hintPulse 2.2s ease-in-out infinite;

          }


        }



        @media(max-width:480px){


          .proj-grid > div{

            flex:0 0 92%;

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