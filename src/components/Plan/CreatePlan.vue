<template>
  <v-card class="card mt-13 mx-auto white" flat max-width="550">
    <v-row>
      <v-col cols="12" align-self="center">
        <v-row justify="center">
          <div class="mb-5 text-h5 font-weight-bold" style="text-align: center">
            It’s time to prepare for next week!
          </div></v-row
        >
      </v-col>
      <v-col cols="12" sm="6" align-self="center">
        <v-row :justify="device == 'xs' ? 'center' : 'end'">
          <v-img
            class="mx-3"
            src="@/assets/logo.png"
            :max-width="maxWidth"
          ></v-img>
        </v-row> </v-col
      ><v-col cols="12" sm="6" align-self="center">
        <v-row :justify="device == 'xs' ? 'center' : 'start'">
          <div style="text-align: center">
            MealMaestro will do everything in his power to create the perfect
            meal plan for you!
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" align-self="center">
        <v-row justify="center">
          <v-btn
            rounded
            class="py-3 my-3 primary elevation-0 "
            @click="createPlan"
          >
            CREATE PLAN</v-btn
          ></v-row
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CreatePlan",
  computed: {
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 190;
        case "md":
        case "lg":
        case "xl":
          return 220;
      }
    },
    device() {
      return this.$vuetify.breakpoint.name;
    }
  },
  methods: {
    createPlan() {
      this.$emit("create_plan");
    }
  }
};
</script>
