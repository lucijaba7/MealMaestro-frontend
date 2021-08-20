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
            <!-- <router-link
              :to="`/${data.item._id}`"
              :key="data.item._id"
              style="text-decoration:none"
            > -->
            <v-list-item-title
              @click="popup(data.item._id)"
              v-html="data.item.name"
            ></v-list-item-title>
            <!-- </router-link> -->
          </v-list-item-content>
        </template>
      </v-autocomplete>
      <ExpandedMealPopup
        :recipeId="recipeId"
        v-model="dialogcard"
        v-if="dialogcard"
      />
    </v-col>

    <!-- <router-view></router-view> -->
  </v-container>
</template>

<script>
import ExpandedMealPopup from "../components/Popups/ExpandedMealPopup.vue";
import RecipeService from "../services/RecipeService";

export default {
  name: "Home",
  data() {
    return {
      dialogcard: false,
      recipes: [],
      recipeId: "",
      autoUpdate: true,
      isUpdating: false
    };
  },
  components: {
    ExpandedMealPopup
  },
  created() {
    this.getAllRecipes();
  },
  methods: {
    async getAllRecipes() {
      let data = await RecipeService.getAllRecipes("");
      this.recipes = data;
    },
    popup(id) {
      this.recipeId = id;
      this.dialogcard = !this.dialogcard;
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
