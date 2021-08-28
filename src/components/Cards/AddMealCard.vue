<template>
  <v-card
    class="card rounded-xl ma-4"
    flat
    :width="maxWidth"
    @click.stop="dialog = true"
    min-height="240px"
  >
    <div class="text-center font-weight-bold " justify="center">
      Add {{ this.mealType }} <v-icon>mdi-plus</v-icon>
      <ChooseMealPopup
        v-model="dialog"
        v-if="dialog"
        :meal="mealType"
        @mealId="addMeal"
      />
    </div>
  </v-card>
</template>

<script>
import ChooseMealPopup from "@/components/Popups/ChooseMealPopup";
import DailyPlanService from "@/services/DailyPlanService";

export default {
  name: "AddMealCard",
  props: ["mealType", "dailyPlanId"],
  data() {
    return { dialog: false };
  },
  components: { ChooseMealPopup },
  mounted() {},
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
  methods: {
    async addMeal(id) {
      await DailyPlanService.addMeal(this.dailyPlanId, id);
      this.$router.go(0);
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
