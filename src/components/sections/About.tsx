import Image from 'next/image'
import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'

type AboutProps = {
  dict: Dictionary
}

export default function About({ dict }: AboutProps) {
  const { about } = dict

  return (
    <section
      className="sec about"
      id="about"
      style={{ background: 'var(--surface)' }}
    >
      <div className="wrap">
        <div
          className="about-layout"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 56,
            textAlign: 'center',
          }}
        >
          <RevealBlock
            className="portrait-wrap"
            style={{
              position: 'relative',
              maxWidth: 340,
              width: '100%',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: 28,
                overflow: 'hidden',
                boxShadow: '0 40px 80px -30px rgba(15,73,137,.4)',
                aspectRatio: '1133/1500',
              }}
            >
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
                width={340}
                height={510}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 18%',
                }}
                loading="lazy"
                quality={90}
                sizes="(max-width:768px) 92vw,340px"
              />
            </div>

            <div className="about-location">
              <span className="about-dot" />
              {about.location}
            </div>
          </RevealBlock>

          <RevealBlock
            delay={1}
            className="about-text-card"
            style={{
              maxWidth: 760,
              margin: '0 auto',
            }}
          >
            <p className="kicker solo" style={{ marginBottom: 24 }}>
              {about.kicker}
            </p>

            <p className="about-lead">
              {about.lead}
            </p>

            {about.paragraphs.map((text) => (
              <p
                key={text.slice(0, 24)}
                className="about-paragraph"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </RevealBlock>
        </div>
      </div>

      <style>{`
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

        .about-location{
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          bottom:-22px;

          display:flex;
          align-items:center;
          gap:10px;

          padding:13px 24px;

          border-radius:999px;

          background:rgba(255,255,255,.78);
          backdrop-filter:blur(12px);

          border:1px solid rgba(255,255,255,.8);

          box-shadow:0 18px 40px -18px rgba(15,73,137,.35);

          font-size:14px;
          font-weight:700;
          color:var(--primary);

          white-space:nowrap;
        }

        .about-dot{
          width:9px;
          height:9px;
          border-radius:50%;
          background:var(--accent);
          box-shadow:0 0 0 4px rgba(0,160,227,.18);
        }

        .about-text-card{
          background:rgba(255,255,255,.72);
          backdrop-filter:blur(16px);
          border:1px solid rgba(255,255,255,.8);
          border-radius:28px;
          padding:44px;
          box-shadow:0 24px 60px -28px rgba(15,73,137,.18);
        }

        .about-lead{
          font-family:var(--font-playfair), Georgia, serif;
          font-size:clamp(30px,3vw,38px);
          line-height:1.45;
          color:var(--text);
          font-weight:600;
          margin:8px 0 34px;
        }

        .about-paragraph{
          font-size:18px;
          line-height:1.9;
          color:var(--text2);
          margin-bottom:24px;
        }

        .about-paragraph:last-child{
          margin-bottom:0;
        }

        @media (max-width:768px){

          .about-layout{
            gap:70px !important;
          }

          .portrait-wrap{
            max-width:92vw !important;
          }

          .about-location{
            bottom:-18px;
            padding:10px 18px;
            font-size:13px;
          }

          .about-text-card{
            padding:30px 24px;
            border-radius:22px;
          }

          .about-lead{
            font-size:28px;
            line-height:1.35;
          }

          .about-paragraph{
            font-size:16px;
            line-height:1.8;
          }

        }

        @media (max-width:480px){

          .portrait-wrap{
            max-width:100% !important;
          }

          .about-lead{
            font-size:24px;
          }

          .about-text-card{
            padding:24px 20px;
          }

          .about-location{
            font-size:12px;
            padding:9px 16px;
          }

        }
      `}</style>
    </section>
  )
}