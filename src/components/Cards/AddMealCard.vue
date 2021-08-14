<template>
  <v-card
    class="card rounded-xl ma-4"
    flat
    :width="maxWidth"
    @click.stop="dialog = true"
  >
    <div class="text-center font-weight-bold " justify="center">
      Add {{ this.mealType }} <v-icon>mdi-plus</v-icon>
      <ChooseMealPopup v-model="dialog" v-if="dialog" :meal="mealType" />
    </div>
  </v-card>
</template>

<script>
import ChooseMealPopup from "@/components/Popups/ChooseMealPopup";

export default {
  name: "AddMealCard",
  props: ["meal"],
  data() {
    return { dialog: false };
  },
  components: { ChooseMealPopup },
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
    },
    mealType() {
      if (typeof this.meal == "object") return this.meal.recipe.meal_type;
      return meal;
    }
  }
};
</script>

<style scoped>
.card {
  border: 2px dashed lightgray !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffefb;
}
div {
  color: gray;
}
.v-icon {
  display: block;
}
</style>
