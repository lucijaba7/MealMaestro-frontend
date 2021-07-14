<template>
  <v-container fluid fill-height justify-center>
    <v-row justify="space-around">
      <v-col xs="12" sm="6" md="4">
        <v-card class="elevation-0 ">
          <v-card-text class="py-2">
            <v-row justify="center">
              <v-col xs="8" md="8" flat>
                <v-card class="mx-auto" flat>
                  <v-img justify-center src="../assets/logo.png" />
                </v-card>
              </v-col>
            </v-row>
            <v-card-title class="justify-center">
              <h2 class="py-5 justify-center">Sign in</h2>
            </v-card-title>
            <v-form>
              <v-text-field
                class="py-3"
                name="login"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
            <v-card-actions xs3 md4 class="justify-center">
              <div class="text-center pb-4">
                <v-btn
                  rounded
                  class="px-15 py-3 mt-5 primary elevation-0"
                  to="/"
                  >Login</v-btn
                >
              </div>
            </v-card-actions>
            <v-row align="end" justify="center">
              <span class="pt-5 ">New to MealMaestro?</span>
              <v-btn
                small
                depressed
                class="transparent text-left "
                to="/registration"
                >Create account</v-btn
              >
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import AvatarPopup from '../components/AvatarPopup.vue'

export default {
  name: "Login",

  props: {
    source: String
  }
};
</script>

<style></style>
