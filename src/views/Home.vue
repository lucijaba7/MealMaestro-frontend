<template>
  <v-container fluid class="pt-8">
    <v-row>
      <v-col cols="12" class="pb-0">
        <p class="text-h3 mt-5 mb-1">BROWSE RECIPES</p>
      </v-col>
      <v-col cols="12" class="pt-0">
        <p class="pl-2">
          Want to try something new? Browse recipes recommended just for you!
        </p>
      </v-col>
    </v-row>
    <v-divider class="my-3"></v-divider>

    <v-col cols="12">
      <v-autocomplete
        :disabled="isUpdating"
        :items="allRecipes"
        color="seondary lighten-2"
        label="Search"
        item-text="name"
        item-value="name"
        max-width="300px"
      >
        <template v-slot:item="data">
          <v-list-item-avatar>
            <img :src="data.item.image" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              @click="popup(data.item._id)"
              v-html="data.item.name"
            ></v-list-item-title>
          </v-list-item-content>
        </template>
      </v-autocomplete>
      <ExpandedMealPopup
        :recipeId="recipeId"
        v-model="dialogcard"
        v-if="dialogcard"
      />
    </v-col>

    <v-container>
      <v-row
        v-if="this.recommendedRecipes.length"
        class="my-10"
        justify="center"
      >
        <v-col
          cols="12"
          md="6"
          align="left"
          class="pa-8"
          v-for="recipe in recommendedRecipes"
          :key="recipe.id"
        >
          <ProfileMealCard :info="recipe" />
        </v-col>
        <v-spacer cols="12" md="6"></v-spacer>
      </v-row>
      <v-row
        v-if="this.recommendedRecipes.length < this.numOfRecipes"
        justify="center"
        class="mb-5"
        ><v-btn @click="loadMore" plain>Load more...</v-btn></v-row
      >
      <v-row v-else justify="center" class="caption my-8 text-center"
        >No more recipes to show.</v-row
      >
    </v-container>
  </v-container>
</template>

<script>
import ProfileMealCard from "@/components/Cards/ProfileMealCard.vue";
import ExpandedMealPopup from "../components/Popups/ExpandedMealPopup.vue";
import RecipeService from "../services/RecipeService";

export default {
  name: "Home",
  data() {
    return {
      dialogcard: false,
      allRecipes: [],
      recommendedRecipes: [],
      numOfRecipes: 200,
      recipeId: "",
      autoUpdate: true,
      isUpdating: false
    };
  },
  components: {
    ExpandedMealPopup,
    ProfileMealCard
  },
  created() {
    this.getAllRecipes();
    this.getRecommendedRecipes(0);
  },
  methods: {
    async getAllRecipes() {
      let data = await RecipeService.getAllRecipes();
      this.allRecipes = data;
    },
    async getRecommendedRecipes(offset) {
      const newRecipes = await RecipeService.recommendRecipesByMealType(
        "",
        offset
      );

      if (this.recommendedRecipes.length == 0)
        this.recommendedRecipes = newRecipes;
      else this.recommendedRecipes = this.recommendedRecipes.concat(newRecipes);
    },
    loadMore() {
      this.getRecommendedRecipes(this.recommendedRecipes.length + 10);
    },
    popup(id) {
      this.recipeId = id;
      this.dialogcard = !this.dialogcard;
    }
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  }
};
</script>

<style scoped>
.main_divider {
  border-top: 1px solid black;
}
</style>
