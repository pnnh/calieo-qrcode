import 'i18next'
import enTranslation from '@/app/i18n/locales/en/translation.json'

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation'
        resources: {
            translation: typeof enTranslation
        }
        allowObjectInHTMLChildren: true;
    }
}
