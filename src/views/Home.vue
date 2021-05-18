<template>
  <v-main>
    <v-container>
      <v-img
        src="@/assets/Avatar.png"
        alt="Avatar"
        lazy-src
        contain
        :height="80"
      />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa
        quam commodi ab non nemo cupiditate ducimus nam odit voluptatum,
        adipisci consequuntur earum perspiciatis possimus aperiam est molestiae
        animi obcaecati!
      </div>
      <v-row v-for="weekday in week_days" :key="weekday['day']">
        <CalendarButton :info="weekday" />
      </v-row>
      <div>{{ weekDays }}</div>
    </v-container>

    <v-divider inset></v-divider>
    <v-container></v-container>
  </v-main>
</template>

<script>
import CalendarButton from "@/components/CalendarButton";

export default {
  data() {
    return {
      week_days: [
        { day: "Monday", date: null, active: false },
        { day: "Tuesday", date: null, active: false },
        { day: "Wednesday", date: null, active: false },
        { day: "Thursday", date: null, active: false },
        { day: "Friday", date: null, active: false },
        { day: "Saturday", date: null, active: false },
        { day: "Sunday", date: null, active: false },
      ],
    };
  },
  mounted() {
    console.log(this.week_days);
  },
  components: { CalendarButton },
  computed: {
    startDate: function() {
      console.log(Date.now());
      return Date.now();
    },
    weekDays() {
      var today = new Date();
      var day = today.getDay(),
        diff = today.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday

      return new Date(today.setDate(diff));
    },
  },
};
</script>
