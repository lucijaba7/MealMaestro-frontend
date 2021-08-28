<template>
  <span class="overlay">
    <span class="loader" :style="device == 'xs' ? 'left: 60%' : 'left: 50%'">
      <v-img :src="require('@/assets/logo.gif')"
    /></span>
  </span>
</template>
<script>
export default {
  name: "loader",
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>
<style lang="scss">
.loader {
  transition: 0.5s ease-in opacity;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 21;
  height: 350px;
  width: 350px;
}

.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 20;
  background: rgba(255, 255, 255);
}
</style>
