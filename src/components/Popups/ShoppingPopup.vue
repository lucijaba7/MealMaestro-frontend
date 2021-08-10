<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="600"
      @click:outside="show = false"
    >
      <v-card>
        <v-col align="right" class="pb-0">
          <v-btn
            absolute
            right
            fab
            class="accent elevation-0 mt-3"
            @click="show = false"
            width="22.5"
            height="22.5"
            ><v-icon color="white" small>mdi-close</v-icon></v-btn
          >
        </v-col>
        <v-row class="ma-0">
          <v-col cols="12" sm="5" align-self="center">
            <v-img
              src="@/assets/logo.png"
              :width="this.$vuetify.breakpoint.name == 'xs' ? '80%' : '100%'"
              :height="this.$vuetify.breakpoint.name == 'xs' ? '80%' : '100%'"
              class="mx-auto"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="7" class="pa-0">
            <v-card-title
              class="font-weight-bold"
              :style="{
                'fontSize: 20px': this.$vuetify.breakpoint.name == 'xs'
              }"
            >
              Wait! You won’t be able to <br />accomplish this week’s plan.
            </v-card-title>
            <v-card-text>
              Ingredients missing:
              <ul>
                <li
                  v-for="ingredient in missing_ingredients"
                  :key="ingredient.name"
                >
                  {{ ingredient.name }}
                  ( {{ ingredient.quantity }} {{ ingredient.unit }} )
                </li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>

        <v-card-actions class="pa-0">
          <v-row justify="center" class="ma-0">
            <v-btn rounded class="py-3 mb-5 mr-2 primary elevation-0"
              >Generate new plan</v-btn
            >
            <v-btn
              outlined
              rounded
              @click="show = false"
              class="py-3 mb-5 mr-2 elevation-0"
              >Continue shopping</v-btn
            >
          </v-row>
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
      missing_ingredients: [
        { name: "Apple", unit: "g", quantity: 500 },
        { name: "Flour", unit: "g", quantity: 700 },
        { name: "Mushrooms", unit: "kg", quantity: 1 }
      ]
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
  }
};
</script>
