import type { Dictionary } from '@/i18n/types'
import type { Locale } from '@/i18n/config'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Principles from '@/components/sections/Principles'
import MarqueeBand from '@/components/sections/MarqueeBand'
import Competencies from '@/components/sections/Competencies'
import Skills from '@/components/sections/Skills'
import Stats from '@/components/sections/Stats'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import StructuredData from '@/components/seo/StructuredData'

type HomeContentProps = {
  dict: Dictionary
  locale: Locale
}

export default function HomeContent({ dict, locale }: HomeContentProps) {
  return (
    <>
      <StructuredData dict={dict} locale={locale} />
      <Nav dict={dict} locale={locale} />
      <Hero dict={dict} />
      <About dict={dict} />
      <Principles dict={dict} />
      <Competencies dict={dict} />
      <Skills dict={dict} />
      <Stats dict={dict} />
      <MarqueeBand dict={dict} />
      <Projects dict={dict} />
      <Contact dict={dict} locale={locale} />
      <Footer dict={dict} />
    </>
  )
}
