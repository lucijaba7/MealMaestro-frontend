<template>
  <div>
    <v-row class="mt-3">
      <v-col class="pb-0" cols="12" sm="5" md="4" lg="2" align="start"
        ><v-select :items="meals" label="Meal" v-model="defaultMeal"></v-select
      ></v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" md="3">
        <v-img src="@/assets/meal1.png" class="rounded-xl" height="100%">
        </v-img>
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-row align="end">
          <v-col
            ><div class="font-weight-bold text-h6">
              {{ recipe.name }}
            </div></v-col
          ><v-col>
            <v-row align="center" justify="end">
              <span>cooked </span>
              <v-checkbox v-model="checkbox1"></v-checkbox>
              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-row dense>
          <v-col
            cols="12"
            align-self="end"
            class="font-weight-bold text-subtitle-1"
            >{{ recipe.meal_type }}</v-col
          >
          <v-col cols="12" sm="6">
            {{ recipe.servings }} servings
            <v-icon small class="ml-1">mdi-silverware-fork-knife</v-icon>
            <v-btn
              small
              fab
              class="elevation-0 ml-1"
              max-width="22"
              max-height="22"
              ><v-icon small color="primary">mdi-pencil</v-icon></v-btn
            >
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
            <li v-for="ingredient in recipe.ingredients_list" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
        </v-row>
      </v-col>
      <v-col cols="12">
        <p class="font-weight-bold primaryText--text mb-0">Directions:</p>
        <p>
          {{ recipe.directions }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Recipes, Ingredients } from "@/services";

export default {
  name: "DailyPlan",
  data() {
    return {
      defaultMeal: "Breakfast",
      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
      checkbox1: false,
      recipe: {
        id: "5BH7BBJH6Z6",
        name: "Caribbean Chicken and 'Rice'",
        image: "neka slika",
        meal_type: "Lunch",
        servings: 4,
        total_time: "20 min",
        username: "@sarah_foster",
        ingredients_list: [
          "4 c. riced cauliflower",
          "1/4 c. water",
          "4 skinless, boneless chicken-breast cutlets",
          "2 tsp. olive oil",
          "1/4 c. sweetened cream of coconut",
          "2 tbsp. Hot sauce",
          "2 limes, halved",
          "1 (15-oz.) can black beans, rinsed and drained",
          "Cilantro, chopped, for garnish"
        ],
        directions:
          "Combine riced cauliflower and water; cover with vented plastic wrap and microwave on High 6 minutes. Meanwhile, brush chicken with olive oil; season all over with 1/2 teaspoon each salt and pepper. Grill on medium 5 minutes, turning over once halfway through. Whisk together sweetened cream of coconut and hot sauce; brush onto chicken. Grill until cooked through (165°F), about 5 minutes longer, brushing and turning 2 more times. Grill 2 limes, halved, until lightly charred, 2 to 3 minutes.Toss cooked cauliflower with black beans and 1/4 teaspoon salt. Serve chicken over cauliflower with limes, garnished with chopped cilantro.",
        tags: [
          "Gluten-free",
          "High protein",
          "Low-fat",
          "neki tag",
          "evo joos"
        ],
        date: "22.05.2021.",
        published: true,
        ratings: 4
      }
    };
  },
  created() {
    // let username = localStorage.getItem("username");
    // let startDay = this.$route.query.startDay;
    // let weekDay = this.$route.query.weekDay;
    // this.fetchDailyMeals(username, startDay, weekDay);
    this.fetchIngredients();
  },
  methods: {
    async fetchDailyMeals(username, startDay, weekDay) {
      // let response = await Recipes.getDaily(username, startDay, weekDay);
      // return response.data;
    },
    async fetchIngredients() {
      // let response = await Ingredients.getItems();
      // return response.data;
    }
  }
};
</script>

<style></style>
