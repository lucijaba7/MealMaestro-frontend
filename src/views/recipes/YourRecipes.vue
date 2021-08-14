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
      <router-link :to="`/recipes/yourRecipes/${recipe}`" :key="recipe">
        <YourRecipesCard :info="recipe" />
      </router-link>
    </v-col>
    <v-spacer cols="12" sm="6" md="8" lg="9"></v-spacer>¨

    <router-view></router-view>
  </v-row>
</template>

<script>
import YourRecipesCard from "@/components/Cards/YourRecipesCard.vue";

export default {
  data() {
    return {
      dialogcard: false,
      showModal: this.$store.getters.isVisible,
      infoId: null,
      recipes: ["a", "B", "C", "D"]
    };
  },
  methods: {},
  components: {
    YourRecipesCard
  }
};
</script>
