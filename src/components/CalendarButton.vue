<template>
  <v-card>
    <v-card-title>
      {{ info.day.slice(0, 3).toUpperCase() }}
    </v-card-title>
    <v-divider></v-divider>
    <div></div>
  </v-card>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  },
};
</script>

<style></style>
