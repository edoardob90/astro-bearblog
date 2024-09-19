// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { type Multilingual } from './utils/i18n'
import { DEFAULT_LOCALE_SETTING } from './utils/locales'

export const SITE_TITLE: string | Multilingual = "edoardo's blog"

export const SITE_DESCRIPTION: string | Multilingual = {
    en: 'A journal for thoughts of a curious mind.',
    it: 'Il diario di una mente curiosa.'
}

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
    en: 'This page is not available in your language.',
    it: 'Questa pagina non è disponibile nella tua lingua.'
}

interface LinkItem {
    title: string
    url: string
    isLocalized?: boolean
}

interface PandaConfigType {
    title: string
    description: string | Multilingual
    start: string
    site: string
    defaultLocale: string
    navbar: LinkItem[]
    footer: LinkItem[]
    links?: LinkItem[]
}

export const PandaConfig: PandaConfigType = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    start: '2016',
    site: 'https://blog.edoardob.im/',
    defaultLocale: DEFAULT_LOCALE_SETTING,
    navbar: [
        { title: 'tags', url: '/tags', isLocalized: true },
        { title: 'me', url: '/me', isLocalized: false },
        { title: 'contact', url: '/contact', isLocalized: false }
    ],
    footer: [
        { title: 'rss', url: '/feed' },
        { title: 'contact', url: '/contact' },
        { title: 'github', url: 'https://github.com/edoardob90' }
    ],
    links: [
        { title: 'Bearblog', url: 'https://notes.edoardob.im' },
        { title: 'micro.blog', url: 'https://micro.blog/edobld' },
        { title: 'github', url: 'https://github.com/edoardob90' }
    ]
}
