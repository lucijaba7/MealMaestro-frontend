<template>
  <span>
    <v-row v-for="day in this.weekDays" :key="day">
      <v-col class="pa-0">
        <h4 class="ml-10 mt-5">- {{ day }} -</h4>
        <v-slide-group
          height="300"
          show-arrows
          next-icon="mdi-chevron-right accent rounded-xl theme--dark"
          prev-icon="mdi-chevron-left accent rounded-xl theme--dark"
        >
          <v-slide-item
            v-for="(meal, i) in meals"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <WeeklyMealCard
              :meal="mealDetails(day, meal)"
              :confirmed="confirmed"
            />
          </v-slide-item> </v-slide-group
      ></v-col> </v-row
  ></span>
</template>

<script>
import WeeklyMealCard from "@/components/Cards/WeeklyMealCard";

export default {
  name: "WeeklyPlan",
  props: ["data", "confirmed"],
  data() {
    return {
      weekDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"]
    };
  },
  components: {
    WeeklyMealCard
  },
  mounted() {},
  methods: {
    dayDetails(day) {
      for (var plan of this.data) {
        if (day == plan.day) {
          return plan.daily_plan;
        }
      }
      return [];
    },
    mealDetails(day, meal_type) {
      for (var plan of this.data) {
        if (day == plan.day) {
          for (var meal of plan.daily_plan) {
            if (meal_type == meal.recipe.meal_type) {
              return meal;
            }
          }
        }
      }
      return meal_type;
    }
  }
};
</script>

<style></style>
