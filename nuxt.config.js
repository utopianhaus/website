import config from "./config";
import routes from "./pages/routes";
import i18n from "./config/i18n";

export default {
  target: "static",

  modern: !config.isDev && "client",

  ssr: true,

  loading: "~/components/LoadingBar.vue",

  globalName: config.nuxt.globalName,

  dir: {
    static: "public",
  },

  server: {
    port: config.server.port,
    host: config.server.hostname,
  },

  watch: ["~/config/*"],

  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/svg",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/toast",
    "@nuxtjs/i18n",
  ],

  buildModules: [
    "nuxt-font-loader",
    "nuxt-gsap-module",
    "nuxt-lazysizes",
    "@nuxtjs/color-mode",
  ],

  toast: {
    position: "bottom-right",
    className: "wlToast",
    containerClass: "wlToastContainer",
    singleton: "true",
  },

  colorMode: {
    preference: "light", // default value of $colorMode.preference
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },

  i18n: {
    locales: [
      {
        code: "en",
        name: "EN",
        iso: "en-US",
      },
    ],
    defaultLocale: "en",
    vueI18n: i18n,
    // skipSettingLocaleOnNavigate: true
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },

  css: [
    "~/assets/styles/app.scss",
    "tachyons/css/tachyons.css",
    "splitting/dist/splitting.css",
  ],

  plugins: [
    { src: "~/plugins/locomotiveScroll.client.js", mode: "client" },
    { src: "~/plugins/lazyloader.client.js", mode: "client" },
    { src: "~/plugins/plyr.client.js", mode: "client" },
    { src: "~/plugins/shortkey.client.js", mode: "client" },
    { src: "~/plugins/splitting.client.js", mode: "client" },
    { src: "~/plugins/router.js" },
  ],

  pageTransition: {
    name: "page",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
      });
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: done,
      });
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
  },

  head: {
    htmlAttrs: {
      lang: config.app.lang,
    },
    title: null,
    titleTemplate: null,

    meta: [
      {
        hid: "charset",
        charset: config.app.charset,
      },
      {
        hid: "http-equiv",
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge",
      },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width,initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: config.app.description,
      },
      {
        hid: "robots",
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
    ],
  },

  router: {
    linkActiveClass: "link-active",
    linkExactActiveClass: "link-exact-active",

    extendRoutes() {
      return routes;
    },
  },

  build: {
    publicPath: config.nuxt.publicPath,

    extractCSS: true,

    templates: [
      {
        src: "templates/app.html",
        dst: "views/app.template.html",
      },
    ],
    transpile: [],
  },

  generate: {
    dir: "dist",
    fallback: true, // Error 404 page
  },

  publicRuntimeConfig: {
    app: {
      url: config.app.url,
      name: config.app.name,
      title: config.app.title,
      titleSeparator: config.app.titleSeparator,
      titleTemplate: config.app.titleTemplate,
      description: config.app.description,
      type: config.app.type,
    },
    breakpoints: config.breakpoints,
  },

  privateRuntimeConfig: {},

  pwa: {
    icon: {
      source: "assets/favicons/icon.png",
      sizes: [64, 192, 512],
    },

    meta: {
      author: config.app.author,
    },

    manifest: {
      name: config.app.name,
      short_name: config.app.shortName,
      description: config.app.description,
      lang: config.app.lang,
      theme_color: config.app.themeColor,
      background_color: config.app.backgroundColor,
    },
  },

  robots: {
    UserAgent: () => ["*"],
    Sitemap: () => [`${config.app.url}/sitemap.xml`],
  },

  sitemap: {
    hostname: config.app.url,
    gzip: true,
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
  },

  fontLoader: {
    url: "/fonts/font-face.css",
    prefetch: true,
    preconnect: true,
  },
};
