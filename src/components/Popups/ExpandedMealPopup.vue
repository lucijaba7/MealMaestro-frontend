<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="600"
      @click:outside="show = false"
    >
      <!-- ili 800 sirina??? -->
      <v-card>
        <v-img
          src="@/assets/vegetables.jpg"
          height="300"
          class="justify-end"
          align="end"
        >
          <v-btn small fab class="elevation-0 mt-5 mr-5" color="grey lighten-1"
            ><v-icon color="white">{{
              saved ? "mdi-bookmark" : "mdi-bookmark-outline"
            }}</v-icon></v-btn
          >
        </v-img>

        <v-card-title class="headline font-weight-bold pb-0">
          {{ recipe.name }}
        </v-card-title>
        <v-row justify="space-between" class="mx-2">
          <v-card-subtitle class="caption font-weight-bold primaryText--text">
            {{ recipe.username }}
          </v-card-subtitle>
          <v-col
            align="end"
            cols="4"
            sm="3"
            md="3"
            lg="3"
            :class="this.$vuetify.breakpoint.name == 'xs' ? 'mr-3' : ''"
          >
            <v-rating
              readonly
              :value="recipe.ratings"
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
                    <!-- <v-btn
                      small
                      fab
                      class="elevation-0 ml-1"
                      max-width="22"
                      max-height="22"
                      ><v-icon small color="primary">mdi-pencil</v-icon></v-btn
                    >-->
                  </p>
                </v-col>
                <v-col>
                  <p class="ma-0">
                    {{ recipe.total_time }} <v-icon small>mdi-clock</v-icon>
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
                  :key="ingredient"
                >
                  {{ ingredient }}
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
          <v-btn rounded class="py-3 my-5 mr-2 primary elevation-0"
            >Cook something else</v-btn
          >
          <!-- <v-btn outlined rounded  @click="show = false" class="py-3 my-5 mr-2 elevation-0">Close</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      saved: false,
      recipe: {
        id: "5BH7BBJH6Z6",
        name: "Caribbean Chicken and 'Rice'",
        image: "neka slika",
        meal_type: "Lunch",
        servings: 4,
        total_time: "20 min",
        username: "@sarah_foster",
        ingredients_list: [
          "4 c. riced cauliflower",
          "1/4 c. water",
          "4 skinless, boneless chicken-breast cutlets",
          "2 tsp. olive oil",
          "1/4 c. sweetened cream of coconut",
          "2 tbsp. Hot sauce",
          "2 limes, halved",
          "1 (15-oz.) can black beans, rinsed and drained",
          "Cilantro, chopped, for garnish"
        ],
        directions:
          "Combine riced cauliflower and water; cover with vented plastic wrap and microwave on High 6 minutes. Meanwhile, brush chicken with olive oil; season all over with 1/2 teaspoon each salt and pepper. Grill on medium 5 minutes, turning over once halfway through. Whisk together sweetened cream of coconut and hot sauce; brush onto chicken. Grill until cooked through (165°F), about 5 minutes longer, brushing and turning 2 more times. Grill 2 limes, halved, until lightly charred, 2 to 3 minutes.Toss cooked cauliflower with black beans and 1/4 teaspoon salt. Serve chicken over cauliflower with limes, garnished with chopped cilantro.",
        tags: [
          "Gluten-free",
          "High protein",
          "Low-fat",
          "neki tag",
          "evo joos"
        ],
        date: "22.05.2021.",
        published: true,
        ratings: 4.5
      }
    };
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
  components: {}
};
</script>
