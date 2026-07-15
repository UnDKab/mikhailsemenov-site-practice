import Image from 'next/image'
import type { Dictionary } from '@/i18n/types'

type FooterProps = {
  dict: Dictionary
}

export default function Footer({ dict }: FooterProps) {
  const { footer, nav } = dict

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg,#081222 0%, #07101f 100%)',
        color: '#fff',
        padding: '90px 0 36px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
    <div
      style={{
        position: 'absolute',
        top: -180,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 700,
        height: 700,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(0,160,227,.18) 0%, rgba(0,160,227,.08) 35%, transparent 75%)',
        filter: 'blur(70px)',
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
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 50,
          flexWrap: 'wrap',
          paddingBottom: 54,
          borderBottom:'1px solid rgba(255,255,255,.08)',
        }}>
          <div style={{ maxWidth: 380 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <Image src="/assets/logo-white.png" alt={footer.logoAlt} width={38} height={38} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 23, fontWeight: 700 }}>{nav.name}</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 15, lineHeight: 1.7 }}>
              {footer.tagline}
            </p>
          </div>

          <div style={{ display: 'flex', gap: 70, flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>{footer.sections}</h4>
              {footer.links.map((l) => (
                <a key={l.href} href={l.href} className="foot-link">{l.label}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>{footer.projects}</h4>
              <a href="https://ibtcom.ru" target="_blank" rel="noopener" className="foot-link">KIBT — ibtcom.ru</a>
              <a href="https://npptec.ru" target="_blank" rel="noopener" className="foot-link">NPP TEC — npptec.ru</a>
            </div>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>{footer.contact}</h4>
              <a href="mailto:semyonovmn@icloud.com" className="foot-link">semyonovmn@icloud.com</a>
              <a href="https://t.me/SemyonovMN" target="_blank" rel="noopener" className="foot-link">Telegram @SemyonovMN</a>
              <a href="tel:+79138130532" className="foot-link">+7 (913) 813-05-32</a>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, paddingTop: 30, flexWrap: 'wrap' }}>
          <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 13.5 }}>
            {footer.copyright}
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="https://t.me/SemyonovMN" target="_blank" rel="noopener" aria-label="Telegram" className="soc-icon">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M21 4L3 11l5 2 2 6 3-4 5 4 3-15z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
            </a>
            <a href="https://x.com/semenovmn" target="_blank" rel="noopener" aria-label="X / Twitter" className="soc-icon">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
            </a>
            <a href="mailto:semyonovmn@icloud.com" aria-label="Email" className="soc-icon">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .foot-link{
            display:block;
            color:rgba(255,255,255,.68);
            font-size:15px;
            margin-bottom:14px;
            transition:.35s var(--ease);
            position:relative;
            width:max-content;
        }

        .foot-link::after{
            content:"";
            position:absolute;
            left:0;
            bottom:-3px;
            width:0;
            height:1px;
            background:var(--accent);
            transition:width .35s var(--ease);
        }

        .foot-link:hover{
            color:#fff;
            transform:translateX(5px);
        }

        .foot-link:hover::after{
            width:100%;
        }
        .soc-icon{
            width:46px;
            height:46px;
            border-radius:50%;
            border:1px solid rgba(255,255,255,.12);
            background:rgba(255,255,255,.03);
            backdrop-filter:blur(10px);
            display:flex;
            align-items:center;
            justify-content:center;
            color:rgba(255,255,255,.75);
            transition:.4s var(--ease);
        }
        .soc-icon:hover{
            background:var(--accent);
            border-color:var(--accent);
            color:#fff;
            transform:translateY(-5px) scale(1.08);
            box-shadow:0 12px 30px rgba(0,160,227,.35);
        }
      `}</style>
    </footer>
  )
}
