<template>
  <v-container fluid>
    <v-row>
      <v-col cols="10">
        <p class="text-h4 mt-5 mb-1">This week’s shopping list!</p>
      </v-col>
      <v-spacer cols="2"></v-spacer>
    </v-row>
    <p class="pl-2">
      This list is created based on next week’s meal plan. Happy Shopping!!
    </p>
    <v-row class="mt-4" v-if="!this.active" justify="center">
      <b>There is no grocery list in plan</b>
    </v-row>
    <v-row
      v-else
      :class="this.$vuetify.breakpoint.name == 'xs' ? 'mx-0' : 'mx-16'"
    >
      <v-col class="pb-0" cols="12" align="center">
        <v-btn rounded @click.stop="selectAll" class=" primary elevation-0"
          >Select all</v-btn
        >
      </v-col>
      <v-col cols="12">
        <v-simple-table class="mt-4 white">
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  class="text-left primary--text font-weight-medium"
                  width="40%"
                >
                  ITEM
                </th>
                <th class="text-center primary--text font-weight-medium">
                  QUANTITY
                </th>
                <th
                  class="text-left primary--text font-weight-medium"
                  width="10%"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td>{{ item.ingredient.ingredient_name }}</td>
                <td align="center" class="justify-space-around">
                  <table>
                    <tr>
                      <td width="15%">
                        <v-btn
                          fab
                          class="accent elevation-0"
                          max-width="18"
                          max-height="18"
                          @click="decreaseQuantity(item)"
                          ><v-icon x-small>mdi-minus</v-icon></v-btn
                        >
                      </td>
                      <td width="70%" class="text-center">
                        {{ item.quantity }} g
                      </td>
                      <td width="15%">
                        <v-btn
                          fab
                          class="accent elevation-0"
                          max-width="18"
                          max-height="18"
                          @click="item.quantity += 5"
                          ><v-icon x-small>mdi-plus</v-icon></v-btn
                        >
                      </td>
                    </tr>
                  </table>
                </td>
                <td>
                  <v-checkbox v-model="item.bought"></v-checkbox>
                  <!-- ovo ce trebat dinamicki, sad javlja error neki pa zanemarite -->
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- <v-btn rounded small class="primary elevation-0 mt-8"
          >Add <v-icon small>mdi-plus</v-icon></v-btn
        > -->
      </v-col>
    </v-row>
    <v-row
      v-if="this.active"
      :class="this.$vuetify.breakpoint.name == 'xs' ? 'mx-0' : 'mx-16'"
    >
      <v-col align="end">
        <v-btn
          rounded
          @click.stop="finishShopping"
          class="px-8 py-3 my-5 primary elevation-0"
          >Shopping finished</v-btn
        >
      </v-col>
    </v-row>
    <MinimumQuantityWarning v-model="warning1" v-if="warning1" />
    <ShoppingPopup v-model="warning2" v-if="warning2" />
  </v-container>
</template>

<script>
import ShoppingPopup from "@/components/Popups/ShoppingPopup";
import GroceryListService from "@/services/GroceryListService";
import MinimumQuantityWarning from "@/components/Popups/MinimumQuantityWarning";

export default {
  name: "GroceryList",
  data() {
    return {
      active: false,
      warning1: false,
      warning2: false,
      userId: this.$store.getters.getUser._id,
      items: []
    };
  },
  created() {
    this.fetchGroceryList();
  },

  methods: {
    async fetchGroceryList() {
      let response = await GroceryListService.getGroceryList();
      if (response.length) {
        if (!response[0].finished_shopping) {
          this.active = true;
          this.listId = response[0]._id;
          this.items = response[0].list_items;
        } else this.active = false;
      }
      // var sorted_items = this.items.sort(function(a, b) {
      //   return a.ingredient.ingredient_name - b.ingredient.ingredient_name;
      // });
    },
    selectAll() {
      for (var item of this.items) {
        item.bought = true;
      }
    },
    decreaseQuantity(item) {
      if (item.required_quantity > item.quantity - 5) {
        this.warning1 = true;
      } else item.quantity -= 5;
    },
    async finishShopping() {
      for (var item of this.items) {
        if (!item.bought) {
          this.warning2 = true;
          break;
        }
      }
      if (this.warning2 != true) {
        var data = await GroceryListService.confirmGroceryList(this.listId);
        this.active = false;
        // this.items = [];
      }
    }
  },
  components: { ShoppingPopup, MinimumQuantityWarning },
  watch: {
    items: {
      handler: async function(val) {
        if (this.active)
          await GroceryListService.updateGroceryList(this.listId, val);
      },
      deep: true
    }
  }
};
</script>
