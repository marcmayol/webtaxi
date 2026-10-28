// Datos del negocio que se repiten en toda la web y en el schema.
export const SITE_URL = 'https://taxicalaratjada.es';
export const BUSINESS_NAME = 'Taxi 21 Cala Rajada';
export const PHONE_E164 = '+34645329809';
export const PHONE_DISPLAY = '+34 645 329 809';
export const WHATSAPP_URL = 'https://wa.me/34645329809';
export const EMAIL = 'mariayxiscotaxi21@gmail.com';
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const AREA_SERVED = ['Cala Rajada', 'Capdepera', 'Canyamel', 'Cala Mesquida', 'Sa Font de Sa Cala'];

export const LOCALES = ['es', 'en', 'de', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

// Código para hreflang y og:locale
export const LOCALE_TAGS: Record<Locale, { hreflang: string; og: string }> = {
	es: { hreflang: 'es', og: 'es_ES' },
	en: { hreflang: 'en', og: 'en_GB' },
	de: { hreflang: 'de', og: 'de_DE' },
	fr: { hreflang: 'fr', og: 'fr_FR' },
};

// Negocio único; cada página lo referencia por @id en vez de declararlo de nuevo.
export function businessSchema(lang: Locale, description: string) {
	return {
		'@type': ['TaxiService', 'LocalBusiness'],
		'@id': BUSINESS_ID,
		name: BUSINESS_NAME,
		alternateName: 'Taxi 21 Cala Ratjada',
		description,
		url: `${SITE_URL}/${lang}/`,
		logo: `${SITE_URL}/img/logo-512.png`,
		image: `${SITE_URL}/img/og-taxi.jpg`,
		telephone: PHONE_E164,
		email: EMAIL,
		address: {
			// Negocio sin local abierto al público, como en la ficha de Google: sin calle
			'@type': 'PostalAddress',
			addressLocality: 'Cala Rajada',
			addressRegion: 'Illes Balears',
			postalCode: '07590',
			addressCountry: 'ES',
		},
		areaServed: AREA_SERVED.map((name) => ({ '@type': 'City', name })),
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '00:00',
			closes: '23:59',
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: PHONE_E164,
			contactType: 'reservations',
			availableLanguage: ['Spanish', 'English', 'German', 'French'],
		},
	};
}

// Una página por servicio en /<lang>/services/<slug>/; `key` es el prefijo de sus textos en ui.ts
export const SERVICES = [
	{ slug: 'door-to-door', key: 'primero', seo: 's1', icon: 'car' },
	{ slug: 'airport-pickup', key: 'segundo', seo: 's2', icon: 'airplane' },
	{ slug: 'hotel-airport', key: 'tercero', seo: 's3', icon: 'bed' },
] as const;
export type Service = (typeof SERVICES)[number];
