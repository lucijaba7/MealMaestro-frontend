<template>
  <v-container fluid>
    <v-row class="mt-3">
      <v-col class="pb-0" cols="12" sm="5" md="4" lg="2" align="start"
        ><v-select :items="meals" label="Meal" v-model="defaultMeal"></v-select
      ></v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row v-if="!this.meal"
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
            @mealId="addMeal"
          />
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="4" md="3">
        <v-img :src="this.meal.recipe.image" class="rounded-xl" height="100%">
        </v-img>
      </v-col>
      <v-col cols="12" sm="8" md="9">
        <v-row align="end">
          <v-col cols="8" class="pr-0"
            ><div class="font-weight-bold text-h6">
              {{ this.meal.recipe.name }}
            </div></v-col
          >
          <v-col cols="4">
            <v-row
              class="mb-2"
              align="center"
              justify="end"
              v-if="!this.confirmed"
            >
              <v-btn icon @click="removeMeal">
                <v-icon>mdi-delete</v-icon>
              </v-btn></v-row
            >
            <span v-else>
              <v-row v-if="this.finishedShopping" align="center" justify="end">
                <span>cooked </span>
                <v-checkbox
                  v-model="cooked[defaultMeal]"
                  :disabled="cooked[defaultMeal]"
                  @click="cookMeal()"
                ></v-checkbox>
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
            >{{ this.meal.recipe.meal_type }}</v-col
          >
          <v-col cols="12" sm="6">
            {{ this.meal.recipe.servings }} servings
            <v-icon small class="ml-1">mdi-silverware-fork-knife</v-icon>

            <p class="ma-0">
              {{ this.meal.recipe.total_time }} min
              <v-icon small>mdi-clock</v-icon>
            </p>
          </v-col>
          <v-col cols="12" sm="6"> </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" class="font-weight-bold text-subtitle-1"
            >Ingredients</v-col
          >
          <ul>
            <li
              v-for="(ingredient, i) in this.meal.recipe.ingredients_list"
              :key="i"
            >
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
    <RatingPopup :info="meal.recipe" v-model="rating" v-if="rating" />
  </v-container>
</template>

<script>
import ChooseMealPopup from "@/components/Popups/ChooseMealPopup";
import DailyPlanService from "@/services/DailyPlanService";
import RatingPopup from "@/components/Popups/RatingPopup.vue";

export default {
  name: "DailyPlan",
  props: ["data", "confirmed", "finishedShopping"],
  data() {
    return {
      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
      dialog: false,
      defaultMeal: this.startMeal(),
      cooked: this.cookedObject(),
      rating: false
    };
  },
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
    cookedObject() {
      var cooked = {};
      for (var day_plan of this.data) {
        if (day_plan.day == this.$route.query.weekDay) {
          for (var meal of day_plan.meals) {
            cooked[meal.recipe.meal_type] = meal.cooked;
          }
        }
      }
      return cooked;
    },
    async removeMeal() {
      await DailyPlanService.deleteMeal(this.dailyPlanId, this.mealPlanId);

      this.$router.go(0);
    },
    async addMeal(id) {
      await DailyPlanService.addMeal(this.dailyPlanId, id);

      this.$router.go(0);
    },
    async cookMeal() {
      this.disabled = true;
      await DailyPlanService.cookMeal(this.dailyPlanId, this.meal._id);

      if (!this.meal.recipe.ratings) this.rating = true;
      else if (
        this.meal.recipe.ratings.find(
          rating => rating.username == this.username
        ) == undefined
      )
        this.rating = true;
    }
  },
  computed: {
    meal() {
      for (var plan of this.data) {
        if (plan.day == this.$route.query.weekDay) {
          for (var meal of plan.meals) {
            if (meal.recipe.meal_type == this.defaultMeal) {
              return meal;
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
      var doc = parser.parseFromString(
        this.meal.recipe.directions,
        "text/html"
      );
      return doc.body.firstChild.textContent;
    }
  },
  watch: {
    $route: function() {
      this.cooked = this.cookedObject();
      this.defaultMeal = this.startMeal();
    }
  },
  components: { ChooseMealPopup, RatingPopup }
};
</script>

<style></style>
