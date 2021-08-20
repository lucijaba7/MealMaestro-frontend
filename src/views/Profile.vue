<template>
  <v-container fluid class="pt-8">
    <v-row>
      <v-col
        cols="12"
        sm="2"
        xl="1"
        :align="device == 'xs' ? 'center' : 'start'"
      >
        <v-img
          :src="user.avatar.url"
          alt="Avatar"
          lazy-src
          contain
          max-height="100px"
        />
      </v-col>

      <v-col
        cols="12"
        sm="8"
        xl="10"
        order="3"
        order-sm="2"
        align-self="center"
        :align="device == 'xs' ? 'center' : 'start'"
      >
        <div class="text-h5 font-weight-bold">
          Your profile
          <v-icon
            size="100%"
            class="px-5 primary--text"
            @click.stop="editProfileOpen = true"
            >mdi-square-edit-outline</v-icon
          >
        </div>
        <div class="text-subtitle-1 font-weight-bold">
          @{{ user.username }}
          <span class="text-subtitle-2 "
            >| Followers: {{ user.followers }}</span
          >
        </div>
        <div>
          {{ user.about_you }}
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-4"></v-divider>
    <EditProfilePopup
      v-model="editProfileOpen"
      v-if="editProfileOpen"
      :info="user"
    />
    <v-container>
      <v-row class="my-10" justify="center">
        <v-col
          cols="12"
          md="6"
          align="left"
          class="pa-8"
          v-for="recipe in recipes"
          :key="recipe.id"
        >
          <ProfileMealCard :info="recipe" />
        </v-col>
        <v-spacer cols="12" md="6"></v-spacer> </v-row
    ></v-container>
  </v-container>
</template>

<script>
import ProfileMealCard from "@/components/Cards/ProfileMealCard.vue";
import EditProfilePopup from "@/components/Popups/EditProfilePopup.vue";
import UserService from "@/services/UserService";

export default {
  components: { EditProfilePopup, ProfileMealCard },
  data() {
    return {
      user: this.$store.getters.getUser,
      editProfileOpen: false,
      recipes: [],
      username: this.$store.getters.getUser.username
    };
  },
  created() {
    this.getYourRecipes();
  },
  methods: {
    async getYourRecipes() {
      let data = await UserService.getCustomRecipes();
      this.recipes = data;
    }
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>
