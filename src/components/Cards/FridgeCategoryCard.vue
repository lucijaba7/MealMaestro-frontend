<template>
  <v-card class="rounded-xl">
    <v-img
      @click="openCategory(category.name)"
      :src="require(`@/assets/${category.pic}`)"
      height="300"
      class="align-center"
      style="cursor: pointer"
    >
      <v-card-title class="white--text justify-center" style="fontSize: 45px">
        {{ category.name }}
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
import router from "@/router";

export default {
  props: ["category"],
  data() {
    return {
      username: localStorage.getItem("username")
    };
  },
  methods: {
    openCategory(category) {
      router.push({
        name: "FridgeCategory",
        params: { name: category.charAt(0).toLowerCase() + category.slice(1) }
      });
    }
  }
};
</script>
