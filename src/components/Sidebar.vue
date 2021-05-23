<template>
  <v-navigation-drawer class="secondary" app fixed permanent expand-on-hover>
    <v-list nav>
      <v-list-item
        class="navigation-items"
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
      >
        <v-list-item-icon>
          <v-icon color="white">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="white--text">{{
          link.text
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "mdi-home", text: "HOME", route: "/" },
        {
          icon: "mdi-silverware-fork-knife",
          text: "RECIPES",
          route: "/recipes",
        },
        { icon: "mdi-fridge", text: "FRIDGE", route: "/fridge/" },
        { icon: "mdi-cart", text: "GROCERY LIST", route: "/groceryList" },
        { icon: "mdi-feature-search", text: "BROWSE", route: "/browse" },
      ],
    };
  },
};
</script>

<style scoped></style>
