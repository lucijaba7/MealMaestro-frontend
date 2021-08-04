<template>
  <v-container fluid fill-height justify-center>
    <v-row justify="space-around">
      <v-col xs="12" sm="6" md="4">
        <v-card class="elevation-0 ">
          <v-card-text class="py-2">
            <v-row justify="center">
              <v-card-title class="justify-center">
                <h2 class="justify-center">Registration</h2>
              </v-card-title>
            </v-row>
            <v-row xs="12" md="8" class="mb-4" justify="center">
              <AvatarPopup />
            </v-row>
            <v-form>
              <v-text-field
                label="Username"
                v-model="userName"
                type="text"
                :rules="inputRules"
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
              >
              </v-select>
              <v-text-field
                v-model="servings"
                label="Servings"
                type="number"
                required
              ></v-text-field>
            </v-form>
            <v-card-actions xs3 md4 class="justify-center">
              <div class="text-center pb-4">
                <v-btn rounded class="px-15 primary elevation-0" to="/"
                  >Next</v-btn
                >
              </div>
            </v-card-actions>
            <v-row align="end" justify="center">
              <span class="pt-5 ">Already have an account?</span>
              <a
                href="/login"
                style="text-decoration: none"
                class="pl-1 primaryText--text"
              >
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

export default {
  name: "Login",
  components: { AvatarPopup },
  data() {
    return {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      inputRules: [v => v.length >= 5 || "Minimum length is 5 characters"],
      allTags: [
        { text: "Vegeterian" },
        { text: "Vegan" },
        { text: "Gluten-free" },
        { text: "Dairy-free" },
        { text: "Very healthy" },
        { text: "High protein" },
        { text: "Low-fat" }
      ],
      selectedTags: [],
      servings: ""
    };
  },
  props: {
    source: String
  },
  methods: {
    clickmethod() {}
  }
};
</script>

<style></style>
