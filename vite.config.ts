import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	base: '/portifolio',
	plugins: [react()],

	server: {
		port: 3333,
		strictPort: true,
	},
	build: {
		// Tauri supports es2021
		target: 'chrome105',
		// don't minify for debug builds
		minify: 'esbuild',
		// produce sourcemaps for debug builds
		sourcemap: false,
	},
}));
