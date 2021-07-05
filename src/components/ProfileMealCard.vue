<template>
  <v-card class="mx-5 rounded-xl">
    <v-row>
      <v-col cols="6" sm="4" class="py-0">
        <v-img src="@/assets/meal1.png" class="rounded-xl " height="100%">
        </v-img>
      </v-col>

      <v-col cols="6" sm="8" class="ma-0 ">
        <v-row justify="end" class="py-2 px-1">
          <v-icon fab size="100%" class="px-5 primaryText--text"
            >mdi-dots-horizontal</v-icon
          >
        </v-row>

        <div class="text-h6 font-weight-bold ma-0">
          {{ recipe.name }}
          <div class="text-right pa-0 ma-0"></div>
        </div>
        <v-row class="py-2 px-1">
          <v-col class="ma-0 pl-2 ">
            <span class="pt-0 pl-0 ">{{ recipe.meal_type }}</span>
          </v-col>
          <v-col>
            <StarRating
              :rating="recipe.ratings"
              :star-size="20"
              :increment="0.5"
              :rtl="true"
              :read-only="true"
              :show-rating="false"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: { StarRating },
  data() {
    return {
      recipe: {
        name: "Peanutty Edamame and Noodle Salad",
        meal_type: "Lunch",
        ratings: 4.5
      }
    };
  }
};
</script>
