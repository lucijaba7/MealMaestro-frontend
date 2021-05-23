<template>
  <v-app>
    <Sidebar />

    <v-main>
      <!-- <FloatingNav /> -->
<<<<<<< HEAD
=======

>>>>>>> 5cf7884b0b37b97a1e6784564617605d9b060ba4
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
