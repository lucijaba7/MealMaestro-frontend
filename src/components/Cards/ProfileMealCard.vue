<template>
  <v-card
    @click="dialogcard = !dialogcard"
    class="rounded-xl white"
    style="cursor:pointer"
  >
    <v-row>
      <v-col cols="12" sm="5" class="py-0">
        <v-img :src="info.image" width="100%" height="200px" class="rounded-xl">
        </v-img>
      </v-col>

      <v-col
        cols="12"
        sm="7"
        :class="
          this.$vuetify.breakpoint.name == 'xs' ? 'py-0 pl-4' : 'pl-0 pt-0'
        "
      >
        <div class="text-truncate font-weight-bold pa-0 mx-2 mt-2 title ">
          {{ info.name }}
        </div>

        <v-row justify="space-between" class="pa-0 mx-2">
          <v-col align="start" cols="5" class="pl-0 pb-0 pt-1">
            <v-card-subtitle
              class="type font-weight-bold primaryText--text pa-0"
            >
              {{ info.meal_type }}
            </v-card-subtitle>
          </v-col>
          <v-col align="end" cols="7" class="pr-0 pb-0 pt-1">
            <v-rating
              v-if="this.ratings > 0"
              readonly
              :value="this.ratings"
              background-color="accent"
              color="accent"
              dense
              small
              size="20"
              half-increments
            ></v-rating>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="py-0 tags ml-1">
            <v-chip
              v-for="tag in info.tags.slice(0, 5)"
              :key="tag"
              class="ma-1"
              color="primary"
            >
              {{ tag }}
            </v-chip></v-col
          >
        </v-row>
        <v-row
          class="mb-1 caption"
          cols="12"
          justify="end"
          :class="
            this.$vuetify.breakpoint.name == 'xs' ? 'pr-8 mt-3' : 'pr-8 mt-0'
          "
        >
          {{ this.date }}</v-row
        >
      </v-col>
    </v-row>
    <ExpandedMealPopup
      :recipeId="info._id"
      v-model="dialogcard"
      v-if="dialogcard"
    />
  </v-card>
</template>

<script>
import ExpandedMealPopup from "../Popups/ExpandedMealPopup.vue";
import RecipeService from "@/services/RecipeService";
import moment from "moment";

export default {
  data() {
    return {
      saved: false,
      dialogcard: false,
      ratings: 0
    };
  },
  props: ["info"],
  created() {
    this.getRating();
  },
  methods: {
    async getRating() {
      let data = await RecipeService.getRating(this.info._id);
      if (data.length) this.ratings = data[0].rating;
    }
  },
  computed: {
    date() {
      return moment(this.info.date_created, "yyyy-MM-DD hh:mm a").format(
        "DD/MM/yyyy"
      );
    },
    device() {
      return this.$vuetify.breakpoint.name;
    }
  },
  components: { ExpandedMealPopup }
};
</script>

<style scoped>
.title {
  overflow: hidden;
  text-overflow: ellipsis;
}
.tags {
  height: 100px;
}
.type {
  font-size: 15px;
}
</style>
