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
        align="left"
        class="pa-6"
        v-for="recipe in recipes"
        :key="recipe._id"
      >
        <v-btn
          absolute
          fab
          class="accent elevation-0 "
          @click="removeFromSaved(recipe._id)"
          width="22.5"
          height="22.5"
          ><v-icon color="white" small>mdi-close</v-icon></v-btn
        >
        <SavedRecipesCard :info="recipe" />
      </v-col>
      <v-spacer cols="12" sm="6" md="8" lg="9"></v-spacer>
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
      recipes: []
    };
  },
  created() {
    this.getSavedRecipes();
  },
  methods: {
    async getSavedRecipes() {
      let data = await UserService.getSavedRecipes();
      if (data.length) this.recipes = data;
    },
    async removeFromSaved(id) {
      this.recipes = this.recipes.filter(function(item) {
        return item._id !== id;
      });

      let response = await UserService.removeFromSavedRecipes(id);
    }
  },
  components: {
    SavedRecipesCard
  }
};
</script>
