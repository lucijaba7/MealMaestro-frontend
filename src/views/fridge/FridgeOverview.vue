<template>
  <v-container pa-0>
    <v-row class="justify-start mt-5 mb-3">
      <v-col xs="12" sm="9" md="5" lg="4" v-for="category in categories" :key="category.name">
        <FridgeCategoryCard :category="category" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FridgeCategoryCard from "@/components/FridgeCategoryCard";

export default {
  name: 'FridgeOverview',
  data() {
    return {
      categories: [
        {name: "Seafood", pic: "seafood.jpg"},
        {name: "Grains", pic: "grains.jpg"},
        {name: "Fruits", pic: "fruits.jpg"},
        {name: "Meat", pic: "meat.jpg"},
        {name: "Spices", pic: "spices.jpg"},
        {name: "Vegetables", pic: "vegetables.jpg"},
        {name: "Legumes", pic: "legumes.jpg"},
        {name: "Dairy products and eggs", pic: "dairy_prod_eggs.jpg"},
        {name: "other", pic: "other.jpg"}
      ]
    }
  },
  components: { FridgeCategoryCard }
}
</script>