// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@hypernym/nuxt-gsap'],
  gsap: {
    provide: true,
    composables: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },

  app: {
    head: {
      title: 'My Portfolio',
      titleTemplate: '%s | My Portfolio',
      meta: [
        { name: 'description', content: 'My portfolio website' }
      ]
    }
  }
});
