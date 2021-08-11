<template>
  <v-dialog v-model="dialog" max-width="600px" @click:outside="dialog = false">
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
            :value="avatar.url == avatarUrl ? true : false"
            color="accent"
            overlap
            ><v-img
              :src="avatar.url"
              :lazy-src="avatar.url"
              aspect-ratio="1"
              @click="selectedAvatar(avatar.url)"
              class="avatar transform"
            >
            </v-img>
          </v-badge>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-col cols="12" align="right">
          <v-btn
            rounded
            @click="
              dialog = false;
              saved = true;
              $emit('avatar', avatarUrl);
            "
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
      avatarUrl: "",
      val: true,
      messages: 0,
      dialog: false,
      avatars: []
    };
  },
  async created() {
    this.avatars = await AvatarService.getAllAvatars();
  },
  methods: {
    selectedAvatar(avatarUrl) {
      if (this.avatarUrl == avatarUrl) this.avatarUrl = "";
      else this.avatarUrl = avatarUrl;
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
