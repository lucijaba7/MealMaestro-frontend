<template>
  <v-card class="card mt-13 mx-auto white" flat max-width="550">
    <v-row>
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
          <div class="font-weight-bold">
            Here is your weekly plan!
          </div>
          <div :style="device == 'xs' ? 'text-align: center' : ''">
            You can change whatever you like, and when you’re happy, confirm the
            plan to get a shopping list!!
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" align-self="center">
        <v-row justify="center">
          <v-btn
            rounded
            class="py-3 my-3 primary elevation-0"
            @click="confirmPlan"
          >
            confirm plan</v-btn
          ></v-row
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ConfirmPlan",
  methods: {
    confirmPlan() {
      this.$emit("confirm_plan");
    }
  },
  computed: {
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 170;
        case "md":
        case "lg":
        case "xl":
          return 200;
      }
    },
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>
