<template>
  <v-card
    @click="dialogcard = !dialogcard"
    class="rounded-xl white ma-4"
    height="260"
    max-width="230px"
  >
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
        readonly
        :value="0"
        background-color="accent"
        color="accent"
        class="mt-2 mr-4"
        dense
        small
        size="20"
        half-increments
      ></v-rating>
    </v-row>
    <v-row class="pl-3">
      <v-card-text class="caption font-weight-bold pt-0"
        >By @{{ info.username }}</v-card-text
      >
    </v-row>
    <v-img
      :src="info.image"
      class="img rounded-xl"
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

export default {
  name: "SavedRecipesCard",
  props: ["info"],
  data() {
    return {
      dialogcard: false
    };
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
