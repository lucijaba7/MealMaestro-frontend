<template>
  <v-container fluid pa-0>
    <v-breadcrumbs class="pa-0" :items="breadcrump_list">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-row :class="this.$vuetify.breakpoint.name == 'xs' ? 'mx-0' : 'mx-16'">
      <v-col class="px-0">
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
              <tr v-for="(item, i) in categoryItems" :key="item.name">
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
                        {{
                          item.quantity % 1 != 0
                            ? item.quantity.toFixed(1)
                            : item.quantity
                        }}
                        g
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
                <td class="px-0">
                  <v-btn
                    fab
                    color="transparent"
                    class="elevation-0"
                    max-width="18"
                    max-height="18"
                    @click="removeIngredient(item, i)"
                    ><v-icon medium color="grey"
                      >mdi-close-circle-outline</v-icon
                    ></v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <MinimumQuantityWarning v-model="warning1" v-if="warning1" />
  </v-container>
</template>

<script>
import FridgeService from "@/services/FridgeService";
import MinimumQuantityWarning from "@/components/Popups/MinimumQuantityWarning";

export default {
  name: "FridgeCategory",
  props: ["items", "fridgeId", "groceryListItems"],
  data() {
    return {
      breadcrump_list: [
        { text: "Fridge", disabled: false, href: "/fridge" },
        {
          text: this.$route.params.name,
          disabled: true,
          href: this.$route.params.name
        }
      ],
      warning1: false
    };
  },
  mounted() {},
  methods: {
    decreaseQuantity(fridgeItem) {
      var decrease = true;
      for (var groceryItem of this.groceryListItems) {
        if (
          groceryItem.ingredient.ingredient_name ==
          fridgeItem.ingredient.ingredient_name
        ) {
          if (groceryItem.required_quantity > fridgeItem.quantity - 5) {
            decrease = false;
            this.warning1 = true;
            break;
          }
        }
      }
      if (decrease && fridgeItem.quantity - 5 >= 0) fridgeItem.quantity -= 5;
    },
    removeIngredient(fridgeItem, index) {
      var remove = true;
      for (var groceryItem of this.groceryListItems) {
        if (
          groceryItem.ingredient.ingredient_name ==
          fridgeItem.ingredient.ingredient_name
        ) {
          remove = false;
          this.warning1 = true;
          break;
        }
      }
      if (remove) this.categoryItems.splice(index, 1);
    }
  },
  computed: {
    categoryItems() {
      for (var item of this.items) {
        if (item.category == this.$route.params.name)
          return item.ingredients_list;
      }
    }
  },
  watch: {
    categoryItems: {
      handler: async function(val) {
        await FridgeService.updateFridge(
          this.fridgeId,
          this.$route.params.name,
          val
        );
      },
      deep: true
    }
  },
  components: { MinimumQuantityWarning }
};
</script>
<style scoped></style>
