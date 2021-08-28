import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import { store } from "./store";
import { setupInterceptors } from "./utils/httpInterceptors";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  created() {
    setupInterceptors(store);
  },
  store
}).$mount("#app");
