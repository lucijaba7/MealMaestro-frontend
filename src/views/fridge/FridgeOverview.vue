<template>
  <v-container fluid pa-0>
    <v-row class="mt-5 mb-3">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        align-self="center"
        class="pa-5"
        v-for="category in categories"
        :key="category.name"
      >
        <FridgeCategoryCard :category="category" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FridgeCategoryCard from "@/components/Cards/FridgeCategoryCard";

export default {
  name: "FridgeOverview",
  data() {
    return {
      categories: [
        {
          name: "Alcoholic Beverages",
          pic: "ingredient_categories/alcohol.jpg"
        },
        { name: "Bakery/Bread", pic: "ingredient_categories/bakery.jpg" },
        { name: "Baking", pic: "ingredient_categories/baking.jpg" },
        { name: "Beverages", pic: "ingredient_categories/baverages.jpg" },
        { name: "Canned and Jarred", pic: "ingredient_categories/jarred.jpg" },
        { name: "Cereal", pic: "ingredient_categories/cereal.jpg" },
        { name: "Cheese", pic: "ingredient_categories/cheese.jpg" },
        { name: "Condiments", pic: "ingredient_categories/condiments.jpg" },
        { name: "Dried Fruits", pic: "ingredient_categories/dried.jpg" },
        { name: "Ethnic Foods", pic: "ingredient_categories/ethnic.jpg" },
        { name: "Frozen", pic: "ingredient_categories/frozen.jpg" },
        { name: "Gluten Free", pic: "ingredient_categories/gluten.jpg" },
        { name: "Gourmet", pic: "ingredient_categories/gourmet.jpg" },
        { name: "Meat", pic: "ingredient_categories/meat.jpg" },
        {
          name: "Milk, Eggs, Other Dairy",
          pic: "ingredient_categories/baverages.jpg"
        },
        {
          name: "Nut butters, Jams, and Honey",
          pic: "ingredient_categories/baverages.jpg"
        },
        { name: "Nuts and Seeds", pic: "ingredient_categories/baverages.jpg" },
        {
          name: "Oil, Vinegar, Salad Dressing",
          pic: "ingredient_categories/baverages.jpg"
        },
        { name: "Pasta and Rice", pic: "ingredient_categories/baverages.jpg" },
        { name: "Produce", pic: "ingredient_categories/baverages.jpg" },
        { name: "Savory Snacks", pic: "ingredient_categories/baverages.jpg" },
        { name: "Seafood", pic: "ingredient_categories/baverages.jpg" },
        {
          name: "Spices and Seasonings",
          pic: "ingredient_categories/baverages.jpg"
        },
        { name: "Sweet Snacks", pic: "ingredient_categories/baverages.jpg" },
        { name: "Tea and Coffee", pic: "ingredient_categories/baverages.jpg" }
      ]
    };
  },
  components: { FridgeCategoryCard }
};
</script>
