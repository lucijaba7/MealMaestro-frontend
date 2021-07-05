<template>
  <v-col
    cols="6"
    sm="2"
    class="floating-nav"
    order="2"
    order-sm="3"
    align="end"
  >
    <v-btn icon>
      <v-icon color="secondary">mdi-cog</v-icon>
    </v-btn>
    <v-btn icon secondary>
      <v-icon color="secondary">mdi-account-circle</v-icon>
    </v-btn>
  </v-col>
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

<style scoped></style>
