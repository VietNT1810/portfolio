// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],
  eslint: {
    config: {
      stylistic: true
    }
  },
  css: ['~/assets/styles/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'assets/icons/')],
        symbolId: 'icon-[name]', // e.g. icon-message-circle
      }),
      svgLoader(),
    ],
  },
})
