<template>
  <v-container fluid>
    <p class="text-h3 mt-5 mb-1">Recipes</p>
    <v-row>
      <v-col>
        <p class="text-justify text-wrap">
          This is a collection of your recipes. Go and <br />
          write a new one to enrich your collection!
        </p>
      </v-col>
    </v-row>
    <v-btn
      @click="show = true"
      small
      rounded
      outlined
      class="my-5 mt-0 pt-0 px-1 elevation-0"
      >Add
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <CreateMealPopup v-model="show" v-if="this.show" />

    <v-row justify="center">
      <v-col
        class="pr-2"
        cols="5"
        sm="4"
        :align="device == 'xs' ? 'center' : 'right'"
      >
        <router-link
          :to="{
            name: 'YourRecipes'
          }"
          class="py-3 transparent elevation-0 text-caption"
          >Your recipes</router-link
        ></v-col
      >

      <span class="pt-3">
        /
      </span>

      <v-col
        class="pl-2"
        cols="5"
        sm="4"
        :align="device == 'xs' ? 'center' : 'left'"
      >
        <router-link
          :to="{
            name: 'SavedRecipes'
          }"
          class="py-3 transparent elevation-0 text-caption"
          >Saved recipes</router-link
        ></v-col
      >
    </v-row>

    <router-view :key="$route.fullPath"></router-view>
  </v-container>
</template>

<script>
import CreateMealPopup from "@/components/Popups/CreateMealPopup";

export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    CreateMealPopup
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>

<style scoped>
a {
  color: #445462 !important;
  text-decoration: none;
}

a.router-link-active {
  background: #fffefb;
  color: #445462;
  font-weight: bold;
  border-bottom: 5px solid #f8ac42;
  text-decoration: underline #f8ac42;
  text-underline-offset: 4px;
}
</style>
