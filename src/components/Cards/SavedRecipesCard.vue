<template>
  <v-card class="rounded-xl white ma-4" height="260" max-width="230px">
    <div class="text-truncate text-body-1 font-weight-bold px-4 pt-3">
      {{ info.name }}
    </div>
    <v-row>
      <v-col cols="6" class="pb-0 pt-2">
        <v-card-text
          style="font-size: 15px"
          class="py-1 pl-4 font-weight-bold"
          >{{ info.meal_type }}</v-card-text
        >
      </v-col>
      <v-rating
        v-if="this.ratings > 0"
        readonly
        :value="ratings"
        background-color="accent"
        color="accent"
        class="mt-2 mr-4"
        dense
        small
        size="20"
        half-increments
      ></v-rating>
    </v-row>
    <v-row class="pl-3 mt-2">
      <router-link
        :to="{
          name: 'Profile',
          query: { username: info.username }
        }"
        class="font-weight-bold text--primary pointer pl-4"
        style="text-decoration:none; font-size:15px"
        >By @{{ info.username }}</router-link
      >
    </v-row>
    <v-img
      :src="info.image"
      @click="dialogcard = !dialogcard"
      class="img rounded-xl pointer"
      width="100%"
      height="160px"
      fluid
      align="end"
    >
    </v-img>

    <ExpandedMealPopup
      :recipeId="info._id"
      v-model="dialogcard"
      v-if="dialogcard"
    />
  </v-card>
</template>

<script>
import ExpandedMealPopup from "../Popups/ExpandedMealPopup.vue";
import RecipeService from "@/services/RecipeService";

export default {
  name: "SavedRecipesCard",
  props: ["info"],
  data() {
    return {
      dialogcard: false,
      ratings: 0
    };
  },
  computed() {
    this.getRating();
  },
  methods: {
    async getRating() {
      let data = await RecipeService.getRating(this.info._id);
      if (data.length) this.ratings = data[0].rating;
    }
  },
  components: { ExpandedMealPopup }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.img {
  position: absolute;
  bottom: 0;
}
</style>
