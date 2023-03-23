import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default ((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
