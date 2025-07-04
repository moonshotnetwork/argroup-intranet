// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			credits: false,
			logo: {
				dark: './src/assets/argroup-logo-dark.png',
				light: './src/assets/argroup-logo-light.png',
				replacesTitle: true,
			},
			plugins: [starlightThemeRapide()],
			title: 'Argroup Intranet',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
