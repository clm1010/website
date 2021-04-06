export default {
  // mode: 'universal',
  server: {
    port: 8089, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['swiper/css/swiper.css', '@/assets/css/common.scss'],
  // css: ['@/assets/css/common.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vue-swiper', ssr: false }],
  // plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    // ... 需要什么配置什么，这里是全局的
    // sass: [],
    scss: ['@/assets/css/public/_color.scss']
    // less: [],
    // stylus: []
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8089', // 目标接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  loading: {
    color: '#409eff',
    height: '4px'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, ctx) {
    //   // Run ESlint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //       options: {
    //         configFile: './eslintrc.js',
    //         fix: true
    //       }
    //     })
    //   }
    // },
    // cache: false
  },
  router: {
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'error',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/',
          redirect: {
            name: 'home'
          }
        },
        {
          name: 'error',
          path: '*',
          component: resolve(__dirname, 'layouts/error.vue')
        }
      )
    }
  }
}
