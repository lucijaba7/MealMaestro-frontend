<template>
  <!-- <v-row>
    <YourRecipesCard v-for="i in [1, 2, 3, 4, 5, 6, 7, 8]" :key="i" />
  </v-row> -->
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
      <YourRecipesCard :info="recipe" />
    </v-col>
    <v-spacer cols="12" sm="6" md="8" lg="9"></v-spacer>
  </v-row>
</template>

<script>
import YourRecipesCard from "@/components/Cards/YourRecipesCard.vue";
import RecipeService from "@/services/RecipeService";

export default {
  data() {
    return {
      userId: this.$store.getters.getUser._id,
      dialogcard: false,
      infoId: null,
      recipes: []
    };
  },
  methods: {
    async getYourRecipes() {
      let data = await RecipeService.getCustomRecipes(this.userId);
      this.recipes = data;
    }
  },
  components: {
    YourRecipesCard
  },
  created() {
    this.getYourRecipes();
  }
};
</script>

<style scoped></style>
