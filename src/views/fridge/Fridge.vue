<template>
  <!-- <v-main> -->
    <v-container>
      <p class="text-h3 mt-5 mb-1">{{$route.params.name ? $route.params.name : "Fridge"}}</p>
      <p v-if="!$route.params.name">Please keep your fridge up to date.</p>
      <router-view></router-view>
    </v-container>
  <!-- </v-main> -->
</template>

<script>
export default {
  name: 'Fridge',
  data() {
    return {
  
    }
  },
}
</script>