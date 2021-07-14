<template>
  <v-navigation-drawer class="secondary" app fixed permanent expand-on-hover>
    <v-list nav>
      <v-list-item
        class="navigation-items"
        v-for="link in links"
        :key="link.text"
        router
        :to="link.target"
      >
        <v-list-item-icon>
          <v-icon color="white">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="white--text">{{
          link.text
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
const {
  thisWeeksMonday,
  todaysWeekDay
} = require("@/assets/date/date_handling.js");

export default {
  data() {
    return {
      links: [
        {
          icon: "mdi-home",
          text: "HOME",
          target: { path: "/" }
        },
        {
          icon: "mdi-notebook",
          text: "PLAN",
          target: {
            path: "/plan/daily",
            query: { startDay: thisWeeksMonday(), weekDay: todaysWeekDay() }
          }
        },
        {
          icon: "mdi-room-service",
          text: "RECIPES",
          target: {
            path: "/recipes"
          }
        },
        {
          icon: "mdi-fridge",
          text: "FRIDGE",
          target: {
            path: "/fridge/"
          }
        },
        {
          icon: "mdi-cart",
          text: "GROCERY LIST",
          target: {
            path: "/groceryList"
          }
        }
      ]
    };
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped></style>
