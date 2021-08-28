<template>
  <v-container fluid>
    <v-row>
      <v-col cols="11" class="pb-0">
        <p class="text-h3 mt-5 mb-1">
          {{ $route.params.name ? $route.params.name : "Fridge" }}
        </p>
      </v-col>
      <v-spacer cols="1"></v-spacer>
      <v-col cols="9" class="pt-0"
        ><p class="mb-0" v-if="!$route.params.name">
          Please keep your fridge up to date.
        </p>
      </v-col>
      <v-spacer cols="3"></v-spacer>
    </v-row>
    <v-btn
      rounded
      small
      class="primary elevation-0 mt-1"
      @click="openPopup = true"
      >Add <v-icon small>mdi-plus</v-icon></v-btn
    ><AddIngredientPopup
      v-model="openPopup"
      v-if="openPopup"
      @addIngredient="addIngredient"
    />

    <router-view
      :items="this.fridgeItems"
      :fridgeId="this.fridgeId"
      :groceryListItems="this.groceryListItems"
    ></router-view>
  </v-container>
</template>

<script>
import FridgeService from "@/services/FridgeService";
import GroceryListService from "@/services/GroceryListService";
import AddIngredientPopup from "@/components/Popups/AddIngredientPopup";

export default {
  data() {
    return {
      userId: this.$store.getters.getUser._id,
      fridgeId: null,
      fridgeItems: [],
      groceryListItems: [],
      openPopup: false
    };
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  },
  created() {
    this.fetchFridgeItems();
    this.fetchGroceryList();
  },
  methods: {
    async fetchFridgeItems() {
      const data = await FridgeService.getFridge();
      if (data.length) {
        this.fridgeId = data[0]._id;
        this.fridgeItems = data[0].fridge_items;
      }
    },
    async fetchGroceryList() {
      let response = await GroceryListService.getGroceryList(this.userId);
      if (response.length) {
        this.groceryListItems = response[0].list_items;
      }
    },
    async addIngredient(obj) {
      var addNew = true;
      for (var category of this.fridgeItems) {
        for (var item of category.ingredients_list) {
          if (item.ingredient._id == obj.ingredient) {
            addNew = false;
            item.quantity += Number(obj.quantity);
          }
        }
      }

      if (!this.fridgeId) {
        const fridge = await FridgeService.createFridge();

        this.fridgeId = fridge._id;
      }
      if (addNew) {
        await FridgeService.addIngredient(this.fridgeId, obj);
        this.fetchFridgeItems();
      }
    }
  },

  components: { AddIngredientPopup }
};
</script>
