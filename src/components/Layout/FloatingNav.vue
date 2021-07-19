<template>
  <v-col
    cols="6"
    sm="2"
    class="floating-nav"
    order="2"
    order-sm="3"
    align="end"
  >
    <v-btn icon :to="(route = '/settings')">
      <v-icon color="secondary">mdi-cog</v-icon>
    </v-btn>
    <v-btn icon :to="(route = '/profile')">
      <v-icon color="secondary">mdi-account-circle</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "FloatingNav"
};
</script>

<style scoped></style>
