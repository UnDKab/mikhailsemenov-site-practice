'use client'

import { useState, FormEvent } from 'react'
import RevealBlock from '@/components/ui/RevealBlock'
import type { Dictionary } from '@/i18n/types'
import type { Locale } from '@/i18n/config'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const RECIPIENTS = ['semyonovmn@icloud.com', 'merenokden@gmail.com'] as const

type ContactProps = {
  dict: Dictionary
  locale: Locale
}

function fillEmailTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  )
}

async function sendToFormSubmit(email: string, payload: Record<string, string>) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error(`Failed for ${email}`)
  const data = await res.json()
  if (data?.success !== 'true' && data?.success !== true) throw new Error(`Rejected for ${email}`)
}

export default function Contact({ dict, locale }: ContactProps) {
  const { contact } = dict
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const appeal = (form.elements.namedItem('appeal') as HTMLTextAreaElement).value.trim()
    if (!name || !phone || !appeal) return

    setState('submitting')

    const subject = contact.form.emailSubject.replace('{name}', name)
    const date = new Intl.DateTimeFormat(locale === 'ru' ? 'ru-RU' : 'en-GB', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date())
    const page = `${window.location.origin}/${locale}/#contact`
    const emailText = fillEmailTemplate(contact.form.emailBody, { name, phone, appeal, date, page })
    const payload = {
      name,
      phone,
      appeal,
      message: emailText,
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
    }

    try {
      await Promise.all(RECIPIENTS.map((email) => sendToFormSubmit(email, payload)))
      setState('success')
      form.reset()
    } catch {
      const body = encodeURIComponent(emailText)
      const subj = encodeURIComponent(subject)
      window.location.href = `mailto:${RECIPIENTS.join(',')}?subject=${subj}&body=${body}`
      setState('success')
    }
  }

  const contactLinks = [
    {
      href: 'mailto:semyonovmn@icloud.com',
      label: 'Email',
      value: 'semyonovmn@icloud.com',
      icon: <svg viewBox="0 0 24 24" fill="none" width="21" height="21"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
    },
    {
      href: 'https://t.me/SemyonovMN',
      label: 'Telegram',
      value: '@SemyonovMN',
      external: true,
      icon: <svg viewBox="0 0 24 24" fill="none" width="21" height="21"><path d="M21 4L3 11l5 2 2 6 3-4 5 4 3-15z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
    },
    {
      href: 'tel:+79138130532',
      label: contact.phoneLabel,
      value: '+7 (913) 813-05-32',
      icon: <svg viewBox="0 0 24 24" fill="none" width="21" height="21"><path d="M5 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C10 27 2 14 3 6c0-1 1-2 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
    },
  ]

  return (
    <section className="sec contact" id="contact" style={{ background: 'var(--surface)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 46, textAlign: 'center' }}>
          <RevealBlock>
            <p className="kicker solo">{contact.kicker}</p>
            <h2 style={{ fontSize: 'clamp(36px,4.8vw,60px)', fontWeight: 800, letterSpacing: '-.02em', margin: '22px 0 26px', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              {contact.title}
            </h2>
            <p style={{ fontSize: 19, color: 'var(--text2)', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 42px' }}>
              {contact.intro}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 520, margin: '0 auto', width: '100%' }}>
              {contactLinks.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  {...('external' in c && c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="cd-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 18,
                    padding: '18px 22px',
                    background:'rgba(255,255,255,.75)',
                    backdropFilter:'blur(18px)',
                    WebkitBackdropFilter:'blur(18px)',
                    border: '1px solid var(--border)',
                    borderRadius: 14,
                    transition: '.4s var(--ease)',
                    textDecoration: 'none',
                    color: 'inherit',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ width: 44, height: 44, borderRadius: 11, background: 'var(--surface2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                    {c.icon}
                  </span>
                  <span>
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)', display: 'block' }}>{c.label}</span>
                    <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', display: 'block' }}>{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </RevealBlock>

          <RevealBlock delay={1} style={{ width: '100%' } as React.CSSProperties}>
            <div style={{
              background:'rgba(255,255,255,.78)',
              backdropFilter:'blur(22px)',
              WebkitBackdropFilter:'blur(22px)',
              border: '1px solid var(--border)',
              borderRadius: 22,
              padding: 40,
              boxShadow: '0 30px 70px -40px rgba(15,73,137,.4)',
              maxWidth: 560,
              margin: '0 auto',
              width: '100%',
              textAlign: 'left',
            }}>
              {state === 'success' ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--surface2)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
                    <svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 style={{ fontSize: 26, marginBottom: 10, fontFamily: 'var(--font-playfair), Georgia, serif' }}>{contact.thanksTitle}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: 16 }}>{contact.thanksText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <div style={{ marginBottom: 20 }}>
                    <label htmlFor="f-name" style={{ display: 'block', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 9 }}>
                      {contact.form.name}
                    </label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      placeholder={contact.form.namePlaceholder}
                      required
                      autoComplete="name"
                      className="form-input"
                      style={{
                        width: '100%',
                        fontFamily: 'var(--font-manrope), sans-serif',
                        fontSize: 17,
                        color: 'var(--text)',
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 13,
                        padding: '16px 18px',
                        transition: '.35s var(--ease)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label htmlFor="f-phone" style={{ display: 'block', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 9 }}>
                      {contact.form.phone}
                    </label>
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      placeholder={contact.form.phonePlaceholder}
                      required
                      autoComplete="tel"
                      className="form-input"
                      style={{
                        width: '100%',
                        fontFamily: 'var(--font-manrope), sans-serif',
                        fontSize: 17,
                        color: 'var(--text)',
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 13,
                        padding: '16px 18px',
                        transition: '.35s var(--ease)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label htmlFor="f-appeal" style={{ display: 'block', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 9 }}>
                      {contact.form.appeal}
                    </label>
                    <textarea
                      id="f-appeal"
                      name="appeal"
                      placeholder={contact.form.appealPlaceholder}
                      required
                      className="form-input"
                      style={{
                        width: '100%',
                        fontFamily: 'var(--font-manrope), sans-serif',
                        fontSize: 17,
                        color: 'var(--text)',
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 13,
                        padding: '16px 18px',
                        transition: '.35s var(--ease)',
                        outline: 'none',
                        resize: 'vertical',
                        minHeight: 130,
                      }}
                    />
                  </div>

                  {state === 'error' && (
                    <p style={{ color: '#dc2626', fontSize: 14, marginBottom: 16 }}>
                      {contact.form.error}{' '}
                      <a href="tel:+79138130532" style={{ color: 'var(--primary)', fontWeight: 600 }}>+7 (913) 813-05-32</a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 8, opacity: state === 'submitting' ? 0.7 : 1 }}
                  >
                    {state === 'submitting' ? contact.form.submitting : <>{contact.form.submit} <span className="arr">→</span></>}
                  </button>
                </form>
              )}
            </div>
          </RevealBlock>
        </div>
      </div>

      <style>{`
        .cd-item:hover { border-color: var(--accent) !important; transform: translateX(6px); box-shadow: 0 14px 34px -18px rgba(15,73,137,.3); }
        .form-input:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 4px rgba(0,160,227,.12) !important; }
        @media (max-width: 480px) {
          .form-card { padding: 26px !important; }
        .cd-item:hover span:first-child{
        transform:scale(1.08) rotate(-8deg);
        background:var(--primary);
        color:white;}
        .cd-item span:first-child{
        transition:.35s var(--ease);}
        }
        .btn-primary:hover{
        transform:
        translateY(-4px)
        scale(1.02);}
      `}</style>
    </section>
  )
}
