<template>
  <v-container :fluid="device != 'lg' || device != 'xl'">
    <v-row>
      <v-col cols="12" class="pb-0">
        <p class="text-h3 mt-5 mb-1">BROWSE RECIPES</p>
      </v-col>
      <v-col cols="12" class="pt-0">
        <p class="pl-2">
          Want to try something new? Browse recipes recommended just for you!
        </p>
      </v-col>
    </v-row>
    <v-divider class="my-3"></v-divider>

    <v-col cols="12">
      <v-autocomplete
        :disabled="isUpdating"
        :items="recipes"
        color="seondary lighten-2"
        label="Search"
        item-text="name"
        item-value="name"
        max-width="300px"
      >
        <template v-slot:item="data">
          <v-list-item-avatar>
            <img :src="data.item.image" />
          </v-list-item-avatar>
          <v-list-item-content>
            <router-link
              :to="`/${data.item._id}`"
              :key="data.item._id"
              style="text-decoration:none"
            >
              <v-list-item-title v-html="data.item.name"></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </template>

        <router-view></router-view>

        <!-- <template v-slot:item="data">
          <template v-if="typeof data.item !== 'object'">
            <v-list-item-content v-text="data.item"></v-list-item-content>
          </template>
          <template v-else>
            <v-list-item-avatar>
              <img :src="data.item.avatar" />
            </v-list-item-avatar> 
            <v-list-item-content>
              <v-list-item-title v-html="data.item.name"></v-list-item-title>
              <v-list-item-subtitle
                v-html="data.item.group"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>  -->
      </v-autocomplete>
    </v-col>
  </v-container>
</template>

<script>
import RecipeService from "../services/RecipeService";

export default {
  name: "Home",
  data() {
    return {
      recipes: [],
      autoUpdate: true,
      isUpdating: false
    };
  },
  created() {
    this.getAllRecipes();
  },
  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
    async getAllRecipes() {
      let data = await RecipeService.getAllRecipes("");
      this.recipes = data;
    }
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  }
};
</script>

<style scoped>
.main_divider {
  border-top: 1px solid black;
}
</style>
