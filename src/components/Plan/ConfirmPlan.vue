<template>
  <v-row class="ma-9" max-width="100">
    <v-col cols="12" sm="6">
      <v-img
        src="@/assets/logo.png"
        :max-width="maxWidth"
        class="mx-auto"
      ></v-img> </v-col
    ><v-col cols="12" sm="6">
      <div class="font-weight-bold">
        Here is your weekly plan!
      </div>
      <div>
        You can change whatever you like, and when you’re happy, confirm the
        plan to get a shopping list!!
      </div>
    </v-col>
    <v-col cols="12">
      <v-btn rounded class="py-3 primary elevation-0 text-caption"
        >show weekly plan</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ConfirmPlan",
  computed: {
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 50; //241;
        case "sm":
          return 100;
        case "md":
          return 200;
        case "lg":
          return 100;
        case "xl":
          return 150;
      }
    }
  }
};
</script>

<style></style>
