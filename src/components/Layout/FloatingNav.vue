<template>
  <!-- <v-col
    cols="6"
    sm="2"
    class="floating-nav"
    order="2"
    order-sm="3"
    align="end"
  >
    <v-btn
      icon
      :to="{
        name: 'Settings',
        query: {
          username: this.username
        }
      }"
    >
      <v-icon color="secondary">mdi-cog</v-icon>
    </v-btn>
    <v-btn
      icon
      :to="{
        name: 'Profile',
        query: {
          username: this.username
        }
      }"
    >
      <v-icon color="secondary">mdi-account-circle</v-icon>
    </v-btn>
  </v-col> -->

  <!-- <v-speed-dial top right direction="left" open-on-hover transition="slide-x"> -->
  <!-- <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn> -->
  <!-- </v-speed-dial> -->
  <v-item-group>
    <v-btn
      class="mt-11"
      fab
      top
      right
      absolute
      icon
      :to="{
        name: 'Profile',
        query: {
          username: this.username
        }
      }"
    >
      <v-icon color="secondary">mdi-account-circle</v-icon></v-btn
    >
    <v-btn class="mt-11 mr-12" fab top right absolute icon :to="'/fridge'">
      <v-icon color="secondary">mdi-fridge</v-icon></v-btn
    >
  </v-item-group>
</template>

<script>
export default {
  name: "FloatingNav",
  data() {
    return {
      username: localStorage.getItem("username"),
      fab: null
    };
  }
};
</script>

<style scoped></style>
