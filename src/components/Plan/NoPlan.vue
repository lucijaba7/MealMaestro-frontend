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
          <div
            class="font-weight-bold"
            :style="{ 'text-align: center': device == 'xs' }"
          >
            MealMaestro is sorry but..
          </div>
          <div :style="{ 'text-align: center': device == 'xs' }">
            A plan for this week doesn't exist
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NoPlan",
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
