<template>
  <v-container fluid class="pt-8">
    <v-row>
      <v-col col="12" sm="2">
        <v-img
          src="@/assets/Avatar.png"
          alt="Avatar"
          lazy-src
          contain
          height="100"
        />
      </v-col>
      <v-col xs="12" sm="10">
        <v-col>
          <div>Ciao Lucija!</div>
          <div>
            People who love to eat are always the best people
          </div></v-col
        >
      </v-col>
    </v-row>
    <h1 class="main_divider my-5"></h1>
    <v-divider class="my-8"></v-divider>
    <v-row>
      <v-btn class="small_next"></v-btn>
      a
      <v-btn></v-btn>
    </v-row>
    <v-row>
      <v-col
        align-self="center"
        v-for="weekday in week_days"
        :key="weekday['day']"
      >
        <CalendarButton :info="weekday"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import CalendarButton from "@/components/CalendarButton";
import FloatingNav from "@/components/FloatingNav";

export default {
  data() {
    return {
      week_days: [
        { day: "Monday", date: new Date(2021, 1, 1).getDay(), active: false },
        { day: "Tuesday", date: new Date(2021, 1, 2).getDay(), active: false },
        {
          day: "Wednesday",
          date: 25,
          active: false,
        },
        { day: "Thursday", date: new Date(2021, 1, 4).getDay(), active: false },
        { day: "Friday", date: new Date(2021, 1, 5).getDay(), active: false },
        { day: "Saturday", date: new Date(2021, 1, 6).getDay(), active: false },
        { day: "Sunday", date: new Date(2021, 1, 7).getDay(), active: false },
      ],
    };
  },
  mounted() {
    console.log(this.$vuetify.breakpoint.width);
  },
  components: { CalendarButton, FloatingNav },
  computed: {
    startDate: function() {
      //console.log(Date.now());
      return Date.now();
    },
    weekDays() {
      //znacii nmg jos sate izgubit a kad budemo imali mongo ce bit skroz drugacije i lakse

      // var today = new Date();
      // var day = today.getDay(),
      //   diff = today.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
      // var first_day = today.setDate(diff);
      // var week_days = [];
      // // for (var d = first_day; d <= first_day + 7; d + 1) {
      // //   console.log(d);
      // // }
      // var now = new Date();
      // var daysOfYear = [];
      // for (var d = new Date(2012, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
      //   daysOfYear.push(new Date(d));
      // }
      // console.log(first_day.getDate());
      return null;
    },
  },
};
</script>

<style scoped>
.main_divider {
  border-top: 1px solid black;
}
</style>
