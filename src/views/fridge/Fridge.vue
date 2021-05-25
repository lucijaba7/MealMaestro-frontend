<template>
  <v-container fluid>
    <p class="text-h3 mt-5 mb-1">{{$route.params.name ? $route.params.name : "Fridge"}}</p>
    <p v-if="!$route.params.name">Please keep your fridge up to date.</p>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
  
    }
  },
}
</script>