<template>
  <v-row>
    <YourRecipesCard v-for="i in [1, 2, 3, 4, 5, 6, 7, 8]" :key="i" />
  </v-row>
</template>

<script>
import YourRecipesCard from "@/components/Cards/YourRecipesCard.vue";

export default {
  data() {
    return {
      dialogcard: false,
      infoId: null
    };
  },
  methods: {},
  components: {
    YourRecipesCard
  }
};
</script>

<style scoped></style>
