<template>
  <v-navigation-drawer class="secondary" app fixed permanent expand-on-hover>
    <v-list nav>
      <v-list-item
        class="navigation-items"
        v-for="link in links"
        :key="link.text"
        router
        :to="link.target"
      >
        <v-list-item-icon>
          <v-icon color="white">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="white--text">{{
          link.text
        }}</v-list-item-title>
      </v-list-item>
      <v-list-item @click="logout()" class="navigation-items" router
        ><v-list-item-icon>
          <v-icon color="white">mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="white--text">
          LOG OUT
        </v-list-item-title></v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem("username"),
      links: [
        {
          icon: "mdi-home",
          text: "HOME",
          target: { path: "/" }
        },
        {
          icon: "mdi-fridge",
          text: "FRIDGE",
          target: {
            path: "/fridge",
            query: { username: this.username }
          }
        },
        {
          icon: "mdi-room-service",
          text: "RECIPES",
          target: {
            path: "/recipes/yourRecipes"
          }
        },
        {
          icon: "mdi-cart",
          text: "GROCERY LIST",
          target: {
            path: "/groceryList"
          }
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
      //this.$router.go(); //osvježi stranicu
    }
  }
};
</script>

<style scoped>
.v-navigation-drawer {
  /* z-index: 500; */
}
</style>
