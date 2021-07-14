<template>
  <h1>HOME</h1>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(this.device);
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>

<style scoped>
.main_divider {
  border-top: 1px solid black;
}
</style>
