export type PrincipleItem = {
  num: string
  title: string
  text: string
}

export type CompetencyCard = {
  idx: string
  title: string
  text: string
  feature?: boolean
}

export type SkillItem = {
  name: string
  cert: string
}

export type StatItem = {
  value: string
  label: string
}

export type ProjectItem = {
  tag: string
  title: string
  text: string
  url: string
  visitLabel: string
}

export type NavLink = {
  href: string
  label: string
}

export type Dictionary = {
  meta: {
    title: string
    description: string
    titleTemplate: string
    ogAlt: string
    keywords: string[]
  }
  nav: {
    ariaLabel: string
    homeAria: string
    logoAlt: string
    name: string
    firstName: string
    lastName: string
    alternateName: string
    role: string
    write: string
    menu: string
    links: NavLink[]
  }
  hero: {
    kicker: string
    title1: string
    title2: string
    subtitle: string
    ctaProjects: string
    ctaContact: string
    meta: StatItem[]
  }
  about: {
    portraitAlt: string
    location: string
    kicker: string
    lead: string
    paragraphs: string[]
  }
  principles: {
    kicker: string
    title: string
    items: PrincipleItem[]
  }
  competencies: {
    kicker: string
    title: string
    cards: CompetencyCard[]
  }
  skills: {
    kicker: string
    title: string
    subtitle: string
    items: SkillItem[]
  }
  stats: {
    items: StatItem[]
  }
  marquee: {
    words: string[]
  }
  projects: {
    kicker: string
    title: string
    items: ProjectItem[]
  }
  contact: {
    kicker: string
    title: string
    intro: string
    phoneLabel: string
    thanksTitle: string
    thanksText: string
    form: {
      name: string
      namePlaceholder: string
      phone: string
      phonePlaceholder: string
      appeal: string
      appealPlaceholder: string
      submit: string
      submitting: string
      error: string
      emailSubject: string
      emailBody: string
      mailtoBodyName: string
      mailtoBodyPhone: string
    }
  }
  footer: {
    tagline: string
    sections: string
    projects: string
    contact: string
    links: NavLink[]
    copyright: string
    logoAlt: string
  }
  structuredData: {
    profileName: string
    description: string
    jobTitles: string[]
    ibtDescription: string
    nppDescription: string
    skills: string[]
    credentials: string[]
    russianLanguage: string
    englishLanguage: string
  }
}
