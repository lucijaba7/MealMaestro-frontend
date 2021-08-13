<template>
  <v-app>
    <Sidebar v-if="this.$store.getters.isAuthenticated" />

    <v-main>
      <FloatingNav v-if="this.$store.getters.isAuthenticated" />
      <!-- <v-fade-transition> -->
      <Loader v-if="loading" />
      <!-- </v-fade-transition> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Layout/Sidebar";
import FloatingNav from "@/components/Layout/FloatingNav";
import { mapState } from "vuex";
import Loader from "@/components/Loader";
import httpClient from "@/utils/httpClient";
import store from "@/store/index.js";

localStorage.setItem("username", "kuharica"); // samo privremeno

export default {
  name: "App",
  components: { Sidebar, FloatingNav, Loader },
  data() {
    return {
      // myLoading: true
    };
  },
  mounted() {
    console.log(this.$store.loading);
  },
  computed: {
    ...mapState("loader", ["loading"])
  },
  watch: {
    // myLoading() {
    //   this.myLoading = this.$store.loading;
    // }
  }
};
</script>
