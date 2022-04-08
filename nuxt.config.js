import { light } from "./src/theme";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dumbbell - Admin panel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Custom src directory: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir
  srcDir: 'src/',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles.scss'
  ],
  styleResources: {
    scss: ['~/assets/styles.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axiosSetup.ts'
  ],

  // Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
  router: {
    middleware: ['auth']
  },

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
    '@nuxtjs/auth-next',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NODE_ENV !== 'production' ? 'https://dumbbell-backend-stage.herokuapp.com' : 'https://dumbbell-backend.herokuapp.com',
    // baseURL: 'http://localhost:8080'
  },

  // Nuxt auth module configuration: https://auth.nuxtjs.org/
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        endpoints: {
          login: { url: '/admin/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'delete' },
          refresh: { url: '/auth/refresh', method: 'post' },
          user: false
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
        },
      }
    },
    redirect: {
      login: '/access',
      logout: '/access',
      callback: false,
      home: '/exercises'
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      options: { customProperties: true },
      themes: {
        light
      }
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
  },
  render: {
    bundleRenderer: {
      runInNewContext: false,
    },
  },
}
