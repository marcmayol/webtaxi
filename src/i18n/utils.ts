import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const parts = url.pathname.split('/');
    for (const part of parts) {
        if (part in ui) return part as keyof typeof ui;
    }
    return defaultLang;
}
export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
    }
}

export function  changeroutelang(url: URL, lang: any) {

    const parts = url.pathname.split('/');

    if (parts.length <= 2 && parts.every(p => p === '')) {
        return `/${lang}`;
    }
    if (parts.length <= 2 && parts[0] === '' && parts[1]) {
        if (parts[1] in ui) {
            parts[1] = lang;
            return `/${parts[1]}`;
        }
        return `/${lang}/${parts[1]}`;
    }

    for (let i = 0; i < parts.length; i++) {
        if (parts[i] in ui) {
            parts[i] = lang;
            return  parts.join('/');
        }
    }
}