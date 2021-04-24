import colors from 'vuetify/es5/util/colors';
require('dotenv').config();
export default {
  ssr: false,
  router: {
    base: process.env.NODE_ENV === 'production' ? '/nbs-web/' : '/',
    routerNameSplitter: '/',
  },
  env: {
    baseUrl: process.env.BASE_URL || "https://nbsapi.herokuapp.com/api/",
    localUrl: process.env.LOCAL_URL || "http://localhost:8080/api/"
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'NBS Admin',
    title: process.env.npm_package_name || '',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    },


    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico?v2',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'
    }
    ]

  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#333333',
    throttle: 0
  },
  /*
   ** Global CSS
   */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    '@/assets/fonts/montserrat.css',
    '@/assets/css/styles.css'

  ],
  /*
   ** Plugins to load before mounting the App
   ** Added Vuetify as plugin
   */
  plugins: [
    "~/plugins/i18n.js",
    '@plugins/vuetify.js',
    '~/plugins/axios',
    '~/plugins/route',
    '~/plugins/pwa.client.js',
    { src: '~/plugins/vuepersistence.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'nuxt-material-design-icons'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '',
    extend(config, ctx) { },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'NBS',
      lang: 'en'
    },
    meta: {
      /* meta options */
    },
    icon: {
      iconSrc: '/static/icon.png'
    }
  },
  axios: {
    //proxyHeaders: false
  },
  server: {
    port: process.env.NODE_ENV === 'production' ? 8000 : 4000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
};
