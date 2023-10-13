import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from "svelte-preprocess";

export default {
	preprocess: [
		sveltePreprocess()
	],
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x'
		}),
		prerender: {
			crawl: false
		},
	},
};