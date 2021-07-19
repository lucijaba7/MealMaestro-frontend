<template>
  <div>
    <WeekdayPill
      v-for="i in [1, 2, 3, 4, 5, 6]"
      :key="i"
      :day="weekDays[i]"
    /><WeekdayPill :day="weekDays[0]" />
  </div>
</template>

<script>
import WeekdayPill from "@/components/Settings/WeekdayPill";
const { weekdayName } = require("@/assets/date/date_handling.js");

export default {
  name: "SettingsMeal",
  data() {
    return {};
  },
  computed: {
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

<style></style>
