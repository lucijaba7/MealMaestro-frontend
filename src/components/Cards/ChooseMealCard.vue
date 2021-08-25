<template>
  <v-card class="rounded-xl white ma-4" :width="maxWidth">
    <div>
      <v-img
        :src="meal.image"
        class="img rounded-xl"
        width="100%"
        height="115px"
        fluid
      >
      </v-img>
      <div class="title text-body-1 font-weight-bold">
        {{ meal.name }}
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ChooseMealCard",
  props: ["meal"],
  data() {
    return {};
  },
  mounted() {},

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
.title {
  overflow: hidden;
  overflow-wrap: anywhere;
  /* word-wrap: break-word; */
  /* word-break: normal; */
  /* height: 90px; */
}
.v-card {
  cursor: pointer;
}
.img {
  /* position: absolute;
  bottom: 0; */
}
</style>
