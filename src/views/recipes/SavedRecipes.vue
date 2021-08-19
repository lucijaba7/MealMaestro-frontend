<template>
  <v-row class="my-10" justify="center">
    <v-row
      v-if="!recipes.length"
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
        <router-link
          :to="`/recipes/savedRecipes/${recipe._id}`"
          :key="recipe._id"
          style="text-decoration:none"
        >
          <SavedRecipesCard :info="recipe" />
        </router-link>
      </v-col>
      <v-spacer cols="12" sm="6" md="8" lg="9"></v-spacer>

      <router-view></router-view>
    </v-row>
  </v-row>
</template>

<script>
import SavedRecipesCard from "@/components/Cards/SavedRecipesCard.vue";
import UserService from "@/services/UserService";

export default {
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
      let data = await UserService.getSavedRecipes("");
      console.log("Data", data);
      this.recipes = data;
    }
  },
  components: {
    SavedRecipesCard
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>
