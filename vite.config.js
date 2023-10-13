import { sveltekit } from '@sveltejs/kit/vite';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const config = {
  plugins: [
    sveltekit(),
    ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') })
  ],
  server: {
    fs: { allow: ['..'] }
  }
};

export default config;