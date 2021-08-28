<template>
  <v-container fluid fill-height justify-center>
    <v-row justify="space-around">
      <v-col xs="12" sm="6" md="4">
        <v-card class="elevation-0 ">
          <v-card-text class="py-2">
            <v-row justify="center">
              <v-card-title class="justify-center">
                <h2 class="justify-center">Sign up</h2>
              </v-card-title>
            </v-row>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row xs="12" md="8" class="my-8" justify="center">
                <AvatarPopup @avatar="setAvatar" />
              </v-row>
              <v-text-field
                label="Username"
                v-model="userName"
                type="text"
                :rules="usernameRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                type="text"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                label="Password"
                type="password"
                :rules="passwordRules"
                required
              ></v-text-field>
              <v-text-field
                id="repPassword"
                v-model="repeatPassword"
                label="Repeat password"
                type="password"
                :rules="passwordRepeatRules"
                required
              ></v-text-field>
              <v-select
                class="pt-0"
                label="Preferences"
                :items="allTags"
                v-model="selectedTags"
                full-width
                multiple
                chips
                deletable-chips
                single-line
                :rules="[v => !!v || 'Item is required']"
                required
              >
              </v-select>
            </v-form>
            <v-card-actions xs3 md4 class="justify-center">
              <div class="text-center pb-4">
                <v-btn
                  rounded
                  class="px-15 primary elevation-0"
                  @click="signup()"
                  >Signup</v-btn
                >
              </div>
            </v-card-actions>
            <v-row align="end" justify="center">
              <span class="pt-5 ">Already have an account?</span>
              <a href="/login" class="pl-2">
                SIGN IN
              </a>
            </v-row>
            <v-row>
              <v-col xs="12" md="12" justify-center class="text-center ">
                <p class="pt-5 text-center ">
                  By continuing, you agree to MealMaestro
                  <strong>Terms of Use</strong> and confirm that you have read
                  its <strong>Privacy Policy</strong>.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AvatarPopup from "@/components/Popups/AvatarPopup";
import AuthService from "@/services/AuthService.js";

export default {
  name: "Registration",
  components: { AvatarPopup },
  data() {
    return {
      valid: true,
      avatarUrl: "",
      userName: "",
      email: "",
      password: "",
      repeatPassword: "",
      usernameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 14) || "Name must be less than 14 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      servingsRules: [
        v => !!v || "Servings are required",
        v => (v && v > 0) || "Servings must be bigger than 0"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Minimum length is 8 characters"
      ],
      passwordRepeatRules: [v => !!v || "Please repeat your password."],
      allTags: [
        { text: "vegetarian" },
        { text: "vegan" },
        { text: "glutenFree" },
        { text: "dairyFree" },
        { text: "veryHealthy" },
        { text: "cheap" },
        { text: "lowFodmap" }
      ],
      selectedTags: [],
      servings: ""
    };
  },
  props: {
    source: String
  },
  methods: {
    setAvatar(avatarUrl) {
      this.avatarUrl = avatarUrl;
    },
    validate() {
      this.$refs.form.validate();
    },
    async signup() {
      try {
        await this.validate();
        if (this.valid) {
          let user = {
            username: this.userName,
            email: this.email,
            password: this.password,
            password_confirm: this.repeatPassword,
            preferences: this.selectedTags,
            avatar: this.avatarUrl
          };

          await AuthService.signup(user);

          this.$router.push({ name: "Login" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.v-text-field input {
  font-size: 50px;
}
</style>
