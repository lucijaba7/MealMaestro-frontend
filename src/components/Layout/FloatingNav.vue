<template>
  <v-col
    cols="6"
    sm="2"
    class="floating-nav"
    order="2"
    order-sm="3"
    align="end"
  >
    <v-btn
      icon
      :to="{
        name: 'Settings',
        query: {
          username: this.username
        }
      }"
    >
      <v-icon color="secondary">mdi-cog</v-icon>
    </v-btn>
    <v-btn
      icon
      :to="{
        name: 'Profile',
        query: {
          username: this.username
        }
      }"
    >
      <v-icon color="secondary">mdi-account-circle</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "FloatingNav",
  data() {
    return {
      username: localStorage.getItem("username")
    };
  }
};
</script>

<style scoped></style>
