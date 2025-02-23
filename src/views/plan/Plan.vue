<template>
  <v-container class="pt-8" :fluid="device != 'lg' || device != 'xl'">
    <v-row>
      <v-col
        cols="12"
        sm="2"
        xl="1"
        :align="device == 'xs' ? 'center' : 'start'"
      >
        <v-img
          v-if="!(Object.keys(user).length === 0)"
          :src="user.avatar.url"
          alt="Avatar"
          lazy-src
          contain
          max-height="100px"
        />
      </v-col>

      <v-col
        cols="12"
        sm="8"
        xl="10"
        order="3"
        order-sm="2"
        align-self="center"
        :align="device == 'xs' ? 'center' : 'start'"
      >
        <div class="text-h5 font-weight-bold">Ciao {{ user.username }}!</div>
        <div>
          {{ user.description }}
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-3"></v-divider>
    <v-row class="my-3">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="4" align="center">
        <v-btn
          :to="{
            name: 'WeeklyPlan',
            query: { startDay: switchWeek(this.$route.query.startDay, -7) }
          }"
          fab
          class="accent elevation-0"
          max-width="18"
          max-height="18"
          ><v-icon x-small>mdi-chevron-left</v-icon></v-btn
        >
        <span class="mx-2"
          >{{ this.month[weekDays[0]["date"].getMonth()] }}
          {{ this.weekDays[0]["date"].getDate() }} -
          {{
            this.weekDays[0]["date"].getMonth() !=
            this.weekDays[6]["date"].getMonth()
              ? this.month[weekDays[6]["date"].getMonth()]
              : ""
          }}
          {{ this.weekDays[6]["date"].getDate() }}</span
        >

        <v-btn
          :to="{
            name: 'WeeklyPlan',
            query: { startDay: switchWeek(this.$route.query.startDay, 7) }
          }"
          fab
          class="accent elevation-0"
          max-width="18"
          max-height="18"
          ><v-icon x-small>mdi-chevron-right</v-icon></v-btn
        >
      </v-col>

      <v-col cols="12" sm="4" :align="device == 'xs' ? 'center' : 'right'">
        <v-btn
          :to="{
            name: 'WeeklyPlan',
            query: {
              startDay: this.$route.query.startDay
            }
          }"
          rounded
          class="py-3 primary elevation-0 text-caption"
          @click="activeDay = -1"
          >show weekly plan</v-btn
        ></v-col
      >
    </v-row>

    <v-row :dense="device == 'xs'">
      <v-col
        align-self="center"
        v-for="weekday in weekDays"
        :key="weekday['day']"
        class="py-1"
      >
        <CalendarButton :info="weekday" @clicked="toggleActive"
      /></v-col>
    </v-row>
    <span v-if="!plan">
      <CreatePlan
        v-if="this.thisWeeksMonday() == this.startDay || this.isItSunday"
        @create_plan="createPlan"
      />
      <NoPlan v-else />
    </span>
    <span v-else>
      <ConfirmPlan v-if="!this.groceries" @confirm_plan="confirmPlan" />
      <span v-else>
        <v-row v-if="!this.finishedShopping"
          ><v-col class="font-weight-bold mt-5 text-h5" align="center"
            ><div>Please finish shopping to start cooking!</div>
            <v-btn
              :to="{
                name: 'GroceryList'
              }"
              rounded
              class="py-3 primary elevation-0 text-caption"
              @click="activeDay = -1"
              >grocery list</v-btn
            >
          </v-col></v-row
        >
      </span>
      <v-fade-transition>
        <router-view
          :key="$route.query.startDay"
          :data="this.data.daily_plans"
          :confirmed="this.confirmed"
          :finishedShopping="this.finishedShopping"
        ></router-view
      ></v-fade-transition>
    </span>
  </v-container>
</template>

<script>
import CalendarButton from "@/components/Plan/CalendarButton";
import FloatingNav from "@/components/Layout/FloatingNav";
import ConfirmPlan from "@/components/Plan/ConfirmPlan";
import CreatePlan from "@/components/Plan/CreatePlan";
import NoPlan from "@/components/Plan/NoPlan";
import WeeklyPlanService from "@/services/WeeklyPlanService";
import moment from "moment";
const { thisWeeksMonday } = require("@/assets/date/date_handling.js");

const { weekdayName, monthName } = require("@/assets/date/date_handling.js");

export default {
  data() {
    return {
      data: [],
      user: this.$store.getters.getUser,
      plan: false,
      groceries: false,
      confirmed: false,
      finishedShopping: false,
      startDay: this.$route.query.startDay,
      userId: this.$store.getters.getUser._id,
      thisWeeksMonday,
      username: this.$store.getters.getUser.username,
      weekday: weekdayName,
      month: monthName,
      activeDay: this.getActiveDay()
    };
  },
  created() {
    this.fetchWeeklyPlan();
  },

  methods: {
    async fetchWeeklyPlan() {
      const data = await WeeklyPlanService.getWeeklyPlan(this.startDay);
      if (data != null) {
        this.plan = true;
        this.data = data;
        this.confirmed = data.confirmed;

        if (data.grocery_list != null) {
          this.groceries = true;
          this.finishedShopping = data.grocery_list.finished_shopping;
        }
      }
    },
    async createPlan() {
      await WeeklyPlanService.createWeeklyPlan(this.startDay);
      this.fetchWeeklyPlan();
    },
    getActiveDay() {
      return this.$route.name == "WeeklyPlan"
        ? -1
        : weekdayName.indexOf(this.$route.query.weekDay);
    },
    toggleActive(date) {
      this.activeDay = date.getDay();
    },
    switchWeek(date, parameter) {
      var thisDate = new Date(date);
      return moment(
        new Date(thisDate.setDate(thisDate.getDate() + parameter))
      ).format("YYYY-MM-DD");
    },
    async confirmPlan() {
      await WeeklyPlanService.createGroceryList(this.data._id);
      this.groceries = true;
      this.confirmed = true;
    }
  },
  components: { CalendarButton, FloatingNav, CreatePlan, ConfirmPlan, NoPlan },
  computed: {
    weekDays() {
      var current_date = new Date(this.$route.query.startDay);
      var week_days = [];

      do {
        week_days.push({
          day: weekdayName[current_date.getDay()],
          date: new Date(current_date),
          active: +(this.activeDay == current_date.getDay())
        });
        current_date.setDate(current_date.getDate() + 1);
      } while (week_days.length != 7);

      return week_days;
    },
    isItSunday() {
      var today = new Date();

      return (
        moment(today)
          .add(1, "days")
          .format("YYYY-MM-DD") == this.startDay
      );
    },
    device() {
      return this.$vuetify.breakpoint.name;
    }
  },
  watch: {
    weekDays: function() {
      for (var day of this.weekDays) {
        day.active = +(this.activeDay == day.date.getDay());
      }
    },
    $route: function() {
      this.activeDay = this.getActiveDay();
      this.fetchWeeklyPlan();
    }
  }
};
</script>

<style scoped>
.main_divider {
  border-top: 1px solid black;
}
</style>
