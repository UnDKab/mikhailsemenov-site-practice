export const dynamic = 'force-static'

export default function sitemap() {
  const base = 'https://www.mikhailsemenov.com'
  const now = new Date()

  return [
    { url: `${base}/ru/`, lastModified: now, alternates: { languages: { ru: `${base}/ru/`, en: `${base}/en/` } } },
    { url: `${base}/en/`, lastModified: now, alternates: { languages: { ru: `${base}/ru/`, en: `${base}/en/` } } },
  ]
}
