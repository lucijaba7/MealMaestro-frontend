<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="500" @click:outside="show = false">
      <v-card>
        <v-col align="right" class="pb-0 mb-3">
          <v-btn
            absolute
            right
            fab
            class="accent elevation-0 mt-3"
            @click="show = false"
            width="22.5"
            height="22.5"
            ><v-icon color="white" small>mdi-close</v-icon></v-btn
          >
        </v-col>
        <v-row class="ma-0">
          <v-col cols="12" sm="5" align-self="center">
            <v-img
              src="@/assets/logo.png"
              :width="this.$vuetify.breakpoint.name == 'xs' ? '70%' : '90%'"
              :height="this.$vuetify.breakpoint.name == 'xs' ? '70%' : '90%'"
              class="mx-auto"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="7" class="pa-0" align-self="center">
            <v-card-title
              class="font-weight-bold text-center pb-0 mr-2"
              style="word-break: normal"
            >
              Did you enjoy {{ info.name }}?
            </v-card-title>
            <v-card-text class="text-center pb-2 pt-0">
              Let {{ info.username }} know!
              <v-rating
                hover
                :value="0"
                @input="addRating($event)"
                background-color="accent "
                color="accent"
                dense
                half-increments
              ></v-rating>
            </v-card-text>
          </v-col>
        </v-row>

        <v-card-actions class="pa-0 mt-2">
          <v-row justify="center" class="ma-0">
            <v-btn
              @click="saveRating"
              rounded
              class="py-3 px-15 mb-5 mr-2 primary elevation-0"
              >Submit</v-btn
            >
            <v-btn
              outlined
              rounded
              @click="show = false"
              class="py-3 px-10 mb-5 mr-2 elevation-0"
              >No, thanks</v-btn
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import moment from "moment";
import RecipeService from "@/services/RecipeService.js";

export default {
  props: {
    value: Boolean,
    info: Object
  },
  data() {
    return {
      rating: null
    };
  },
  methods: {
    addRating(value) {
      this.rating = value;
    },
    async saveRating() {
      let rating = {
        rate: this.rating,
        date: moment(new Date()).format("yyyy-MM-DD hh:mm a"),
        username: this.$store.getters.getUser.username
      };

      await RecipeService.rateRecipe(this.info._id, rating);
      this.show = false;
    }
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
