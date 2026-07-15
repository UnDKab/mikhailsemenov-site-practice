import type { Dictionary } from '../types'

const en: Dictionary = {
  meta: {
    title: 'Mikhail Semenov — IT Expert & Entrepreneur, Tomsk',
    description:
      'Mikhail Semenov — founder of KIBT and IT Director at NPP TEC. Over 20 years in IT: IT strategy, manufacturing digitalization, enterprise automation, IT team leadership, and launching technology products in Tomsk and Siberia.',
    titleTemplate: '%s — Mikhail Semenov',
    ogAlt: 'Mikhail Semenov — IT expert and entrepreneur from Tomsk',
    keywords: [
      'Mikhail Semenov',
      'IT expert Tomsk',
      'IT entrepreneur',
      'KIBT',
      'NPP TEC',
      'manufacturing digitalization',
      'IT strategy',
      'enterprise automation',
      'IT infrastructure',
      'IT team management',
      'software implementation',
      'AI in business',
    ],
  },
  nav: {
    ariaLabel: 'Main navigation',
    homeAria: 'Mikhail Semenov — home',
    logoAlt: 'Mikhail Semenov logo — CM monogram',
    name: 'Mikhail Semenov',
    firstName: 'Mikhail',
    lastName: 'Semenov',
    alternateName: 'Михаил Семёнов',
    role: 'Person in IT',
    write: 'Contact',
    menu: 'Menu',
    links: [
      { href: '#about', label: 'About' },
      { href: '#philosophy', label: 'Principles' },
      { href: '#skills', label: 'Competencies' },
      { href: '#navyki', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  hero: {
    kicker: 'Tomsk · Siberia · since 2003',
    title1: 'IT serves business.',
    title2: 'Not the other way around.',
    subtitle:
      'Founder of KIBT and IT Director at NPP TEC. For over 20 years I build IT strategies, automate enterprises, and launch technology products in Tomsk and Siberia.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    meta: [
      { value: '20+', label: 'years in IT' },
      { value: '2010', label: 'KIBT founded' },
      { value: '4', label: 'business areas' },
    ],
  },
  about: {
    portraitAlt: 'Mikhail Semenov, person in IT from Tomsk',
    location: 'Tomsk, Russia',
    kicker: 'About',
    lead: 'I started as an engineer.',
    paragraphs: [
      'Then I became a leader — and realized that technology only works when people understand why it matters.',
      'Today I combine two worlds: <strong>entrepreneur</strong>, building a company since 2010, and <strong>technology leader</strong> accountable for real results on the shop floor.',
      'Over 20 years in IT is not just tenure. It is experience you cannot buy in any course.',
      'Based in Tomsk. I work with manufacturing enterprises and technology companies across Siberia.',
    ],
  },
  principles: {
    kicker: 'Principles',
    title: 'Three principles I work by',
    items: [
      {
        num: '01',
        title: 'Business goals come first',
        text: 'Technology without business logic is an expensive toy. Every project starts with a question: what will change for the business? How will we measure it?',
      },
      {
        num: '02',
        title: 'Simplicity is a sign of mastery',
        text: 'Complex systems break. Unclear ones go unused. The best solution is the one that needs no explanation.',
      },
      {
        num: '03',
        title: 'Data beats opinions',
        text: 'Intuition is good. Data is better. Especially when equipment downtime or a missed deadline is on the line.',
      },
    ],
  },
  competencies: {
    kicker: 'Competencies',
    title: 'Where I create value',
    cards: [
      {
        idx: '01 — core',
        title: 'IT strategy & architecture',
        text: 'I connect technology decisions to business goals. I design architecture that scales and does not turn into technical debt.',
        feature: true,
      },
      {
        idx: '02',
        title: 'Manufacturing digitalization',
        text: 'I digitize real shops and processes: equipment monitoring, transparency, and control.',
      },
      {
        idx: '03',
        title: 'IT team leadership',
        text: 'I build and grow teams that deliver results.',
      },
      {
        idx: '04',
        title: 'Automation & AI',
        text: 'I implement automation and artificial intelligence where they truly save time and money.',
      },
      {
        idx: '05',
        title: 'IT infrastructure',
        text: 'I build reliable, secure, and manageable infrastructure — the foundation everything else runs on.',
      },
      {
        idx: '06',
        title: 'Product launches & entrepreneurship',
        text: 'From idea to working business: SaaS services, software in the national registry, subscription models. I know both sides — engineering and entrepreneurship.',
      },
    ],
  },
  skills: {
    kicker: 'Skills',
    title: 'What I bring to the table',
    subtitle: 'Practical skills backed by certificates and credentials earned over years of practice.',
    items: [
      { name: 'AI and digital assistants', cert: 'AI Transformation of the Profession, 2025' },
      { name: 'IT service management (ITIL v3)', cert: 'ITIL v3 Foundations, 2011' },
      { name: 'Project management', cert: 'Corporate project management' },
      { name: 'SolidWorks engineering software', cert: 'Modern SolidWorks implementation' },
      { name: '1C: trading functionality', cert: '1C: Concept and trading functionality' },
      { name: '1C: planning and budgeting', cert: '1C: Planning and budgeting' },
      { name: 'MS SQL Server databases', cert: 'Writing queries in MS SQL Server' },
      { name: 'Transact-SQL', cert: 'Creating Transact-SQL queries' },
      { name: 'TechExpert reference system', cert: 'TechExpert system user' },
      { name: 'English, B1 level', cert: 'General English B1' },
    ],
  },
  stats: {
    items: [
      { value: '20+', label: 'years in information technology' },
      { value: '2010', label: 'year KIBT was founded' },
      { value: '4', label: 'business areas at KIBT' },
    ],
  },
  marquee: {
    words: [
      'IT strategy',
      'Digitalization',
      'Automation',
      'AI in business',
      'Manufacturing',
      'Architecture',
      'Teams',
      'Products',
      'Entrepreneurship',
    ],
  },
  projects: {
    kicker: 'Projects',
    title: 'Where it works in practice',
    items: [
      {
        tag: 'Company · founded 2010',
        title: 'KIBT — ibtcom.ru',
        text: 'IT company in Tomsk with four areas: IT outsourcing and technical support, SaaS and subscription services, industrial equipment monitoring, software supply and implementation. Authorized Kaspersky partner. Software registered in the national digital registry.',
        url: 'https://ibtcom.ru',
        visitLabel: 'Visit ibtcom.ru',
      },
      {
        tag: 'Employer · IT strategy',
        title: 'NPP TEC — npptec.ru',
        text: 'Engineering and manufacturing company in Tomsk. I lead IT strategy, production process digitalization, automation, and IT infrastructure development.',
        url: 'https://npptec.ru',
        visitLabel: 'Visit npptec.ru',
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: "Let's talk",
    intro:
      'If you lead an enterprise or company and want to discuss how technology can change your results — write to me. I reply personally.',
    phoneLabel: 'Phone',
    thanksTitle: 'Thank you!',
    thanksText: 'Message sent. I will reply personally.',
    form: {
      name: 'Name',
      namePlaceholder: 'How should I address you',
      phone: 'Phone',
      phonePlaceholder: '+7 (___) ___-__-__',
      appeal: 'Message',
      appealPlaceholder: 'Briefly describe your task or question',
      submit: 'Send',
      submitting: 'Sending…',
      error: 'Could not send. Please call or email:',
      emailSubject: 'Website inquiry — {name}',
      emailBody: `New inquiry from mikhailsemenov.com

A visitor submitted their contact details via the form in the Contact section.

Name: {name}
Phone: {phone}
Message: {appeal}

Website: https://www.mikhailsemenov.com
Page: {page}
Date & time: {date}

Please get in touch with this person as soon as possible.`,
      mailtoBodyName: 'Name',
      mailtoBodyPhone: 'Phone',
    },
  },
  footer: {
    tagline:
      'Person in IT and technology expert. For over 20 years I turn technology into competitive advantage for business and manufacturing.',
    sections: 'Sections',
    projects: 'Projects',
    contact: 'Contact',
    links: [
      { href: '#about', label: 'About' },
      { href: '#philosophy', label: 'Principles' },
      { href: '#skills', label: 'Competencies' },
      { href: '#navyki', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ],
    copyright: '© 2026 Mikhail Semenov · Tomsk, Russia · mikhailsemenov.com',
    logoAlt: 'Mikhail Semenov logo',
  },
  structuredData: {
    profileName: 'Mikhail Semenov — IT Expert & Entrepreneur, Tomsk',
    description:
      'Founder of KIBT and IT Director at NPP TEC. Over 20 years in IT: IT strategy, manufacturing digitalization, enterprise automation, and launching technology products.',
    jobTitles: ['IT Director', 'IT Company Founder', 'Technology Entrepreneur'],
    ibtDescription: 'IT company: outsourcing, SaaS, industrial equipment monitoring, software implementation.',
    nppDescription: 'Engineering and manufacturing company.',
    skills: [
      'IT strategy and architecture',
      'Manufacturing digitalization',
      'Business process automation',
      'IT team management',
      'Project management',
      'IT infrastructure',
      'IT service management (ITIL v3)',
      'SolidWorks engineering software',
      '1C trading functionality',
      '1C planning and budgeting',
      'MS SQL Server databases',
      'Transact-SQL',
      'TechExpert reference system',
      'Artificial intelligence and digital assistants',
      'English (B1 level)',
    ],
    credentials: [
      'AI Transformation of the Profession: new horizons with a digital assistant (2025)',
      'Modern SolidWorks software implementation',
      'General English, B1 level',
      '1C: Concept and trading functionality',
      '1C: Planning and budgeting',
      'TechExpert reference system user',
      'ITIL v3 Foundations (2011)',
      'Corporate project management',
      'Creating Transact-SQL queries',
      'Writing queries in MS SQL Server',
    ],
    russianLanguage: 'Russian',
    englishLanguage: 'English',
  },
}

export default en
