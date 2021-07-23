<template>
  <v-row>
    <v-dialog
      v-model="show"
      persistent
      max-width="500"
      @click:outside="show = false"
    >
      <v-card>
        <v-btn
          absolute
          right
          fab
          class="accent elevation-0 mt-3"
          @click="show = false"
          max-width="18"
          max-height="18"
          ><v-icon x-small>mdi-close</v-icon></v-btn
        >
        <v-card-title class="headline font-weight-bold pb-0">
          Create an exception!
        </v-card-title>

        <!-- <v-row> -->
        <v-col cols="9" class="py-0">
          <v-card-subtitle class="py-0">
            You have something on you schedule that sticks out? Prepare for it!
          </v-card-subtitle>
        </v-col>
        <!-- </v-row> -->
        <!-- <v-container> -->
        <v-col cols="9" class="py-0 ">
          <div>
            <WeekdayPill
              v-for="i in [1, 2, 3, 4, 5, 6]"
              :key="i"
              :day="weekDays[i]"
            /><WeekdayPill :day="weekDays[0]" />
          </div>
        </v-col>
        <!-- </v-container> -->
        <ul>
          <li>
            Meals
          </li>
        </ul>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import WeekdayPill from "@/components/Settings/WeekdayPill";
const { weekdayName } = require("@/assets/date/date_handling.js");

export default {
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    weekDays() {
      var week = [];
      for (var day of weekdayName) {
        week.push({
          name: day,
          active: false
        });
      }
      return week;
    }
  },

  mounted() {
    console.log(weekdayName);
  },
  components: {
    WeekdayPill
  }
};
</script>
