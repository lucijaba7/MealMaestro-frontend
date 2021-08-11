<template>
  <span class="overlay">
    <span class="loader">
      <!-- <v-img
        :src="require('@/assets/loading_text.gif')"
        height="50%"
        width="50%"/> -->
      <!-- <h2 class="text-center">LOADING</h2> -->
      <v-img :src="require('@/assets/logo.gif')"
    /></span>
  </span>
</template>
<script>
export default {
  name: "loader"
  // props: ["visible"]
};
</script>
<style lang="scss">
.loader {
  // background: rgba(255, 255, 255, 0.8);
  transition: 0.5s ease-in opacity;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 101;
  height: 350px;
  width: 350px;
  // opacity: 0;
  // &--visible {
  //   opacity: 1;
  //   pointer-events: all;
  // }
}

.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 300;
  background: rgba(255, 255, 255, 0.644);
  // opacity: 0;
  // &--visible {
  //   opacity: 1;
  //   pointer-events: all;
  // }
}
</style>
