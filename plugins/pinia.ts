import {createPinia} from "pinia";

//@ts-expect-error
export default defineNuxtConfig((nuxtApp) => {
  const pinia = createPinia();

  nuxtApp.vueApp.use(pinia);
});
