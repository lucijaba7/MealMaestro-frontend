<template>
  <v-container fluid pa-0>
    <v-breadcrumbs class="pa-0" :items="breadcrump_list">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-row :class="this.$vuetify.breakpoint.name == 'xs' ? 'mx-0' : 'mx-16'">
      <v-col>
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
                          ><v-icon x-small>mdi-minus</v-icon></v-btn
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
                          ><v-icon x-small>mdi-plus</v-icon></v-btn
                        >
                      </td>
                    </tr>
                  </table>
                </td>
                <td>
                  <v-btn
                    fab
                    color="transparent"
                    class="elevation-0"
                    max-width="18"
                    max-height="18"
                    ><v-icon medium color="grey"
                      >mdi-close-circle-outline</v-icon
                    ></v-btn
                  >
                  <!-- <v-icon style="cursor: pointer">mdi-close-circle-outline</v-icon> -->
                  <!-- ILI PLAVOO <v-btn fab class="elevation-0" max-width="18" max-height="18" color="primary"><v-icon>mdi-close-circle-outline</v-icon></v-btn> -->
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
  </v-container>
</template>

<script>
import { Fridge } from "@/services";

export default {
  name: "FridgeCategory",
  data() {
    return {
      username: localStorage.getItem("username"),
      breadcrump_list: [
        { text: "Fridge", disabled: false, href: "/fridge" },
        {
          text: this.$route.params.name,
          disabled: true,
          href: this.$route.params.name
        }
      ],
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
  created() {
    this.fetchFridgeItems(this.$route.params.name, this.username);
  },
  methods: {
    async fetchFridgeItems(category, username) {
      let response = await Fridge.getItems(category, username);
      return response.data;
    }
  }
};
</script>
<style scoped></style>
