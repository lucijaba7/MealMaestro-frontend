<template>
  <v-row class="my-10" justify="center">
    <v-row v-if="!recipes.length" justify="center" class="mt-15 text-center">
      You haven't created a recipe yet. <br />Click on the add button and write
      a new one.
    </v-row>
    <v-row>
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
        <router-link
          :to="`/recipes/yourRecipes/${recipe._id}`"
          :key="recipe._id"
          style="text-decoration:none"
        >
          <YourRecipesCard :info="recipe" />
        </router-link>
      </v-col>
      <v-spacer cols="12" sm="6" md="8" lg="9"></v-spacer>

      <router-view></router-view> </v-row
  ></v-row>
</template>

<script>
import YourRecipesCard from "@/components/Cards/YourRecipesCard.vue";
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      recipes: []
    };
  },
  created() {
    this.getYourRecipes();
  },
  methods: {
    async getYourRecipes() {
      let data = await UserService.getCustomRecipes();
      this.recipes = data;
    }
  },
  components: {
    YourRecipesCard
  }
};
</script>
