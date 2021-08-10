<template>
  <v-row>
    <YourRecipesCard @click.stop="dialogcard = true" />
    <ExpandedMealPopup v-model="dialogcard" v-if="dialogcard" />
  </v-row>
</template>

<script>
import YourRecipesCard from "@/components/Cards/YourRecipesCard.vue";
import ExpandedMealPopup from "@/components/Popups/ExpandedMealPopup.vue";

export default {
  data() {
    return {
      dialogcard: false
    };
  },
  components: {
    YourRecipesCard,
    ExpandedMealPopup
  }
};
</script>
