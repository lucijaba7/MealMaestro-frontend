<template>
  <v-card class="card rounded-xl ma-4" flat :width="maxWidth">
    <div class="text-center font-weight-bold " justify="center">
      Add a meal <v-icon>mdi-plus</v-icon>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "AddMealCard",
  computed: {
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 180;
        case "sm":
          return 200;
        case "md":
          return 230;
        case "lg":
        case "xl":
          return 250;
      }
    }
  }
};
</script>

<style scoped>
.card {
  border: 2px dashed lightgray !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffefb;
}
div {
  color: gray;
}
.v-icon {
  display: block;
}
</style>
