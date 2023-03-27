// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  buildModules: ["@nuxt/typescript-build", "@pinia/nuxt"],
  
  modules: ['nuxt-snackbar'],
  
  snackbar: {
    // right: true,
    bottom: true,
    duration: 1000,
  },

  css: [
    "vuetify/lib/styles/main.sass",
    "~/assets/css/main.css",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  plugins: ["~/plugins/vuetify", "~/plugins/pinia"],

  //Allows Global Import of component
  component: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
      "~/components",
    ],
  },

  app: {
    head: {
      titleTemplate: "%s - Nothy",
      title: "TaskManager",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {name: "viewport", content: "width=device-width, initial-scale=1"},
      ],

      //Google font
      link: [
        {rel: "preconnect", href: "https://fonts.googleapis.com"},

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },

        {
          href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },

  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
