<template>
  <v-card
    @click="dialogcard = !dialogcard"
    class="rounded-xl white mb-4"
    height="230"
    :width="maxWidth"
  >
    <div
      class="text-truncate title text-body-1 font-weight-bold px-4 pt-3 text-left"
    >
      {{ meal.name }}
    </div>
    <v-card-text
      style="font-size: 15px"
      class="py-1 font-weight-bold text-left"
      >{{ meal.meal_type }}</v-card-text
    >
    <v-img
      :src="meal.image"
      class="img rounded-xl"
      width="100%"
      height="155px"
      fluid
    >
    </v-img>
    <ExpandedMealPopup
      :recipeId="meal._id"
      v-model="dialogcard"
      v-if="dialogcard"
    />
  </v-card>
</template>

<script>
import ExpandedMealPopup from "../Popups/ExpandedMealPopup.vue";

export default {
  name: "ChooseMealCard",
  props: ["meal"],
  data() {
    return {
      dialogcard: false
    };
  },
  computed: {
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 170;
        case "sm":
          return 190;
        case "md":
          return 210;
        case "lg":
        case "xl":
          return 230;
      }
    }
  },
  components: { ExpandedMealPopup }
};
</script>

<style scoped>
.v-card {
  cursor: pointer;
}
</style>
