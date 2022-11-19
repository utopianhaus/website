export default {
  isDev: process.env.NODE_ENV === "development",

  nuxt: {
    routerBase: "/",
    globalName: "nuxt",
    publicPath: "/_nuxt/",
  },

  app: {
    name: "Utopian",
    shortName: "Utopian",
    description:
      "We foster the development of open source projects by providing a place for people to come together, work on them together, and then bring their creations to market as a group.",
    author: "Utopian",
    title: "Creators Community",
    titleSeparator: " — ",
    titleTemplate: "Utopian",
    charset: "utf-8",
    lang: "en-US",
    locale: "en_US",
    type: "website",
    themeColor: "#030303",
    backgroundColor: "#030303",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};
