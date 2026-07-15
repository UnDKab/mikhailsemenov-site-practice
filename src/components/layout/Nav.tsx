'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Dictionary } from '@/i18n/types'
import type { Locale } from '@/i18n/config'

type NavProps = {
  dict: Dictionary
  locale: Locale
}

export default function Nav({ dict, locale }: NavProps) {
  const { nav } = dict
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const otherLocale = locale === 'ru' ? 'en' : 'ru'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav
        aria-label={nav.ariaLabel}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          transition: 'background .45s var(--ease), box-shadow .45s var(--ease), padding .45s var(--ease), border-color .45s var(--ease)',
          borderBottom: scrolled ? '1px solid rgba(209,228,250,.7)' : '1px solid transparent',
          background: scrolled
            ? 'rgba(255,255,255,.97)'
            : 'rgba(255,255,255,.82)',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
          boxShadow: scrolled
            ? '0 10px 35px -25px rgba(15,73,137,.18)'
            : 'none',
        }}
      >
        <div
          className="wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: scrolled ? 15 : 22,
            paddingBottom: scrolled ? 15 : 22,
            transition: 'padding .45s var(--ease)',
          }}
        >
          <a
            href="#top"
            aria-label={nav.homeAria}
            className="nav-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 13,
              transition: '.35s var(--ease)',
            }}
          >
            <Image src="/assets/logo-navy.png" alt={nav.logoAlt} width={34} height={34} style={{ objectFit: 'contain' }} priority />
            <span>
              <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, fontSize: 19, letterSpacing: '-.01em', display: 'block', whiteSpace: 'nowrap' }}>
                {nav.name}
              </span>
              <span style={{ fontFamily: 'var(--font-manrope), sans-serif', fontSize: 10.5, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text3)', display: 'block', marginTop: -2 }}>
                {nav.role}
              </span>
            </span>
          </a>

          <ul style={{ display: 'flex', alignItems: 'center', gap: 30, listStyle: 'none' }} className="nav-links-desktop">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'var(--text2)',
                    position: 'relative',
                    transition: 'color .3s',
                    whiteSpace: 'nowrap',
                  }}
                  className="nav-link"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <a
              href={`/${otherLocale}/`}
              className="nav-lang"
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '.08em',
                color: 'var(--text3)',
                transition: 'color .3s',
              }}
              aria-label={otherLocale === 'en' ? 'Switch to English' : 'Переключить на русский'}
            >
              {otherLocale.toUpperCase()}
            </a>
            <a
              href="#contact"
              className="btn btn-primary nav-cta-btn"
              style={{
                padding: '13px 26px',
                fontSize: 14,
                color: '#fff',
              }}
            >
              {nav.write} <span className="arr">→</span>
            </a>
            <button
              className={`burger${mobileOpen ? ' open' : ''}`}
              onClick={toggleMenu}
              aria-label={nav.menu}
              aria-expanded={mobileOpen}
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: 5,
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'rgba(15,73,137,.05)',
                transition: '.3s var(--ease)',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <span style={{ width: 24, height: 2.5, background: 'var(--primary)', borderRadius: 2, transition: '.35s var(--ease)', transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ width: 24, height: 2.5, background: 'var(--primary)', borderRadius: 2, transition: '.35s var(--ease)', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ width: 24, height: 2.5, background: 'var(--primary)', borderRadius: 2, transition: '.35s var(--ease)', transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 75,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '110px 32px 36px',
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? 'auto' : 'none',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: '.45s var(--ease)',
      }}
    >
      <div>
        <div
          style={{
            marginBottom: 42,
            paddingBottom: 24,
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 28,
              fontWeight: 700,
              color: 'var(--primary)',
            }}
          >
            {nav.name}
          </div>

          <div
            style={{
              marginTop: 6,
              fontSize: 12,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: 'var(--text3)',
            }}
          >
            {nav.role}
          </div>
        </div>

        {nav.links.map((l, index) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            className="mobile-link"
            style={{
              display: 'block',
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 34,
              fontWeight: 600,
              color: 'var(--text)',
              padding: '18px 0',
              borderBottom: '1px solid var(--border)',
              transition: '.35s var(--ease)',
              animation: mobileOpen
                ? `fadeIn .45s ease ${index * 0.08}s forwards`
                : 'none',
              opacity: 0,
            }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <a
          href={`/${otherLocale}/`}
          onClick={closeMenu}
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid var(--border)',
            borderRadius: 999,
            padding: '14px',
            fontWeight: 700,
            color: 'var(--primary)',
          }}
        >
          {otherLocale.toUpperCase()}
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
          className="btn btn-primary"
          style={{
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {nav.write}
          <span className="arr">→</span>
        </a>
      </div>
    </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-lang { display: none !important; }
          .burger { display: flex !important; }
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width .35s var(--ease);
        }
        .nav-link:hover { color: var(--primary) !important; }
        .nav-link:hover::after { width: 100%; }
        .nav-lang{
          display:inline-block;
          transition:
            color .3s var(--ease),
            transform .25s var(--ease);
          transform-origin:center;
        }

        .nav-lang:hover{
          color: var(--primary) !important;
          transform: scale(1.05);
        }
        .nav-cta-btn,
        .nav-cta-btn:visited{
          color:#fff !important;
        }

        .nav-cta-btn:hover{
          color:#fff !important;
        }

        .nav-cta-btn:hover .arr{
          color:#fff !important;
        }
        .mobile-link:hover{
          color:var(--primary);
          padding-left:12px;
        }

        @keyframes fadeIn{

          from{
            opacity:0;
            transform:translateX(24px);
          }

          to{
            opacity:1;
            transform:none;
          }

        }
      `}</style>
    </>
  )
}
