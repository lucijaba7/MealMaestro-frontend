<template>
  <v-container pa-0>
    <v-breadcrumbs class="pa-0" :items="breadcrump_list">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-flex md10>
    <v-simple-table class="mt-4">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left primary--text font-weight-medium">
                ITEM
            </th>
            <th class="text-center primary--text font-weight-medium">
                QUANTITY
            </th>
            <th class="text-left primary--text font-weight-medium">
                
            </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td align="center">
                <v-btn fab x-small class="accent elevation-0"><v-icon x-small>mdi-plus</v-icon></v-btn>
                {{ item.quantity }} {{ item.unit }}
                <v-btn fab x-small class="accent elevation-0" ><v-icon x-small>mdi-minus</v-icon></v-btn>
            </td>
            <td><v-icon>mdi-close-circle-outline</v-icon></td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
    </v-flex>
    <v-btn rounded small class="px-15 py-3 mt-5 primary elevation-0">Add <v-icon small>mdi-plus</v-icon></v-btn>
    <v-btn rounded class="float-right px-15 py-3 mt-5 primary elevation-0">Shopping finished</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'FridgeCategory',
  data() {
    return {
        breadcrump_list: [
            {text: "Fridge", disabled: false, href: "/fridge"},
            {text: this.$route.params.name, disabled: true, href: this.$route.params.name},
        ],
        items: [
            {name: "Item 1", unit: "kg", quantity: 1},
            {name: "Item 2", unit: "kg", quantity: 1},
            {name: "Item 3", unit: "g", quantity: 500},
            {name: "Item 4", unit: "l", quantity: 2},
            {name: "Item 5", unit: "kg", quantity: 1},
            {name: "Item 6", unit: "g", quantity: 100},
            {name: "Item 7", unit: "kg", quantity: 1},
        ]
    }
  }
}
</script>