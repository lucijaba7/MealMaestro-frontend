<template>
  <v-container fluid class="pt-8 ">
    <v-row>
      <v-col cols="8" sm="2" align="start">
        <v-img src="@/assets/Avatar.png" alt="Avatar" lazy-src contain />
      </v-col>
      <v-col cols="12" sm="8">
        <div class="text-h5 font-weight-bold">Ciao Lucija!</div>
        <div>
          People who love to eat are always the best people
        </div>
      </v-col>
      <FloatingNav />
    </v-row>
    <v-divider class="my-3"></v-divider>
    <v-row class="my-3">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="8" align="center">
        <v-btn fab x-small class="accent elevation-0"
          ><v-icon x-small>mdi-chevron-left</v-icon></v-btn
        >
        <span class="mx-2">April 12 - April 18</span>
        <v-btn fab x-small class="accent elevation-0"
          ><v-icon x-small>mdi-chevron-right</v-icon></v-btn
        ></v-col
      ><v-col cols="12" sm="2" align="end">BOTUN</v-col>
    </v-row>

    <v-row :dense="this.$vuetify.breakpoint.name == 'xs'">
      <v-col
        align-self="center"
        v-for="weekday in week_days"
        :key="weekday['day']"
        class="py-1"
      >
        <CalendarButton :info="weekday" @click="console.log('1')"
      /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="5" md="4" lg="2" align="start"
        ><v-select :items="meals" label="Meal" v-model="defaultMeal"></v-select
      ></v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3">
        <v-img src="@/assets/meal1.png" class="rounded-xl"> </v-img>
      </v-col>
      <v-col cols="12" sm="9">
        <v-row class="justify-space-between">
          <v-col
            ><div class="font-weight-bold">
              Tomato, Peach, and Basil Salad
            </div></v-col
          ><v-col align="end"
            ><div>aaa</div>
            <!-- <v-row>
              <v-col>COOKED</v-col>
              <v-col
                ><v-simple-checkbox hint="cooked"></v-simple-checkbox
              ></v-col>
            </v-row> -->
          </v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
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
          active: true,
        },
        { day: "Thursday", date: new Date(2021, 1, 4).getDay(), active: false },
        { day: "Friday", date: new Date(2021, 1, 5).getDay(), active: false },
        { day: "Saturday", date: new Date(2021, 1, 6).getDay(), active: false },
        { day: "Sunday", date: new Date(2021, 1, 7).getDay(), active: false },
      ],
      defaultMeal: "Breakfast",
      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
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
