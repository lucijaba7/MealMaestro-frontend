<template>
  <v-container fluid class="pt-8 ">
    <v-row>
      <v-col cols="8" sm="2" align="start">
        <v-img src="@/assets/Avatar.png" alt="Avatar" lazy-src contain />
      </v-col>
      <v-row>
        <v-col cols="12" sm="8">
          <v-col class="pb-0">
            <div class="text-h5 font-weight-bold">
              Your profile
              <v-icon size="100%" class="px-5 primary--text"
                >mdi-square-edit-outline</v-icon
              >
              <span class="text-subtitle-2">Followers:</span>
              <div class="text-subtitle-1 font-weight-bold">
                {{ userName }}
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
    <v-row class="my-10">
      <v-col cols="12" md="6" align="left">
        <ProfileMealCard />
      </v-col>
      <v-col cols="12" md="6" align="left">
        <ProfileMealCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileMealCard from "@/components/Cards/ProfileMealCard.vue";

export default {
  components: { ProfileMealCard },
  data() {
    return {
      userName: "@SweetAmy",
      checkbox2: null
    };
  }
};
</script>
