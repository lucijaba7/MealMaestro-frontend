<template>
  <v-container fluid>
    <v-row class="mt-3">
      <v-col class="pb-0" cols="12" sm="5" md="4" lg="2" align="start"
        ><v-select :items="meals" label="Meal" v-model="defaultMeal"></v-select
      ></v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row v-if="!recipe"
      ><v-col align="center">
        <div>There is no {{ defaultMeal }} planned for today.</div>
        <div v-if="!confirmed">
          <v-btn
            rounded
            class="py-3 my-3 primary elevation-0"
            @click.stop="dialog = true"
          >
            Add {{ defaultMeal }}</v-btn
          ><ChooseMealPopup
            v-model="dialog"
            v-if="dialog"
            :meal="defaultMeal"
          />
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="4" md="3">
        <v-img :src="recipe.image" class="rounded-xl" height="100%"> </v-img>
      </v-col>
      <v-col cols="12" sm="8" md="9">
        <v-row align="end">
          <v-col cols="8" class="pr-0"
            ><div class="font-weight-bold text-h6">
              {{ recipe.name }}
            </div></v-col
          ><v-col cols="4">
            <v-row
              class="mb-2"
              align="center"
              justify="end"
              v-if="!this.confirmed"
            >
              <v-btn icon @click="removeMeal">
                <v-icon>mdi-delete</v-icon>
              </v-btn></v-row
            ><span v-else>
              <v-row v-if="this.finishedShopping" align="center" justify="end">
                <span>cooked </span>
                <v-checkbox v-model="checkbox1"></v-checkbox>
              </v-row>
            </span>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-row dense>
          <v-col
            cols="12"
            align-self="end"
            class="font-weight-bold text-subtitle-1"
            >{{ this.recipe.meal_type }}</v-col
          >
          <v-col cols="12" sm="6">
            {{ recipe.servings }} servings
            <v-icon small class="ml-1">mdi-silverware-fork-knife</v-icon>
            <!-- <v-btn
              small
              fab
              class="elevation-0 ml-1"
              max-width="22"
              max-height="22"
              ><v-icon small color="primary">mdi-pencil</v-icon></v-btn
            > -->
            <p class="ma-0">
              {{ recipe.total_time }} <v-icon small>mdi-clock</v-icon>
            </p>
          </v-col>
          <v-col cols="12" sm="6"> </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" class="font-weight-bold text-subtitle-1"
            >Ingredients</v-col
          >
          <ul>
            <li v-for="(ingredient, i) in recipe.ingredients_list" :key="i">
              {{ quantity(ingredient.quantity) }} {{ ingredient.unit }}
              {{ ingredient.ingredient.ingredient_name }}
            </li>
          </ul>
        </v-row>
      </v-col>
      <v-col cols="12">
        <p class="font-weight-bold primaryText--text mb-0">Directions:</p>
        <p>
          {{ directions }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChooseMealPopup from "@/components/Popups/ChooseMealPopup";
import DailyPlanService from "@/services/DailyPlanService";

export default {
  name: "DailyPlan",
  props: ["data", "confirmed", "finishedShopping"],
  data() {
    return {
      // defaultMeal: "Breakfast",
      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
      checkbox1: false,
      dialog: false,
      defaultMeal: this.startMeal()
    };
  },
  created() {},
  mounted() {},
  methods: {
    quantity(num) {
      return +parseFloat(num).toFixed(2);
    },
    startMeal() {
      for (var plan of this.data) {
        if (plan.day == this.$route.query.weekDay) {
          for (var meal of plan.meals) {
            if (!meal.recipe.cooked) {
              return meal.recipe.meal_type;
            }
          }
        }
      }
      return "Dinner";
    },
    async removeMeal() {
      let res = await DailyPlanService.deleteMeal(
        this.dailyPlanId,
        this.mealPlanId
      );
      // tu treba maknut iz liste a ne refresht sve
      this.$router.go(0);
    }
  },
  computed: {
    recipe() {
      for (var plan of this.data) {
        if (plan.day == this.$route.query.weekDay) {
          for (var meal of plan.meals) {
            if (meal.recipe.meal_type == this.defaultMeal) {
              return meal.recipe;
            }
          }
        }
      }
      return null;
    },
    dailyPlanId() {
      for (var plan of this.data) {
        if (plan.day == this.$route.query.weekDay) {
          return plan._id;
        }
      }
      return null;
    },
    mealPlanId() {
      for (var plan of this.data) {
        if (plan.day == this.$route.query.weekDay) {
          for (var meal of plan.meals) {
            if (meal.recipe.meal_type == this.defaultMeal) {
              return meal._id;
            }
          }
        }
      }
      return null;
    },
    directions() {
      var parser = new DOMParser();
      var doc = parser.parseFromString(this.recipe.directions, "text/html");
      return doc.body.firstChild.textContent;
    }
  },
  components: { ChooseMealPopup }
};
</script>

<style></style>
