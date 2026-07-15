import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, isLocale } from '@/i18n/config'

import { getDictionary } from '@/i18n/get-dictionary'

const SITE_URL = 'https://www.mikhailsemenov.com'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isLocale(raw)) return {}

  const dict = getDictionary(raw)
  const localePath = `/${raw}/`
  const ogLocale = raw === 'ru' ? 'ru_RU' : 'en_US'
  const alternateLocale = raw === 'ru' ? 'en_US' : 'ru_RU'

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: dict.nav.name, url: SITE_URL }],
    creator: dict.nav.name,
    publisher: dict.nav.name,
    category: 'technology',
    applicationName: dict.nav.name,
    alternates: {
      canonical: localePath,
      languages: {
        ru: '/ru/',
        en: '/en/',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'profile',
      firstName: dict.nav.firstName,
      lastName: dict.nav.lastName,
      username: 'semenovmn',
      siteName: dict.nav.name,
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}${localePath}`,
      images: [
        {
          url: '/assets/portrait.jpg',
          width: 1133,
          height: 1700,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      creator: '@semenovmn',
      images: ['/assets/portrait.jpg'],
    },
    icons: {
      icon: [
        { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang='${locale}'`,
        }}
      />
      {children}
    </>
  )
}
