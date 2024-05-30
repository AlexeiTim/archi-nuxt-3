// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in'},
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", 'nuxt-icon'],
  runtimeConfig: {
    public: {
      apiUrl:'https://664878da2bb946cf2fa0af05.mockapi.io/',
    }
  },
})