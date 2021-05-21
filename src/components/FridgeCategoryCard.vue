<template>
  <v-card 
    class="rounded-xl mr-5 mb-5"
  >
    <v-img
      @click="cat(category.name)"
      :src="require(`@/assets/${category.pic}`)"
      height= "300"
      class="align-center"
      style="cursor: pointer"
    >
      <v-card-title class="white--text justify-center" style="fontSize: 45px">
        {{ category.name}}
      </v-card-title>
    </v-img>
  </v-card> 
</template>

<script>
import router from "@/router";

export default {
  props: ["category"],
  data() {
    return {};
  },
  methods: {
    cat(category) {
      console.log(category);
      router.push({ name: "FridgeCategory", params: { name: category } });
    },
  },
};
</script>
