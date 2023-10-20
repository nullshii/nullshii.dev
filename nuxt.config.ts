// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  $development: {
    devtools: { enabled: true }
  },
  css: [
      '~/assets/css/Fonts.css',
      '~/assets/css/Tailwind.css',
  ],
  modules: [
      "@nuxtjs/tailwindcss",
      "@nuxtjs/i18n",
      "@nuxt/image",
      "@vueuse/nuxt",
  ],
  i18n: {
      lazy: true,
      strategy: "prefix_except_default",
      defaultLocale: 'en-US',
      langDir: 'locales',
      locales: [
          {
              name: 'English',
              iso: 'en-US',
              code: 'en-US',
              file: 'en-US.json'
          },
          {
              name: 'Русский',
              iso: 'ru-RU',
              code: 'ru-RU',
              file: 'ru-RU.json'
          }
      ]
  }
})