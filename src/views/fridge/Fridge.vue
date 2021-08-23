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
      v-if="this.fridgeId"
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
    <v-slide-x-transition>
      <router-view
        :items="this.fridgeItems"
        :fridgeId="this.fridgeId"
        :groceryListItems="this.groceryListItems"
      ></router-view>
    </v-slide-x-transition>
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
      const data = await FridgeService.getFridge(this.userId);
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
      // var sorted_items = this.items.sort(function(a, b) {
      //   return a.ingredient.ingredient_name - b.ingredient.ingredient_name;
      // });
    },
    async addIngredient(obj) {
      await FridgeService.addIngredient(this.fridgeId, obj);
      this.fetchFridgeItems();
    }
  },

  components: { AddIngredientPopup }
};
</script>
