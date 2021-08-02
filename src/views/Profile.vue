<template>
  <v-container fluid class="pt-8 ">
    <v-row>
      <v-col cols="6" sm="2" xl="1" align="center">
        <v-img
          src="@/assets/Avatar.png"
          alt="Avatar"
          max-width="150px"
          lazy-src
          contain
        />
      </v-col>
      <v-row>
        <v-col cols="12" sm="8">
          <v-col class="pb-0">
            <div class="text-h5 font-weight-bold">
              Your profile
              <v-icon
                size="100%"
                class="px-5 primary--text"
                @click.stop="editProfileOpen = true"
                >mdi-square-edit-outline</v-icon
              >
              <EditProfilePopup v-model="editProfileOpen" />
              <span class="text-subtitle-2">Followers:</span>
              <div class="text-subtitle-1 font-weight-bold">
                @{{ username }}
              </div>
            </div>
          </v-col>
          <v-col cols="12" class="pt-1 pb-0">
            <div class="text-body-2 font-weight-medium text-left pa-0">
              People who love to eat are always the best people
            </div>
          </v-col>
          <div class="px-2 pt-0">
            <v-checkbox
              v-model="checkbox2"
              color="primary"
              label="Always publish my recipes"
            >
            </v-checkbox>
          </div>
        </v-col>
      </v-row>
    </v-row>
    <v-divider class="my-3"></v-divider>
    <v-spacer></v-spacer>
    <v-row class="my-10" justify="center">
      <v-col cols="12" sm="8" md="7" lg="5" align="left" class="pa-8">
        <ProfileMealCard />
      </v-col>
      <v-col cols="12" sm="8" md="7" lg="5" align="left" class="pa-8">
        <ProfileMealCard />
      </v-col>
      <v-col cols="12" sm="8" md="7" lg="5" align="left" class="pa-8">
        <ProfileMealCard />
      </v-col>
      <v-col cols="12" sm="8" md="7" lg="5" align="left" class="pa-8">
        <ProfileMealCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileMealCard from "@/components/Cards/ProfileMealCard.vue";
import EditProfilePopup from "@/components/Popups/EditProfilePopup.vue";
import { User } from "@/services";

export default {
  components: { EditProfilePopup, ProfileMealCard },
  data() {
    return {
      username: localStorage.getItem("username"),
      editProfileOpen: false,
      checkbox2: null
    };
  },
  created() {
    this.fetchUserData(this.username);
    console.log(this.device);
  },
  methods: {
    async fetchUserData(username) {
      let response = await User.getData(username);
      return response.data;
    }
  },
  computed: {
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>
