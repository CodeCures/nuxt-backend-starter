// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-mongoose'],
  mongoose: {
    uri: process.env.CONNECTION_URL,
    options: {},
  },
  routeRules: {
    '/api/**': { cors: true, headers: { 'Accept': 'application/json' } },
  }
})
