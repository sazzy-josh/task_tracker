import {createPinia} from "pinia";

export default ((nuxtApp) => {
  const pinia = createPinia();

  nuxtApp.vueApp.use(pinia);
});
