<template>
  <v-container fluid>
    <v-row>
      <v-col cols="11">
        <p class="text-h4 mt-5 mb-1">This week’s shopping list!</p>
      </v-col>
      <v-spacer cols="1"></v-spacer>
    </v-row>
    <p class="pl-2">
      This list is created based on next week’s meal plan. Happy Shopping!!
    </p>
    <v-row class="mt-4" v-if="!this.items.length" justify="center">
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
      v-if="this.items.length"
      :class="this.$vuetify.breakpoint.name == 'xs' ? 'mx-0' : 'mx-16'"
    >
      <v-col align="end">
        <v-btn
          rounded
          @click.stop="warning = true"
          class="px-8 py-3 my-5 primary elevation-0"
          >Shopping finished</v-btn
        >
      </v-col>
    </v-row>
    <ShoppingPopup v-model="warning" />
  </v-container>
</template>

<script>
import ShoppingPopup from "@/components/Popups/ShoppingPopup";
import GroceryListService from "@/services/GroceryListService";

export default {
  name: "ShoppingList",
  data() {
    return {
      warning: false,
      userId: this.$store.getters.getUser._id,
      items: []
    };
  },
  created() {
    this.fetchGroceryList();
  },
  methods: {
    async fetchGroceryList() {
      let response = await GroceryListService.getGroceryList(this.userId);
      if (response.length) this.items = response[0].list_items;
      // var sorted_items = this.items.sort(function(a, b) {
      //   return a.ingredient.ingredient_name - b.ingredient.ingredient_name;
      // });
    },
    selectAll() {
      for (var item of this.items) {
        item.bought = true;
      }
    }
  },
  components: { ShoppingPopup },
  watch: {
    items: {
      handler: function(val, oldVal) {
        console.log(this.items);
      },
      deep: true
    }
  }
};
</script>
