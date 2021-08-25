<template>
  <v-card
    v-if="this.mealExists"
    class="rounded-xl white ma-4"
    :width="maxWidth"
    height="240"
  >
    <v-checkbox
      class="float-right mt-2 mr-1"
      v-model="meal.cooked"
      v-if="this.confirmed"
    ></v-checkbox>
    <v-btn class="mt-1 mr-1 float-right" v-else icon @click="removeMeal"
      ><v-icon>mdi-delete</v-icon></v-btn
    >

    <div class="title text-body-1 font-weight-bold pl-3 mt-2">
      {{ meal.recipe.name }}
    </div>
    <div>
      <v-card-text class="py-0 pl-3">{{ meal.recipe.meal_type }}</v-card-text>

      <v-img
        :src="meal.recipe.image"
        @click="dialogcard = !dialogcard"
        class="img rounded-xl"
        width="100%"
        height="115px"
        fluid
      >
      </v-img>
    </div>
    <ExpandedMealPopup
      :recipeId="meal.recipe._id"
      v-model="dialogcard"
      v-if="dialogcard"
    />
  </v-card>
  <AddMealCard
    v-else
    :mealType="this.meal_type"
    :dailyPlanId="this.dailyPlanId"
  />
</template>

<script>
import AddMealCard from "@/components/Cards/AddMealCard";
import WeeklyPlanService from "@/services/WeeklyPlanService";
import DailyPlanService from "@/services/DailyPlanService";
import ExpandedMealPopup from "../Popups/ExpandedMealPopup.vue";

export default {
  name: "WeeklyMealCard",
  props: ["meal", "confirmed", "dailyPlanId"],
  data() {
    return {
      mealExists: typeof this.meal == "object",
      userId: this.$store.getters.getUser._id,
      meal_type:
        typeof this.meal == "object" ? this.meal.recipe.meal_type : this.meal,
      dialogcard: false
    };
  },
  mounted() {},
  methods: {
    async removeMeal() {
      let res = await DailyPlanService.deleteMeal(
        this.dailyPlanId,
        this.meal._id
      );

      this.mealExists = false;
    }
  },
  computed: {
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 180;
        case "sm":
          return 200;
        case "md":
          return 230;
        case "lg":
        case "xl":
          return 250;
      }
    }
  },
  components: { AddMealCard, ExpandedMealPopup }
};
</script>

<style scoped>
.title {
  overflow: hidden;
  overflow-wrap: anywhere;
  /* word-wrap: break-word; */
  /* word-break: normal; */
  height: 90px;
}
.v-card {
  cursor: pointer;
}
.img {
  position: absolute;
  bottom: 0;
}
</style>
