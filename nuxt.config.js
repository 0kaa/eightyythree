export default {
  ssr: true,
  head: {
    titleTemplate: '%s',
    title: 'EightyyThree - Home' || '',
    meta: [
      { charset: 'utf-8' },

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: false,
  loadingIndicator: false,
  components: {},
  css: ['./assets/app.scss'],
  plugins: [],

  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        lazy: true,
        locales: [
          {
            name: 'Arabic',
            code: 'ar',
            iso: 'ar',
            file: 'ar.js'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          }
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        langDir: './locales/'
      }
    ]
  ],

  buildModules: [
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: { icons: false },
  axios: {
    baseURL: 'https://83-eigty.demo.demo.asol-tec.com',
  },

  build: { extractCSS: true, extend(config, ctx) { } }
}
