<template>
  <v-card class="rounded-xl white ma-4" :max-width="maxWidth" height="240">
    <v-checkbox class="float-right mt-2 mr-1" v-model="checkbox1"></v-checkbox>

    <div class="title text-body-1 font-weight-bold pl-3 mt-2">
      {{ recipe.name }}
    </div>
    <div>
      <v-card-text class="py-0 pl-3">{{ recipe.meal_type }}</v-card-text>

      <v-img
        src="@/assets/meal1.png"
        class="img rounded-xl"
        width="100%"
        height="115px"
        fluid
      >
      </v-img>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "WeeklyMealCard",
  data() {
    return {
      checkbox1: true,
      recipe: {
        id: "5BH7BBJH6Z6",
        name: "Caribbean Chicken and 'Rice'aaaaaaaaaaaaaaaaaaaaaaaa",
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
  }
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
