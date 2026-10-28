// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://taxicalaratjada.es/',
	output: 'static',
	trailingSlash: 'always',
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
	integrations: [mdx(), sitemap({
		filter: (page) => /\/(es|en|de|fr)\//.test(page),
		i18n: {
			defaultLocale: 'en',
			locales: { es: 'es', en: 'en', de: 'de', fr: 'fr' },
		},
	})],
});
