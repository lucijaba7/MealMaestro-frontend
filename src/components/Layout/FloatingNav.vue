<template>
  <v-item-group v-if="device != 'xs'">
    <v-btn
      class="mt-12 mr-2"
      fab
      top
      right
      absolute
      icon
      large
      :to="{
        name: 'Profile'
      }"
    >
      <!-- query: {
          username: this.username
        } -->
      <v-icon color="secondary">mdi-account-circle</v-icon></v-btn
    >
    <v-btn
      class="mt-12 mr-15"
      fab
      top
      right
      absolute
      icon
      large
      :to="{
        path: '/plan/daily',
        query: {
          startDay: this.thisWeeksMonday(),
          weekDay: this.todaysWeekDay()
        }
      }"
    >
      <v-icon color="secondary">mdi-notebook</v-icon></v-btn
    >
  </v-item-group>
  <v-speed-dial
    v-else
    v-model="fab"
    top
    right
    absolute
    direction="left"
    transition="slide-x-reverse-transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" small fab class="secondary">
        <v-icon v-if="fab">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      large
      :to="{
        name: 'Profile'
      }"
      ><!-- query: {
          username: this.username
        } -->
      <v-icon color="secondary">mdi-account-circle</v-icon></v-btn
    >
    <v-btn
      fab
      large
      :to="{
        path: '/plan/daily',
        query: {
          startDay: this.thisWeeksMonday(),
          weekDay: this.todaysWeekDay()
        }
      }"
    >
      <v-icon color="secondary">mdi-notebook</v-icon></v-btn
    >
  </v-speed-dial>
</template>

<script>
const {
  thisWeeksMonday,
  todaysWeekDay
} = require("@/assets/date/date_handling.js");

export default {
  name: "FloatingNav",
  data() {
    return {
      username: localStorage.getItem("username"),
      fab: false,
      thisWeeksMonday,
      todaysWeekDay
    };
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>

<style scoped>
.v-item-group {
  z-index: 101;
}
</style>
