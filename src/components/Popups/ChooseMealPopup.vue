<template>
  <v-dialog
    class="ma-0 popup "
    v-model="show"
    v-if="loaded"
    persistent
    max-width="600"
    eager
    @click:outside="closeDialog"
  >
    <v-card class="pa-3 white">
      <v-btn
        absolute
        right
        fab
        class="accent elevation-0 "
        @click="closeDialog"
        width="22.5"
        height="22.5"
        ><v-icon color="white" small>mdi-close</v-icon></v-btn
      >
      <v-row align="center">
        <v-col cols="3" class="ma-2"
          ><v-img src="@/assets/logo.png"></v-img
        ></v-col>
        <v-col cols="8"
          ><div class="font-weight-bold">Want to cook something else?</div>
          <div>Choose one of the meals for {{ meal }} from below!</div> </v-col
        ><v-spacer cols="1"></v-spacer>
      </v-row>
      <v-row v-for="group in this.recipes" :key="group.header">
        <v-col class="pa-0">
          <h4 class="ml-10 mt-5">- {{ group.header }} -</h4>
          <v-slide-group
            height="300"
            show-arrows
            next-icon="mdi-chevron-right accent rounded-xl theme--dark"
            prev-icon="mdi-chevron-left accent rounded-xl theme--dark"
          >
            <v-slide-item
              v-for="(meal, i) in group.recipes"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-col align="center">
                <ChooseMealCard :meal="meal" />

                <v-btn
                  rounded
                  outlined
                  class="elevation-0"
                  style="margin:auto"
                  @click="addMeal(meal._id)"
                  >SELECT</v-btn
                >
              </v-col>
            </v-slide-item>
          </v-slide-group></v-col
        >
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import ChooseMealCard from "@/components/Cards/ChooseMealCard";
import RecipeService from "@/services/RecipeService";
import UserService from "@/services/UserService";

export default {
  name: "ChooseMealPopup",
  props: {
    value: Boolean,
    multiple: {
      type: Boolean,
      default: false
    },
    meal: String
  },
  data() {
    return {
      recipes: [],
      userId: this.$store.getters.getUser._id,
      loaded: false
    };
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    closeDialog() {
      this.show = false;
    },
    async fetchRecipes() {
      const custom = await UserService.getCustomRecipesByMealType(this.meal);
      if (custom.length)
        this.recipes.push({ header: "Your recipes", recipes: custom });

      const saved = await UserService.getSavedRecipesByMealType(this.meal);
      if (saved.length)
        this.recipes.push({ header: "Saved recipes", recipes: saved });

      const recommended = await RecipeService.recommendRecipesByMealType(
        this.meal,
        0
      );
      if (recommended.length)
        this.recipes.push({ header: "Recommended", recipes: recommended });

      this.loaded = true;
    },
    addMeal(mealId) {
      this.$emit("mealId", mealId);
      this.show = false;
    }
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: { ChooseMealCard }
};
</script>
