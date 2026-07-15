import type { Dictionary } from '@/i18n/types'
import type { Locale } from '@/i18n/config'

const SITE_URL = 'https://www.mikhailsemenov.com'

type StructuredDataProps = {
  dict: Dictionary
  locale: Locale
}

export default function StructuredData({ dict, locale }: StructuredDataProps) {
  const sd = dict.structuredData
  const { nav } = dict
  const localePath = `/${locale}/`
  const inLanguage = locale === 'ru' ? 'ru-RU' : 'en-US'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}${localePath}`,
        name: nav.name,
        inLanguage,
        publisher: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage-${locale}`,
        url: `${SITE_URL}${localePath}`,
        name: sd.profileName,
        inLanguage,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#person` },
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: nav.name,
        alternateName: nav.alternateName,
        url: `${SITE_URL}${localePath}`,
        image: `${SITE_URL}/assets/portrait.jpg`,
        jobTitle: sd.jobTitles,
        description: sd.description,
        email: 'mailto:semyonovmn@icloud.com',
        telephone: '+7-913-813-05-32',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tomsk',
          addressRegion: locale === 'ru' ? 'Томская область' : 'Tomsk Oblast',
          addressCountry: 'RU',
        },
        worksFor: [
          {
            '@type': 'Organization',
            name: 'KIBT',
            url: 'https://ibtcom.ru',
            description: sd.ibtDescription,
          },
          {
            '@type': 'Organization',
            name: 'NPP TEC',
            url: 'https://npptec.ru',
            description: sd.nppDescription,
          },
        ],
        founder: {
          '@type': 'Organization',
          name: 'KIBT',
          url: 'https://ibtcom.ru',
        },
        knowsAbout: sd.skills,
        knowsLanguage: [
          { '@type': 'Language', name: sd.russianLanguage, alternateName: 'ru' },
          { '@type': 'Language', name: sd.englishLanguage, alternateName: 'en' },
        ],
        hasCredential: sd.credentials.map((name) => ({
          '@type': 'EducationalOccupationalCredential',
          name,
        })),
        sameAs: [
          'https://t.me/SemyonovMN',
          'https://x.com/semenovmn',
          'https://ibtcom.ru',
          'https://npptec.ru',
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  )
}
