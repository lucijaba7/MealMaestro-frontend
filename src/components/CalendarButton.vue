<template>
  <v-card
    class="rounded-lg mx-auto text-sm-caption"
    :min-width="minWidth"
    :max-width="maxWidth"
  >
    <!-- <v-card-text class="pt-1 p-0 text-sm-caption"> -->
    <p class="mb-0">{{ info.day.slice(0, 3).toUpperCase() }}</p>
    <v-divider class="mx-2" color="primaryText"></v-divider>
    <p>
      {{ info.date }}
    </p>
    <!-- </v-card-text> -->
  </v-card>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  },
  computed: {
    minWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 245;
        case "sm":
          return 28;
        case "md":
          return 30;
        case "lg":
          return 140;
        case "xl":
          return 200;
      }
    },
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1000;
        case "sm":
          return 90;
        case "md":
          return 130;
        case "lg":
          return 145;
        case "xl":
          return 250;
      }
    },
  },
  mounted() {
    console.log(this.$vuetify.breakpoint.name);
  },
};
</script>

<style lang="scss">
.divider {
  border-top: 1px solid black;
}
</style>
