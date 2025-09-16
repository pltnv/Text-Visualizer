import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Textarea from "primevue/textarea";
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .component("Textarea", Textarea)
  .component("Button", Button)
  .mount("#app");
