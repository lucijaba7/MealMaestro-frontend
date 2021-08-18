<template>
  <v-card class="rounded-xl white ma-4" height="280" max-width="230px">
    <div class="text-body-1 font-weight-bold pl-3 mt-2" align="left">
      {{ info.name }}
    </div>
    <v-row>
      <v-col cols="6">
        <v-card-text style="font-size: 15px" class="py-1 pl-3 ">{{
          info.meal_type
        }}</v-card-text>
      </v-col>
      <v-col
        align="end"
        cols="6"
        :class="this.$vuetify.breakpoint.name == 'lg' ? 'pb-0' : ''"
      >
        <v-rating
          readonly
          :value="4.5"
          background-color="accent"
          color="accent"
          dense
          small
          size="20"
          half-increments
        ></v-rating>
      </v-col>
    </v-row>
    <div>
      <v-img
        :src="info.image"
        class="img rounded-xl"
        width="100%"
        height="170px"
        fluid
        align="end"
      >
      </v-img>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "YourRecipesCard",
  props: ["info"],
  data() {
    return {
      saved: false,
      dialogcard: false,
      checkbox1: true
    };
  },
  props: ["info"]
};
</script>

<style scoped>
.v-card {
  cursor: pointer;
}
.img {
  position: absolute;
  bottom: 0;
}
</style>
