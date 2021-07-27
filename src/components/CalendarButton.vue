<template>
  <v-card
    :to="{
      name: 'DailyPlan',
      query: {
        username: this.username,
        startDay: this.$route.query.startDay,
        weekDay: this.info.day
      }
    }"
    class="mx-auto rounded-xl"
    :min-width="minWidth"
    :max-width="maxWidth"
    :color="isActive ? 'secondary' : 'white'"
    :class="{ 'mb-3 elevation-4': isActive }"
    @click="toggleActive()"
  >
    <v-row>
      <v-col cols="12" class="text-center pb-0" align-self="center">
        <div
          class=" font-weight-bold text-uppercase"
          :class="{ 'white--text': isActive }"
          :style="device == 'xs' ? 'font-size: 17px' : 'font-size:18px'"
        >
          {{ day }}
        </div>
        <v-divider
          class="my-0"
          :color="isActive ? '#ffffff' : '#546778'"
          style="margin: 10%"
        ></v-divider>
      </v-col>

      <v-col cols="12" class=" text-center pt-0"
        ><div
          class=" font-weight-bold "
          :class="isActive ? 'white--text' : 'secondary--text'"
          :style="device == 'xs' ? 'font-size: 17px' : 'font-size:25px'"
        >
          {{ info.date.getDate() }}
        </div></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      username: localStorage.getItem("username"),
      isActive: this.info.active
    };
  },
  methods: {
    toggleActive() {
      this.$emit("clicked", this.info.date);
    }
  },
  computed: {
    minWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 5; //241;
        case "sm":
          return 28;
        case "md":
          return 30;
        case "lg":
          return 100;
        case "xl":
          return 150;
      }
    },
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 30;
        case "sm":
          return 90;
        case "md":
          return 140;
        case "lg":
          return 140;
        case "xl":
          return 160;
      }
    },
    device() {
      return this.$vuetify.breakpoint.name;
    },
    day() {
      if (this.device == "xs") return this.info.day.slice(0, 1);
      return this.info.day.slice(0, 3);
    }
  },
  watch: {
    info: function() {
      this.isActive = this.info.active;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  cursor: pointer;
  transition: all 0.2s;
}
.divier {
  width: 100%;
}
</style>
