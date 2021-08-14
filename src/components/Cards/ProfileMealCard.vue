<template>
  <v-card class="rounded-xl white">
    <v-row>
      <v-col cols="12" sm="5" class="py-0">
        <v-img :src="info.image" class="rounded-xl" height="100%" width="100%">
          <v-btn
            small
            fab
            absolute
            right
            class="elevation-0 mt-3"
            color="grey lighten-1"
            ><v-icon color="white">{{
              this.saved ? "mdi-bookmark" : "mdi-bookmark-outline"
            }}</v-icon></v-btn
          ></v-img
        >
      </v-col>

      <v-col cols="12" sm="7">
        <!-- <v-row justify="end" class="py-2 px-5">
          <v-icon fab size="100%" class="px-5 primaryText--text"
            >mdi-dots-horizontal</v-icon
          >
        </v-row> -->

        <div
          class=" font-weight-bold pa-0 mx-2 mt-2 title "
          :style="device != 'sm' && device != 'xs' ? 'height: 80px' : ''"
        >
          {{ info.name }}
        </div>

        <v-row justify="space-between" class="pa-0 mx-2">
          <v-col align="start" cols="5" class="pl-0 pb-0">
            <v-card-subtitle
              class="type font-weight-bold primaryText--text pa-0"
            >
              {{ info.meal_type }}
            </v-card-subtitle>
          </v-col>
          <v-col align="end" cols="7" class="pr-0 pb-0">
            <v-rating
              readonly
              :value="info.ratings"
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
          cols="12"
          justify="end"
          :class="
            this.$vuetify.breakpoint.name == 'xs' ? 'pr-8 mt-3' : 'pr-8 mt-0'
          "
        >
          {{ info.date_created }}</v-row
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      saved: false
    };
  },
  props: ["info"],
  created() {
    console.log(this.info);
  },
  mounted() {
    console.log(this.device);
  },
  computed: {
    ratings() {
      ///ako ima rating superr tu nes agregirano bo, za sad:
      return 4.5;
    },
    date() {
      return moment(this.info.date, "yyyy-MM-DD hh:mm a").calendar();
    },
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>

<style scoped>
.title {
  /* height: 80px; */
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
}
.tags {
  height: 100px;
}
.type {
  font-size: 15px;
}
</style>
