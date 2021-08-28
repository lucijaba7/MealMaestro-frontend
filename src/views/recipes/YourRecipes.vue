<template>
  <v-row class="my-10" justify="center">
    <v-row
      v-if="!this.recipes.length"
      justify="center"
      class="caption mt-15 text-center"
    >
      You haven't created a recipe yet. <br />Click on the add button and write
      a new one.
    </v-row>
    <v-row v-else>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        align="center"
        class="pa-6"
        v-for="recipe in recipes"
        :key="recipe._id"
      >
        <v-btn
          absolute
          fab
          class="accent elevation-0 x-button"
          @click="removeRecipe(recipe._id)"
          width="22.5"
          height="22.5"
          ><v-icon color="white" small>mdi-close</v-icon></v-btn
        >

        <YourRecipesCard :info="recipe" />
      </v-col>

      <v-spacer cols="12" sm="6" md="8" lg="9"></v-spacer>
    </v-row>
    <v-row
      v-if="this.recipes.length != 0 && this.recipes.length < this.numOfRecipes"
      justify="center"
      class="mb-5"
      ><v-btn @click="loadMore" plain>Load more...</v-btn></v-row
    >
  </v-row>
</template>

<script>
import YourRecipesCard from "@/components/Cards/YourRecipesCard.vue";
import UserService from "@/services/UserService";

export default {
  name: "yourRecipes",
  data() {
    return {
      recipes: [],
      numOfRecipes: 0
    };
  },
  created() {
    this.getYourRecipes(0, 10);
    this.numOfRecipes = this.$store.getters.getUser.custom_recipes.length;
  },
  methods: {
    async getYourRecipes(start, end) {
      const newRecipes = await UserService.getCustomRecipes(start, end);

      if (this.recipes.length == 0) {
        this.recipes = newRecipes;
      } else this.recipes = this.recipes.concat(newRecipes);
    },
    loadMore() {
      this.getYourRecipes(this.recipes.length, this.recipes.length + 10);
    },
    async removeRecipe(id) {
      this.recipes = this.recipes.filter(function(item) {
        return item._id !== id;
      });

      var recipeIds = this.recipes.map(x => x._id);
      this.numOfRecipes = this.numOfRecipes - 1;

      var userData = this.$store.getters.getUser;
      userData.custom_recipes = recipeIds;

      this.$store.dispatch("updateUser", userData);

      await UserService.removeFromYourRecipes(id);
    }
  },
  components: {
    YourRecipesCard
  }
};
</script>

<style scoped>
.x-button {
  margin-left: 115px;
}
</style>
