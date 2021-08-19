<template>
  <v-card class="rounded-xl white ma-4" height="260" max-width="230px">
    <div
      class="text-truncate text-body-1 font-weight-bold px-4 pt-3"
      align="left"
    >
      {{ info.name }}
    </div>
    <v-row>
      <v-col cols="6" class="pb-0">
        <v-card-text
          style="font-size: 15px"
          class="py-1 pl-4 font-weight-bold"
          >{{ info.meal_type }}</v-card-text
        >
      </v-col>
      <v-rating
        readonly
        :value="0"
        background-color="accent"
        color="accent"
        class="mt-3 mr-4 "
        dense
        small
        size="20"
        half-increments
      ></v-rating>
    </v-row>
    <v-img
      :src="info.image"
      class="img rounded-xl"
      width="100%"
      height="170px"
      fluid
      align="end"
    >
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "YourRecipesCard",
  data() {
    return {};
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
