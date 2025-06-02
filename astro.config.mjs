// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://taxicalaratjada.es/',
	// base:'test-astro',
	output: 'static',
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		locales: ["es", "en","De"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false
		},
	},
	integrations: [mdx(), sitemap()],
});
