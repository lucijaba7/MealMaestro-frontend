<template>
  <v-container fluid>
    <v-row>
      <v-col cols="11" class="pb-0">
        <p class="text-h3 mt-5 mb-1">
          {{ $route.params.name ? $route.params.name : "Fridge" }}
        </p>
      </v-col>
      <v-spacer cols="1"></v-spacer>
      <v-col cols="9" class="pt-0"
        ><p class="mb-0" v-if="!$route.params.name">
          Please keep your fridge up to date.
        </p>
      </v-col>
      <v-spacer cols="3"></v-spacer>
    </v-row>

    <v-slide-x-transition>
      <router-view></router-view>
    </v-slide-x-transition>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>
