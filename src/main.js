import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import service from "@/utils/service";
import { store } from "./store";
import { setupInterceptors } from "./utils/httpInterceptors";

Vue.config.productionTip = false;

service.interceptors.request.use(function (config) {
    const token = store.getters.isAuthenticated;
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
  created() {
    setupInterceptors(store);
  },
  store
}).$mount("#app");
