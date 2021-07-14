<template>
  <v-app>
    <Sidebar />

    <v-main>
      <!-- <FloatingNav /> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Layout/Sidebar";
import FloatingNav from "@/components/Layout/FloatingNav";
import AvatarPopup from "@/components/Popups/AvatarPopup";

export default {
  name: "App",
  components: { Sidebar, FloatingNav },
  data() {
    return {
      //
    };
  }
};
</script>
