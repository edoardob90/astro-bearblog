// locale settings for this theme
// https://astro-i18n-starter.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = 'en'

export const LOCALES_SETTING: LocaleSetting = {
    en: {
        label: 'english',
        shortLabel: 'en',
        lang: 'en-US',
        flag: '🇺🇸'
    },
    it: {
        label: 'italiano',
        shortLabel: 'it',
        lang: 'it-IT',
        flag: '🇮🇹'
    }
}

interface LocaleSetting {
    [key: Lowercase<string>]: {
        label: string
        shortLabel: string
        lang?: string
        flag?: string
        dir?: 'rtl' | 'ltr'
    }
} // refer: https://starlight.astro.build/reference/configuration/#locales
