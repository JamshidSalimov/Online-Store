export default {
  ssr: false,
  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dona',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~static/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: './plugins/vmask.js'
    },
    {
      src: './plugins/slider.js',
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  axios: {
    baseURL: 'https://api.dona.uz/api/v1/'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'token/', method: 'post', propertyName: 'access' },
          user: { url: 'user-profile/', method: 'get', propertyName: false },
          logout: false
        }
      }
    }
  },
  toast: {
    position: 'top-right',
    duration: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ],
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',


        }
      }
    ]
  },
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    ['@nuxtjs/yandex-metrika',

      {
        id: '88075127',
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,

      }],
    [
      "vue-yandex-maps/nuxt",
      {
        apiKey: "ca913e0d-396f-41fb-aba4-8537720869c5",
        lang: "ru_RU",
        version: "2.1"
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}


