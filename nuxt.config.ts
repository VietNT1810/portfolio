// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@vueuse/nuxt", "@nuxt/fonts", "@nuxt/image"],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  css: ["~/assets/styles/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, "assets/icons/")],
        symbolId: "icon-[name]", // e.g. icon-message-circle
      }),
      svgLoader(),
    ],
  },
  fonts: {
    families: [
      { name: "Geist", provider: "google", global: true },
      { name: "Geist Mono", provider: "google", global: true },
      { name: "Caveat", provider: "google", global: true },
    ],
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    contactEmail: process.env.CONTACT_EMAIL,
  },
  app: {
    head: {
      title: "Tuấn Việt - Frontend Developer",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        { name: "author", content: "Nguyen Tuan Viet" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#0a0a0a" },
      ],
    },
  },
});
