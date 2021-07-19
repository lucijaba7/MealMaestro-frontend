<template>
  <v-btn
    fab
    class="ma-1 mt-4 elevation-1"
    max-width="25"
    max-height="25"
    @click="toggleActive"
    :class="{ primary: this.active }"
    >{{ this.day.name[0] }}</v-btn
  >
</template>

<script>
export default {
  name: "WeekdayPill",
  props: ["day"],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.weekDays);
  },
  methods: {
    toggleActive() {
      this.day.active = !this.day.active;
    }
  },
  computed: {
    active: function() {
      return this.day.active;
    }
  }
};
</script>

// NE MOGU TOGGLEAT BOJU VEC SATIMA POKUSAVAM
