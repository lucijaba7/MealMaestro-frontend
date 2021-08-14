<template>
  <v-row class="my-10" justify="center">
    <v-col
      cols="12"
      sm="6"
      md="4"
      lg="3"
      align="left"
      class="pa-6"
      v-for="recipe in recipes"
      :key="recipe.id"
    >
      <SavedRecipesCard :info="recipe" />
    </v-col>
    <v-spacer cols="12" sm="6" md="8" lg="9"></v-spacer>
  </v-row>
</template>

<script>
import SavedRecipesCard from "@/components/Cards/SavedRecipesCard.vue";

export default {
  data() {
    return {
      recipes: ["a", "B", "C", "D"]
    };
  },
  components: {
    SavedRecipesCard
  },
  // methods: {
  //   async fetchRecipesData() {
  //     const data = await RecipeService.getAllRecipes();

  //     for (var i = 0; i < 5; i++) {
  //       this.recipes.push({
  //         id: data[i]._id,
  //         img: data[i].image,
  //         recipe_name: data[i].name,
  //         type: data[i].meal_type,
  //         meal_tags: data[i].tags,
  //         date: data[i].date_created
  //       });
  //     }
  //     console.log(this.recipes);
  //   }
  // },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>
