<template>
  <v-container fluid pa-0>
    <v-row :class="this.$vuetify.breakpoint.name == 'xs' ? 'mx-0' : 'mx-16'">
      <v-col>
        <v-simple-table class="mt-4 white">
          <tbody>
            <tr
              v-for="category in categories"
              :key="category.name"
              @click="openCategory(category.name)"
            >
              <td class="px-0 py-1" width="5%">
                <v-avatar>
                  <v-img :src="require(`@/assets/${category.pic}`)"></v-img
                ></v-avatar>
              </td>
              <td width="80%">{{ category.name }}</td>
              <td width="10%">
                <v-row>
                  <v-col align="center">
                    <div class="font-weight-bold ma-0">
                      33
                    </div>
                    <div class="" style="font-size: 12px;">
                      items
                    </div>
                  </v-col></v-row
                >
              </td>
              <td class="pa-0" width="5%">
                <v-icon>mdi-chevron-right</v-icon>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col></v-row
    >
  </v-container>
</template>

<script>
export default {
  name: "FridgeOverview",
  data() {
    return {
      categories: [
        {
          name: "Alcoholic Beverages",
          pic: "ingredient_categories/alcohol.jpg"
        },
        { name: "Bakery / Bread", pic: "ingredient_categories/bakery.jpg" },
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
          pic: "ingredient_categories/milk_eggs.jpg"
        },
        {
          name: "Nut butters, Jams, and Honey",
          pic: "ingredient_categories/jams.jpg"
        },
        { name: "Nuts and Seeds", pic: "ingredient_categories/nuts.jpg" },
        {
          name: "Oil, Vinegar, Salad Dressing",
          pic: "ingredient_categories/dressing.jpg"
        },
        { name: "Pasta and Rice", pic: "ingredient_categories/pasta.jpg" },
        { name: "Produce", pic: "ingredient_categories/produce.jpg" },
        { name: "Savory Snacks", pic: "ingredient_categories/savory.jpg" },
        { name: "Seafood", pic: "ingredient_categories/seafood.jpg" },
        {
          name: "Spices and Seasonings",
          pic: "ingredient_categories/spices.jpg"
        },
        { name: "Sweet Snacks", pic: "ingredient_categories/sweet.jpg" },
        { name: "Tea and Coffee", pic: "ingredient_categories/teas.jpg" }
      ]
    };
  },
  methods: {
    openCategory(category) {
      this.$router.push({
        name: "FridgeCategory",
        params: { name: category.charAt(0).toLowerCase() + category.slice(1) }
      });
    }
  }
};
</script>
