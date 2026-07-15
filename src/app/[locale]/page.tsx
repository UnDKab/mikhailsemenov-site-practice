import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import HomeContent from '@/components/HomeContent'

type PageProps = {
  params: Promise<{ locale: string }>
}

export default async function LocalePage({ params }: PageProps) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()

  const locale = raw as Locale
  const dict = getDictionary(locale)

  return <HomeContent dict={dict} locale={locale} />
}
