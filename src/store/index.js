import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { loader } from "./modules/loader";
import { auth } from "./modules/auth";
import { popup } from "./modules/popup";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    loader,
    auth,
    popup
  },
  plugins: [createPersistedState()]
});
