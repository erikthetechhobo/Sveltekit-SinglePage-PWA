/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-node';

const config = {
	kit: {
		files: {
			serviceWorker: "src/service-worker.js",
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter :adapter()
	}
};

export default config;
