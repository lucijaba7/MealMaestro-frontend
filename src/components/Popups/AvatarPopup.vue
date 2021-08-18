<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
    @click:outside="
      dialog = false;
      tempAvatar = '';
    "
  >
    <template v-slot:activator="{ on }">
      <v-btn icon x-small v-on="on" class="ma-10">
        <v-avatar size="115">
          <img
            :src="
              avatarUrl && saved
                ? `${avatarUrl}`
                : require('@/assets/choose-avatar.png')
            "
            contain
            position
            alt="Avatar"
          />
        </v-avatar>
      </v-btn>
      <v-col v-if="route == '/profile'" cols="12" align="center" class="mt-2">
        <v-btn v-on="on" rounded class="py-3 primary elevation-0 text-caption"
          >EDIT</v-btn
        ></v-col
      >
    </template>
    <v-card>
      <v-btn
        absolute
        right
        fab
        class="accent elevation-0 mt-3"
        @click="dialog = false"
        width="22.5"
        height="22.5"
        ><v-icon color="white" small>mdi-close</v-icon></v-btn
      >
      <v-row class="ma-0 pt-6" justify="center">
        <v-card-title class="headline font-weight-bold pb-0">
          Let's select your avatar!
        </v-card-title></v-row
      >
      <v-row class="mx-auto px-10 my-5" justify="center">
        <v-col
          v-for="avatar in avatars"
          :key="avatar.name"
          class="d-flex child-flex "
          cols="3"
        >
          <v-badge
            icon="mdi-check"
            :id="avatar._id"
            :value="avatar.url == tempAvatar ? true : false"
            color="accent"
            overlap
          >
          </v-badge
          ><v-img
            :src="avatar.url"
            :lazy-src="avatar.url"
            aspect-ratio="1"
            @click="selectedAvatar(avatar.url)"
            class="avatar transform"
          >
          </v-img>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-col cols="12" align="right">
          <v-btn
            rounded
            @click="save()"
            class="primary elevation-0 text-caption"
            >Save avatar</v-btn
          >
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AvatarService from "@/services/AvatarService.js";

export default {
  name: "AvatarPopup",
  data() {
    return {
      saved: false,
      tempAvatar: "",
      avatarUrl: "",
      val: true,
      dialog: false,
      avatars: [],
      route: ""
    };
  },
  async created() {
    this.route = this.$router.currentRoute.path;
    this.avatars = await AvatarService.getAllAvatars();

    if (this.route == "/profile") {
      this.avatarUrl = this.$store.getters.getUser.avatar.url;
      this.tempAvatar = this.avatarUrl;
      this.saved = true;
    } else {
      this.tempAvatar = this.avatars[0].url;
      console.log(this.tempAvatar);
    }
  },
  methods: {
    selectedAvatar(avatarUrl) {
      if (this.tempAvatar == avatarUrl) this.tempAvatar = "";
      else this.tempAvatar = avatarUrl;
    },
    save() {
      this.dialog = false;
      this.saved = true;
      this.avatarUrl = this.tempAvatar;
      this.$emit("avatar", this.avatarUrl);
    }
  },
  watch: {
    dialog: function() {
      if (!this.dialog) this.tempAvatar = this.avatarUrl;
    }
  }
};
</script>

<style scoped>
.avatar {
  cursor: pointer;
}
.transform {
  float: right;
  transition-property: transform;
  transition-duration: 0.6s;
}
.transform:active {
  transform: scale(0.2);
}
</style>
