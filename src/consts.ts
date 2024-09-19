// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { type Multilingual } from '@/utils/i18n'

export const SITE_TITLE: string | Multilingual = 'Panda Blog'

export const SITE_DESCRIPTION: string | Multilingual = {
    en: 'Panda Blog, a blog powered by Astro.',
    it: 'Panda Blog, un blog sviluppato con Astro.'
}

// export const X_ACCOUNT: string | Multilingual = '@psephopaiktes'

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
    en: 'This page is not available in your language.',
    it: 'Questa pagina non è disponibile nella tua lingua.'
}
