<template>
  <v-row class="my-10" justify="center">
    <v-row
      v-if="!this.recipes.length"
      justify="center"
      class="caption mt-15 text-center"
    >
      You haven't saved any recipes. <br />Start browsing others' recipes and
      save them for later.
    </v-row>
    <v-row v-else>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        align="center"
        class="pa-6"
        v-for="recipe in this.recipes"
        :key="recipe._id"
      >
        <v-btn
          absolute
          fab
          class="accent elevation-0 x-button"
          @click="removeFromSaved(recipe._id)"
          width="22.5"
          height="22.5"
          ><v-icon color="white" small>mdi-close</v-icon></v-btn
        >
        <SavedRecipesCard :info="recipe" />
      </v-col>
      <v-spacer cols="12" sm="6" md="8" lg="9"></v-spacer>
    </v-row>
    <v-row
      v-if="this.recipes.length != 0 && this.recipes.length < this.numOfRecipes"
      justify="center"
      class="mb-5"
    >
      <v-btn @click="loadMore()" plain>Load more...</v-btn>
    </v-row>
  </v-row>
</template>

<script>
import SavedRecipesCard from "@/components/Cards/SavedRecipesCard.vue";
import UserService from "@/services/UserService";

export default {
  name: "savedRecipes",
  data() {
    return {
      recipes: [],
      numOfRecipes: this.$store.getters.getUser.saved_recipes.length
    };
  },
  created() {
    this.getSavedRecipes(0, 10);
  },
  methods: {
    async getSavedRecipes(start, end) {
      const newRecipes = await UserService.getSavedRecipes(start, end);

      if (this.recipes.length == 0) {
        this.recipes = newRecipes;
      } else this.recipes = this.recipes.concat(newRecipes);
    },
    loadMore() {
      this.getSavedRecipes(this.recipes.length, this.recipes.length + 10);
    },
    async removeFromSaved(id) {
      this.recipes = this.recipes.filter(function(item) {
        return item._id !== id;
      });

      var recipeIds = this.recipes.map(x => x._id);
      this.numOfRecipes = this.numOfRecipes - 1;

      var userData = this.$store.getters.getUser;
      userData.saved_recipes = recipeIds;

      this.$store.dispatch("updateUser", userData);

      await UserService.removeFromSavedRecipes(id);
    }
  },
  components: {
    SavedRecipesCard
  }
};
</script>

<style scoped>
.x-button {
  margin-left: 115px;
}
</style>
