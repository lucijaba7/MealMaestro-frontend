<template>
  <v-app>
    <!-- <Sidebar /> -->

    <v-main>
      <FloatingNav />

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import FloatingNav from "@/components/FloatingNav";
import AvatarPopup from "@/components/AvatarPopup";

export default {
  name: "App",
  components: { Sidebar, FloatingNav },
  data() {
    return {
      //
    };
  },
};
</script>
