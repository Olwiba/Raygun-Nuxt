// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    '~/plugins/1_raygun.client.ts',
    '~/plugins/1_raygun.server.ts',
  ],
  runtimeConfig: {
    public: {
      raygun:{
        APIkey: 'ENTER_API_KEY_HERE',
      },
      baseUrl: 'http://localhost:3000',
      env: 'development',
    }
  }
})
