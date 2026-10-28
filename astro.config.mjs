// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://taxicalaratjada.es/',
	output: 'static',
	trailingSlash: 'always',
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		locales: ["es", "en", "de", "fr"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false
		},
	},
	// /about y /services sin idioma llevan al inglés; la raíz detecta el idioma (src/pages/index.astro)
	redirects: {
		'/about/': '/en/about/',
		'/services/': '/en/services/',
	},
	integrations: [sitemap({
		filter: (page) => /\/(es|en|de|fr)\//.test(page),
		i18n: {
			defaultLocale: 'en',
			locales: { es: 'es', en: 'en', de: 'de', fr: 'fr' },
		},
		// x-default apunta a la versión en inglés, igual que en el <head>
		serialize(item) {
			// links es compartido entre las URLs de un mismo grupo: crear uno nuevo
			const links = (item.links ?? []).filter((l) => l.lang !== 'x-default');
			const en = links.find((l) => l.lang === 'en');
			return en ? { ...item, links: [...links, { lang: 'x-default', url: en.url }] } : item;
		},
	})],
});
