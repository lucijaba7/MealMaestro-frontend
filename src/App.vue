<template>
  <v-app>
    <Sidebar v-if="this.$store.getters.isAuthenticated" />

    <v-main>
      <FloatingNav v-if="this.$store.getters.isAuthenticated" />

      <Loader v-if="loading" />

      <router-view :key="$route.query.startDay"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Layout/Sidebar";
import FloatingNav from "@/components/Layout/FloatingNav";
import { mapState } from "vuex";
import Loader from "@/components/Loader";

export default {
  name: "App",
  components: { Sidebar, FloatingNav, Loader },
  mounted() {
    // this.$store.dispatch("hide");
  },
  computed: {
    ...mapState("loader", ["loading"])
  }
};
</script>
