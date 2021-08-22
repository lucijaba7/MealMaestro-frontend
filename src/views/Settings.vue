<template>
  <v-container fluid>
    <p class="text-h4 mt-5 mb-1">Settings</p>
    <p class="pl-2">
      Here you can edit your settings . By making your wishes more detailed,
      Meal Maestro will create a better plan!
    </p>

    <v-expansion-panels flat multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="font-weight-bold">
          <ul>
            <li>Meals</li>
          </ul>
        </v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content>
          <v-expansion-panels flat multiple>
            <v-expansion-panel v-for="(meal, i) in meals" :key="i">
              <v-expansion-panel-header class="font-weight-bold">
                &#8226; {{ meal.name }}
              </v-expansion-panel-header>
              <v-divider></v-divider>
              <v-expansion-panel-content>
                <SettingsMeal />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels flat multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="font-weight-bold">
          &#8226; General settings
        </v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="mt-3">
          <ul>
            <li>Whose meals would you like to cook?</li>
            <v-radio-group class="ma-0" v-model="general_1" column>
              <v-radio
                class="m-0 text--primary"
                v-for="option in this.general_1_options"
                :key="option"
                :label="option"
                :value="option"
              ></v-radio>
            </v-radio-group>
            <li>How often would you like to try new recipes?</li>
            <v-radio-group class="ma-0" v-model="general_2" column>
              <v-radio
                v-for="option in this.general_2_options"
                :key="option"
                :label="option"
                :value="option"
              ></v-radio>
            </v-radio-group>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels flat multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="font-weight-bold">
          &#8226; Exceptions
        </v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content>
          <div>TU ce ic exceptions</div>
          <v-btn
            rounded
            class="py-3 primary elevation-0 text-caption"
            @click="activeDay = -1"
            >ADD <v-icon>mdi-plus</v-icon></v-btn
          ></v-expansion-panel-content
        >
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import SettingsMeal from "@/components/Settings/SettingsMeal";
// import { User } from "@/services";

export default {
  data() {
    return {
      username: localStorage.getItem("username"),
      meals: [
        { name: "Breakfast" },
        { name: "Lunch" },
        { name: "Dinner" },
        { name: "Snack" },
        { name: "Dessert" }
      ],
      general_1: null,
      general_1_options: ["Only my own", "Saved recipes by others", "Both"],
      general_2: null,
      general_2_options: ["Never", "1-2 times a week", "Sometimes", "Every day"]
    };
  },
  created() {
    // this.fetchUserSettings(this.username);
  },
  methods: {
    // async fetchUserSettings(username) {
    //   let response = await User.getSettings(username);
    //   return response.data;
    // }
  },
  components: {
    SettingsMeal
  }
};
</script>

<style scoped lang="scss">
.theme--light.v-expansion-panels .v-expansion-panel {
  background-color: var(--v-background-base) !important;
}
.v-expansion-panel-content {
  margin-top: 5px;
}
.v-label {
  color: #445462 !important;
}
</style>
