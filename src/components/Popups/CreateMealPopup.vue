<template>
  <v-row>
    <v-dialog
      v-model="show"
      persistent
      max-width="700"
      @click:outside="show = false"
    >
      <v-card>
        <v-card-title class="headline font-weight-bold pb-0">
          Let's create a new meal!
        </v-card-title>
        <v-col class="pb-0" cols="12" align="start">
          <v-text-field
            label="Meal name"
            v-model="mealName"
            type="text"
            :rules="inputRules"
          ></v-text-field>
        </v-col>
        <v-col class="pb-0" cols="12" sm="5" md="4" lg="4" align="start"
          ><v-select :items="meals" label="Meal type"></v-select
        ></v-col>
        <v-col class="pb-0" cols="12" sm="5" md="4" lg="4" align="start">
          <v-text-field
            label="Servings"
            v-model="servings"
            type="number"
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col class="pb-0" cols="6" sm="5" md="4" lg="4" align="start">
            <v-text-field
              label="Total time"
              v-model="totalTime"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col class="pb-0" cols="6" sm="2" md="2" lg="2" align="start"
            ><v-select :items="timeType"></v-select
          ></v-col>
        </v-row>
        <v-card-subtitle class="pt-5 pl-2">
          Ingredients
        </v-card-subtitle>
        <v-row>
          <v-col> </v-col>
        </v-row>
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
      mealName: "",
      defaultMeal: "Breakfast",
      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
      servings: Number,
      totalTime: Number,
      timeType: ["h", "min"],
      inputRules: [v => v.length >= 5 || "Minimum length is 5 characters"]
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
