<template>
  <v-row justify="center" :key="componentKey">
    <v-dialog
      v-model="show"
      persistent
      max-width="600"
      @click:outside="show = false"
    >
      <v-card>
        <v-row class="ma-0">
          <v-col class="pb-0">
            <v-btn
              absolute
              right
              fab
              class="accent elevation-0 mt-3"
              @click="show = false"
              width="22.4"
              height="22.4"
              ><v-icon color="white" small>mdi-close</v-icon></v-btn
            >
          </v-col></v-row
        >
        <v-row class="ma-0" justify="center">
          <v-card-title class="headline font-weight-bold text-no-wrap pb-0">
            Edit Profile
          </v-card-title></v-row
        >

        <v-row class="my-4 mx-0">
          <v-col cols="12" class="pt-0">
            <h4 class="pl-5">- Your avatar -</h4>
          </v-col>
          <v-col cols="12" align="center">
            <AvatarPopup />
          </v-col>
        </v-row>

        <v-row class="my-4 mx-0">
          <v-col cols="12" class="pt-0">
            <h4 class="pl-5">- About you -</h4>
          </v-col>
          <v-col class="pb-0" cols="12" align="center">
            <v-textarea
              class="mx-5 pb-0"
              color="primary darken-2"
              rows="2"
              v-model="about_you"
              :rules="[
                v =>
                  (v || '').length <= 100 ||
                  'Description must be 100 characters or less'
              ]"
              counter
              outlined
              auto-grow
              clearable
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row class="my-4 mx-0" justify="center">
          <v-col cols="12" class="pt-0">
            <h4 class="pl-5">- Personal info -</h4>
          </v-col>
          <v-col cols="8" class="px-6">
            <v-form>
              <v-text-field
                label="Username"
                v-model="username"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                type="text"
              ></v-text-field>
            </v-form>
          </v-col>
        </v-row>

        <v-col class="pt-0" cols="12" align="center">
          <v-btn
            @click="updateData"
            rounded
            class="primary elevation-0 text-caption"
            >save changes</v-btn
          >
        </v-col>

        <v-row class="my-4 mx-0" justify="center">
          <v-col cols="12" class="pt-0">
            <h4 class="ml-5 ">- Change password -</h4>
          </v-col>
          <v-col cols="8" class="px-6">
            <v-form>
              <v-text-field
                id="password"
                v-model="currentPassword"
                label="Current password"
                type="password"
              ></v-text-field>
              <v-text-field
                id="newPassword"
                v-model="newPassword"
                label="New password"
                type="password"
              ></v-text-field>
              <v-text-field
                id="repPassword"
                v-model="confirmPassword"
                label="Confirm new password"
                type="password"
              ></v-text-field>
              <v-col class="pt-7" cols="12" align="center">
                <v-btn
                  @click="changePassword"
                  rounded
                  class="primary elevation-0 text-caption"
                  >set new password</v-btn
                >
              </v-col>
            </v-form>
          </v-col>
        </v-row>

        <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn
            @click="show = false"
            rounded
            class="ma-3 px-8 primary elevation-0"
            >Done</v-btn
          >
          <!-- <v-btn outlined rounded  @click="show = false" class="py-3 my-5 mr-2 elevation-0">Close</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import AvatarPopup from "@/components/Popups/AvatarPopup";
import UserService from "@/services/UserService.js";

export default {
  name: "EditProfilePopup",
  props: {
    value: Boolean,
    info: Object
  },
  data() {
    return {
      componentKey: 0,
      avatars: [],
      username: this.info.username,
      email: this.info.email,
      avatarUrl: this.info.avatarUrl,
      about_you: this.info.about_you,
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  },
  methods: {
    setAvatar(avatarUrl) {
      this.avatarUrl = avatarUrl;
    },
    async updateData() {
      try {
        if (true) {
          let data = {};
          // dodaj za avatar
          if (this.about_you != this.info.about_you)
            data["about_you"] = this.about_you;
          if (this.username != this.info.username)
            data["username"] = this.username;
          if (this.email != this.info.email) data["email"] = this.email;

          const response = await UserService.updateData(data);
          const updatedUser = response.data.user;
          this.$store.dispatch("updateUser", updatedUser);
          this.forceRerender();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async changePassword() {
      try {
        console.log("updejtam");
        //let validation = await this.validate();
        if (true) {
          const credentials = {
            currentPassword: this.currentPassword,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword
          };
          const response = await UserService.changePassword(credentials);
          const token = response.token;

          this.$store.dispatch("changePassword", token);
        }
      } catch (error) {
        console.log(error);
      }
    },
    forceRerender() {
      this.componentKey += 1;
    }
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: {
    AvatarPopup
  }
};
</script>

<style scoped>
.v-text-field {
  padding: 0px;
}
</style>
