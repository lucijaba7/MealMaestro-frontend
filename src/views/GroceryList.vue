<template>
  <v-container fluid>
    <p class="text-h3 mt-5 mb-1">This week’s shopping list!</p>
    <p class="pl-2">
      This list is created based on next week’s meal plan. Happy Shopping!!
    </p>

    <v-row :class="this.$vuetify.breakpoint.name == 'xs' ? 'mx-0' : 'mx-16'">
      <v-col>
        <v-simple-table class="mt-4">
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
                <td>{{ item.name }}</td>
                <td align="center" class="justify-space-around">
                  <table>
                    <tr>
                      <td width="15%">
                        <v-btn
                          fab
                          class="accent elevation-0"
                          max-width="18"
                          max-height="18"
                          ><v-icon x-small>mdi-plus</v-icon></v-btn
                        >
                      </td>
                      <td width="70%" class="text-center">
                        {{ item.quantity }} {{ item.unit }}
                      </td>
                      <td width="15%">
                        <v-btn
                          fab
                          class="accent elevation-0"
                          max-width="18"
                          max-height="18"
                          ><v-icon x-small>mdi-minus</v-icon></v-btn
                        >
                      </td>
                    </tr>
                  </table>
                </td>
                <td>
                  <v-checkbox v-model="checkbox1"></v-checkbox>
                  <!-- ovo ce trebat dinamicki, sad javlja error neki pa zanemarite -->
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-btn rounded small class="primary elevation-0 mt-8"
          >Add <v-icon small>mdi-plus</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-row :class="this.$vuetify.breakpoint.name == 'xs' ? 'mx-0' : 'mx-16'">
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

export default {
  name: "ShoppingList",
  data() {
    return {
      warning: false,
      checkbox1: true,
      items: [
        { name: "Item 1", unit: "kg", quantity: 1 },
        { name: "Item 2", unit: "kg", quantity: 1 },
        { name: "Item 3", unit: "g", quantity: 500 },
        { name: "Item 4", unit: "l", quantity: 2 },
        { name: "Item 5", unit: "kg", quantity: 1 },
        { name: "Item 6", unit: "g", quantity: 100 },
        { name: "Item 7", unit: "kg", quantity: 1 }
      ]
    };
  },
  components: { ShoppingPopup }
};
</script>
