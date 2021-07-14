<template>
  <v-row>
    <v-col>
      <h4 class="ml-5 mt-5">- MON 21 -</h4>
      <v-slide-group
        height="300"
        show-arrows
        next-icon="mdi-chevron-right accent rounded-xl theme--dark"
        prev-icon="mdi-chevron-left accent rounded-xl theme--dark"
      >
        <v-slide-item
          v-for="(item, i) in items"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <WeeklyMealCard />
        </v-slide-item>
        <v-slide-item><AddMealCard /> </v-slide-item> </v-slide-group
    ></v-col>
  </v-row>
</template>

<script>
import WeeklyMealCard from "@/components/Cards/WeeklyMealCard";
import AddMealCard from "@/components/Cards/AddMealCard";

export default {
  name: "WeeklyPlanCarousel",
  data() {
    return {
      items: ["A", "B", "C"]
    };
  },
  components: { WeeklyMealCard, AddMealCard }
};
</script>

<style scoped>
i.v-icon {
  color: white;
}
</style>
