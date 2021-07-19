<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="700"
      @click:outside="show = false"
    >
      <!-- ili 800 sirina??? -->
      <v-card>
        <v-btn
          fab
          class="accent elevation-0 float-right ma-3"
          @click="show = false"
          max-width="20"
          max-height="20"
          ><v-icon x-small>mdi-close</v-icon></v-btn
        >
        <v-card-title
          class="headline font-weight-bold pt-6 justify-center ml-10 text-no-wrap"
        >
          Edit Profile
        </v-card-title>

        <v-row class="my-4">
          <v-col cols="12">
            <h4 class="ml-5">- Your avatar -</h4>
          </v-col>
          <v-col cols="12" align="center"> <AvatarPopup /> </v-col
          ><v-col cols="12" align="center">
            <v-btn rounded class="py-3 primary elevation-0 text-caption"
              >EDIT</v-btn
            ></v-col
          >
        </v-row>

        <v-row class="my-4">
          <v-col cols="12">
            <h4 class="ml-5 ">- About you -</h4>
          </v-col>
          <v-col class="pb-0" cols="12" align="center">
            <v-textarea
              class="mx-5 pb-0"
              color="primary darken-2"
              rows="2"
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
          <v-col class="pt-0" cols="12"
            ><v-btn rounded class="py-3  ml-5 primary elevation-0 text-caption"
              >save changes</v-btn
            ></v-col
          >
        </v-row>

        <v-row class="my-4"
          ><v-col cols="12">
            <h4 class="ml-5 ">- Personal info -</h4>
          </v-col>
          <v-col cols="12">
            <v-row justify="center">
              <v-form>
                <v-text-field
                  label="Username"
                  v-model="userName"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="firstName"
                  label="First name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="lastName"
                  label="Last name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="password"
                  label="Password"
                  type="password"
                ></v-text-field>
                <v-text-field
                  id="repPassword"
                  v-model="repeatPassword"
                  label="Repeat password"
                  type="password"
                ></v-text-field> </v-form
            ></v-row>
          </v-col>
        </v-row>
        <h4 class="ml-5 ">- Change password -</h4>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded class="py-3 my-5 mr-2 primary elevation-0">Done</v-btn>
          <!-- <v-btn outlined rounded  @click="show = false" class="py-3 my-5 mr-2 elevation-0">Close</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import AvatarPopup from "@/components/Popups/AvatarPopup";

export default {
  name: "EditProfilePopup",
  props: {
    value: Boolean
  },
  data() {
    return {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: ""
    };
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
