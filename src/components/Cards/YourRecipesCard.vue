<template>
  <v-card class="rounded-xl white ma-4" height="260" max-width="230px">
    <div class="text-truncate text-body-1 font-weight-bold px-4 pt-3 text-left">
      {{ info.name }}
    </div>
    <v-row class="text-left">
      <v-col cols="6" class="pb-0 pt-2">
        <v-card-text style="font-size: 15px" class="py-1 font-weight-bold">{{
          info.meal_type
        }}</v-card-text>
      </v-col>
      <v-rating
        v-if="this.ratings > 0"
        readonly
        :value="ratings"
        background-color="accent"
        color="accent"
        class="mt-3 mr-4 "
        dense
        small
        size="20"
        half-increments
      ></v-rating>
    </v-row>
    <v-img
      :src="info.image"
      @click="dialogcard = !dialogcard"
      class="img rounded-xl"
      width="100%"
      height="170px"
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
  name: "YourRecipesCard",
  data() {
    return {
      dialogcard: false,
      ratings: 0
    };
  },
  props: ["info"],
  created() {
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
.v-card {
  cursor: pointer;
}
.img {
  position: absolute;
  bottom: 0;
}
</style>
