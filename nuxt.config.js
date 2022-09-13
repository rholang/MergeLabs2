import getRoutes from './utils/getRoutes'

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  router: { base: 'rholang.github.io/MergeLabs2' },
  target: 'static',
  ssr: true,
  generate: {
    fallback: false,
    routes: ['/', '404'],
  },
  
  ignore: 'pages/design/*.vue',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: (titleChunk) => {
      // If head.title is undefined or blank then we don't need the hyphen
      return titleChunk
        ? `${titleChunk} - Cosmos: The Internet of Blockchains`
        : 'Cosmos: The Internet of Blockchains'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Cosmos is an ever-expanding ecosystem of interoperable and sovereign blockchain apps and services, built for a decentralized future.',
      },
      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Cosmos: The Internet of Blockchains',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Cosmos: The Internet of Blockchains',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Cosmos is an ever-expanding ecosystem of interoperable and sovereign blockchain apps and services, built for a decentralized future.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://cosmos.network',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://cosmos.network/og-image.jpg',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Cosmos: The Internet of Blockchains',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Cosmos is an ever-expanding ecosystem of interoperable and sovereign blockchain apps and services, built for a decentralized future.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://cosmos.network/og-image.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Cosmos: The Internet of Blockchains',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon-svg.svg' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: 'black',
      },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      {
        rel: 'preload',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/styles/main.styl', lang: 'stylus' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/vue-scrollto.client.js',
    '~/plugins/vue-kinesis.client.js',
    '~/plugins/v-tooltip.client.js',
    '~/plugins/youtube.client.js',
    '~/plugins/vue-stripe-menu.js',
  ],
  env: {},
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  // To fix flashes on the clientside
  // Set preference as dark
  // https://color-mode.nuxtjs.org/#caveats
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark',
  },
  styleResources: {
    stylus: [
      '~/assets/styles/abstracts/_*.styl',
      '~/node_modules/rfs/stylus.styl',
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['vue-kinesis', 'v-tooltip'],
    // https://nuxtjs.org/faq/postcss-plugins/#recommended-method
    postcss: {
      plugins: {
        'postcss-font-variant': {},
      },
      preset: {
        // To change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
  },
  // https://stackoverflow.com/questions/52044101/how-to-add-headers-on-nuxt-static-files-response
  render: {
    static: {
      setHeaders(res) {
        res.setHeader('X-Frame-Options', 'ALLOWALL')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.setHeader(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept'
        )
      },
    },
  },
  sitemap: {
    hostname: 'https://cosmos.network',
    exclude: ['/design/**', '/learn/tag/**'],
    routes() {
      return getRoutes()
    },
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },
}
