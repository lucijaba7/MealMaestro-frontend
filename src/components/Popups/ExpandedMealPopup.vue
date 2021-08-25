<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="600" @click:outside="show = false">
      <v-card>
        <v-img :src="recipe.image" height="300" class="justify-end" align="end">
          <v-btn
            v-if="
              this.$route.query.username ||
                this.$route.path == '/recipes/savedRecipes' ||
                this.$route.path == '/plan/weekly' ||
                this.$route.path == '/'
            "
            @click="editSavedRecipes()"
            small
            fab
            class="elevation-0 mt-5 mr-5"
            color="grey lighten-1"
            ><v-icon color="white">{{
              saved ? "mdi-bookmark" : "mdi-bookmark-outline"
            }}</v-icon></v-btn
          >
        </v-img>

        <v-card-title class="headline font-weight-bold pb-0">
          {{ recipe.name }}
        </v-card-title>
        <v-row justify="space-between" class="mx-1">
          <v-card-subtitle>
            <router-link
              :to="{
                name: 'Profile',
                query: { username: recipe.username }
              }"
              class="caption font-weight-bold primaryText--text"
              style="text-decoration:none; cursor:pointer"
              >@{{ recipe.username }}
            </router-link></v-card-subtitle
          >
          <v-col
            align="end"
            cols="4"
            sm="3"
            md="3"
            lg="3"
            :class="this.$vuetify.breakpoint.name == 'xs' ? 'mr-10' : 'mr-2'"
          >
            <v-rating
              readonly
              :value="ratings"
              background-color="accent "
              color="accent"
              dense
              size="20"
              half-increments
            ></v-rating>
          </v-col>
        </v-row>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <v-row class="mt-2">
            <v-col cols="12" sm="6">
              <p class="font-weight-bold primaryText--text ma-0">
                {{ recipe.meal_type }}
              </p>
              <v-row dense>
                <v-col>
                  <p class="ma-0">
                    {{ recipe.servings }} servings
                    <v-icon small class="ml-1"
                      >mdi-silverware-fork-knife</v-icon
                    >
                  </p>
                </v-col>
                <v-col>
                  <p class="ma-0">
                    {{ recipe.total_time }} min <v-icon small>mdi-clock</v-icon>
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-chip
                  v-for="tag in recipe.tags"
                  :key="tag"
                  class="ma-1"
                  color="primary"
                >
                  {{ tag }}
                </v-chip>
              </v-row>
              <p class="font-weight-bold primaryText--text mt-5 mb-0">
                Ingredients:
              </p>
              <ul>
                <li
                  v-for="ingredient in recipe.ingredients_list"
                  :key="ingredient._id"
                >
                  {{
                    ingredient.quantity % 1 == 0
                      ? ingredient.quantity
                      : ingredient.quantity.toFixed(1)
                  }}
                  {{ ingredient.unit }}
                  {{ ingredient.ingredient.ingredient_name }}
                </li>
              </ul>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="font-weight-bold primaryText--text mb-0">Directions:</p>
              <p>
                {{ recipe.directions }}
              </p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            @click="show = false"
            class="py-3 my-5 mr-2 primary elevation-0"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import RecipeService from "@/services/RecipeService";
import UserService from "@/services/UserService";

export default {
  name: "ExpandedMealPopup",
  props: {
    value: Boolean,
    recipeId: String
  },
  data() {
    return {
      saved: false,
      recipe: {},
      ratings: 0
    };
  },
  created() {
    // this.recipeId = this.$route.params.id;
    this.getRecipe();
    this.checkIfSaved();
  },
  methods: {
    hidePopup() {
      console.log(this.$router);
      this.$router.go(-1);
    },
    async getRecipe() {
      let data = await RecipeService.getRecipeById(this.recipeId);
      this.recipe = data;
    },
    async checkIfSaved() {
      let savedRecipes = await UserService.getSavedRecipes("", "");
      if (savedRecipes.some(recipe => recipe._id === this.recipeId))
        this.saved = true;
      else this.saved = false;
    },
    async editSavedRecipes() {
      if (this.saved) {
        let response = await UserService.removeFromSavedRecipes(this.recipeId);
        this.saved = false;
      } else {
        let response = await UserService.saveRecipe(this.recipeId);
        this.saved = true;
      }
    }
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    },
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "80%";
        case "sm":
          return "60%";
        case "md":
          return "50%";
        case "lg":
          return "40%";
        case "xl":
          return 160;
      }
    }
  }
};
</script>
