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
        <v-row class=" px-1">
          <v-col class="ma-0 pl-2 ">
            <span class="pt-0 pl-0 ">{{ recipe.meal_type }}</span>
          </v-col>
          <v-col align="end" cols="2" sm="8" class="ma-0 ">
            <StarRating
              :rating="recipe.ratings"
              :star-size="20"
              :increment="0.5"
              :inline="true"
              :read-only="true"
              :show-rating="false"
            />
          </v-col>
        </v-row>
        <v-row class=" px-1 ">
          <v-chip
            v-for="tag in recipe.tags"
            :key="tag"
            class="ma-1"
            color="primary"
          >
            {{ tag }}
          </v-chip>
        </v-row>
        <v-row justify="end" class=" px-1 ">
          <span>{{ recipe.date }}</span></v-row
        >
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
        ratings: 4.5,
        tags: [
          "Gluten-free",
          "High protein",
          "Low-fat",
          "vegeterian",
          "volim jest"
        ],
        date: "22 April 2021"
      }
    };
  }
};
</script>
