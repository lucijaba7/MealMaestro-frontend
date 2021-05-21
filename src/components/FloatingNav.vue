<template>
  <span class="floating-nav float-right mr-2 mt-5">
    <v-btn icon>
      <v-icon color="secondary">mdi-cog</v-icon>
    </v-btn>

    <v-btn icon secondary>
      <v-icon color="secondary">mdi-account-circle</v-icon>
    </v-btn>
  </span>
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
