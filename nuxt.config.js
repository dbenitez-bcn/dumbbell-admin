import Constants from './src/core/Constants';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dumbbell-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/axiosSetup.ts',
    { src: 'plugins/sessionLoader.ts', mode: 'client' },
    'plugins/vuetify.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: Constants.BASE_URL,
  },

  // Nuxt auth module configuration: https://auth.nuxtjs.org/
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/admin/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'delete' },
          user: false
        }
      }
    },
    redirect: {
      login: '/access',
      logout: '/access',
      callback: '/access',
      home: '/exercises'
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
