<template>
  <v-card class="rounded-xl white ma-4" height="280" max-width="230px">
    <!-- <v-row>
      <v-col class="title text-body-1 font-weight-bold pl-3 mt-2">
        {{ recipe.name }}
      </v-col>
    </v-row> -->
    <div class="text-body-1 font-weight-bold pl-3 mt-2">
      {{ recipe.name }}
    </div>
    <v-row>
      <v-col cols="6">
        <v-card-text class="py-1 pl-3 ">{{ recipe.meal_type }}</v-card-text>
      </v-col>
      <v-col cols="6"> </v-col>
    </v-row>
    <div>
      <v-img
        src="@/assets/meal1.png"
        class="img rounded-xl"
        width="100%"
        height="170px"
        fluid
      >
      </v-img>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "YourRecipesCard",
  data() {
    return {
      checkbox1: true,
      recipe: {
        id: "5BH7BBJH6Z6",
        name: "Tomato, Peach, and Basil Salad",
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
  }
};
</script>

<style scoped>
.v-card {
  cursor: pointer;
}
.img {
  position: absolute;
  bottom: 0;
}
</style>
