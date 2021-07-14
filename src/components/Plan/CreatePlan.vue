<template>
  <v-row>
    <v-col>
      <v-img
        src="@/assets/logo.png"
        :width="this.$vuetify.breakpoint.name == 'xs' ? '70%' : '90%'"
        :height="this.$vuetify.breakpoint.name == 'xs' ? '70%' : '90%'"
        class="mx-auto"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ConfirmPlan"
};
</script>

<style></style>
