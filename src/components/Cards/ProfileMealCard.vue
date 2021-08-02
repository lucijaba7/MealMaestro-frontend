<template>
  <v-card class="rounded-xl">
    <v-row>
      <v-col cols="12" sm="12" md="5" lg="5" class="py-0">
        <v-img src="@/assets/meal1.png" class="rounded-xl">
          <!-- max-height="250px" -->
        </v-img>
      </v-col>

      <v-col cols="12" sm="12" md="7" lg="7">
        <v-row justify="end" class="py-2 px-5">
          <v-icon fab size="100%" class="px-5 primaryText--text"
            >mdi-dots-horizontal</v-icon
          >
        </v-row>
        <v-card-title class="text-h6 font-weight-bold pa-0 mx-2 mt-2">
          {{ recipe.name }}
        </v-card-title>

        <v-row justify="space-between" class="pa-0 mx-2">
          <v-card-subtitle
            class="caption font-weight-bold primaryText--text px-0 pb-0"
          >
            {{ recipe.meal_type }}
          </v-card-subtitle>
          <v-col
            align="end"
            cols="6"
            :class="this.$vuetify.breakpoint.name == 'lg' ? 'mr-3 pb-0' : ''"
          >
            <v-rating
              readonly
              :value="recipe.ratings"
              background-color="accent"
              color="accent"
              dense
              size="20"
              half-increments
            ></v-rating>
          </v-col>
        </v-row>
        <v-row :class="this.$vuetify.breakpoint.name == 'lg' ? 'pt-2' : 'mt-0'">
          <v-col cols="12" class="py-0">
            <v-chip
              v-for="tag in recipe.tags"
              :key="tag"
              class="ma-1"
              color="primary"
            >
              {{ tag }}
            </v-chip></v-col
          >
        </v-row>
        <v-row
          cols="12"
          justify="end"
          :class="
            this.$vuetify.breakpoint.name == 'xs' ? 'pr-8 mt-3' : 'pr-8 mt-0'
          "
        >
          {{ recipe.date }}</v-row
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        name: "Peanutty Edamame and Noodle Salad",
        meal_type: "Lunch",
        ratings: 4.5,
        tags: [
          "Gluten-free",
          "Vegetarian",
          "Vegan",
          "Dairy-free",
          "Very healthy",
          "Cheap",
          "Low Food Map"
        ],
        date: "22 April 2021"
      }
    };
  }
};
</script>
