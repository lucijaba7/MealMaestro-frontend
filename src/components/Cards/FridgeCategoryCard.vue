<template>
  <v-card class="rounded-xl">
    <v-img
      @click="openCategory(category.name)"
      :src="require(`@/assets/${category.pic}`)"
      height="100"
      class="align-center"
      style="cursor: pointer"
      fluid
      loading
    >
      <v-card-title
        class="white--text justify-center title"
        style="fontSize: 45px"
      >
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

<style scoped>
.title {
  /* overflow: hidden; */
  /* overflow-wrap: anywhere; */
  /* word-wrap: break-word; */
  word-break: normal;
  /* text-shadow: 1px 1px; */
}
</style>
