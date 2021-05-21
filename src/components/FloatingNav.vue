<template>
  <!-- <v-navigation-drawer floating app right permanent mini-variant>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-navigation-drawer> -->
  <!-- <v-app-bar dense dark floating collapse>
    <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  <span class="floating-nav float-right">
    <v-btn icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn> 
  </span>
  <!-- </v-app-bar> -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: "mdi-account-circle", text: "HOME", route: "/" },
        { icon: "mdi-account-circle", text: "bla", route: "/" },
      ],
    };
  },
};
</script>

<style scoped>
.floating-nav {
  margin: 30px;
}
</style>
