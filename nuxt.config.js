import colors from 'vuetify/es5/util/colors';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - autorizacao-scr',
    title: 'autorizacao-scr',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/globals.scss', 'animate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/v-mask.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  // toast: {
  //   position: 'top-center',
  //   register: [
  //     // Register custom toasts
  //     {
  //       name: 'my-error',
  //       message: 'Oops...Something went wrong',
  //       options: {
  //         type: 'error',
  //       },
  //     },
  //   ],
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: '#0db5b5',
          background: '#1565C0',
          text: '#263357',
          paragraph: {
            base: '#576078',
            lighten1: '#697785',
            lighten2: '#a7afc3',
            lighten3: '#dce1ed',
            lighten4: '#ffffff',
            darken1: '#1f272f',
            darken2: '#1565c0',
            darken3: '#1a5598',
            darken4: '#263357',
          },
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
