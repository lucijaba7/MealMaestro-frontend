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
          v-if="!(Object.keys(user).length === 0)"
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
        <div v-if="!this.$route.query.username">
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
            <span class="text-subtitle-2">| Followers: {{ followers }}</span>
          </div>
        </div>

        <div v-else>
          <div class="text-h5 font-weight-bold">
            {{ user.username }}
            <v-btn
              v-if="!following"
              @click="followUser"
              small
              rounded
              class="ml-4 pt-0 pl-1 pr-2 elevation-0 secondary"
              ><v-icon>mdi-plus</v-icon> Follow
            </v-btn>

            <v-btn
              v-else
              @click="unfollowUser"
              small
              rounded
              outlined
              class="ml-4 pt-0 px-1 elevation-0"
              >Unfollow
            </v-btn>
          </div>

          <div class="text-subtitle-2 ">Followers: {{ followers }}</div>
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
      @getData="updateUser()"
    />
    <v-container>
      <v-row v-if="this.recipes.length" class="my-10" justify="center">
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
        <v-spacer cols="12" md="6"></v-spacer>
      </v-row>
      <v-row v-else justify="center" class="caption mt-15 text-center"
        >Recipes not available.</v-row
      >
      <v-row
        v-if="this.recipes.length < this.numOfRecipes"
        justify="center"
        class="mb-5"
        ><v-btn @click="loadMore" plain>Load more...</v-btn></v-row
      >
    </v-container>
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
      user: {},
      editProfileOpen: false,
      recipes: [],
      following: null,
      followers: [],
      numOfRecipes: 0
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      if (this.$route.query.username) {
        this.user = await UserService.getUserData(this.$route.query.username);
        let currentUser = this.$store.getters.getUser;

        if (currentUser.following.includes(this.user._id))
          this.following = true;
        else this.following = false;
      } else {
        this.user = this.$store.getters.getUser;
      }

      this.getRecipes(0, 10);
      this.countFollowers();
      this.numOfRecipes = this.user.custom_recipes.length;
    },
    updateUser() {
      this.user = this.$store.getters.getUser;
    },
    async getRecipes(start, end) {
      if (this.$route.query.username) {
        const newRecipes = await UserService.getUserRecipes(
          this.$route.query.username,
          start,
          end
        );

        if (this.recipes.length == 0) this.recipes = newRecipes;
        else this.recipes = this.recipes.concat(newRecipes);
      } else {
        const newRecipes = await UserService.getCustomRecipes(start, end);

        if (this.recipes.length == 0) {
          this.recipes = newRecipes;
        } else this.recipes = this.recipes.concat(newRecipes);
      }
    },
    loadMore() {
      this.getRecipes(this.recipes.length, this.recipes.length + 10);
    },
    async followUser() {
      let response = await UserService.followUser(this.user._id);
      const updatedUser = response.data.user;
      this.$store.dispatch("updateUser", updatedUser);
      this.following = true;
      this.countFollowers();
    },
    async unfollowUser() {
      let response = await UserService.unfollowUser(this.user._id);
      const updatedUser = response.data.user;
      this.$store.dispatch("updateUser", updatedUser);
      this.following = false;
      this.countFollowers();
    },
    async countFollowers() {
      let response = await UserService.countFollowers(this.user._id);

      let hasFollowers = response.find(obj => {
        return obj._id == this.user._id;
      });

      if (hasFollowers) this.followers = hasFollowers.count;
      else this.followers = 0;
    }
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  },
  watch: {
    $route: function() {
      this.getUser();
    }
  }
};
</script>
