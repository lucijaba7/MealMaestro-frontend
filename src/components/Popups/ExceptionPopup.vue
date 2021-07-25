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
            <v-row>
              <v-col class="pb-0 mt-6" cols="2" align="start">
                Meals
              </v-col>

              <v-col class="pb-0 mr-0" cols="10">
                <v-container class="py-0">
                  <v-row align="center" justify="start">
                    <v-col v-if="!allSelected" cols="12">
                      <v-select
                        :items="mealType"
                        v-model="selected"
                        full-width
                        multiple
                        chips
                        deletable-chips
                        single-line
                      >
                      </v-select>

                      <template
                        v-slot:selection="{ attrs, item, select, selected }"
                      >
                        <v-chip
                          v-bind="attrs"
                          :input-value="selected"
                          close
                          @click="select"
                          @click:close="remove(item.type)"
                        >
                          <strong>{{ item.type }}</strong>
                          <span>(interest)</span>
                        </v-chip>
                      </template>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </li>
          <li>
            <v-row>
              <v-col class="pb-0 mt-6" cols="3" align="start">
                Servings
              </v-col>
              <v-col class="pb-0" cols="3">
                <v-text-field v-model="servings" type="number"></v-text-field>
              </v-col>
            </v-row>
          </li>
          <li>
            <v-row>
              <v-col class="pb-0 pr-0 mt-6" cols="4" align="start">
                Average time
              </v-col>
              <v-col class="pb-0 pl-0 " cols="3">
                <v-text-field v-model="time" type="number"></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-select :items="timeType"></v-select>
              </v-col>
              <v-col> </v-col>
            </v-row>
          </li>
          <li>
            <v-row>
              <v-col class="pb-0 pr-0 mt-6" cols="4" align="start">
                Preferences?
              </v-col>
              <v-col class="pb-0 mr-0">
                <v-col v-if="!allSelectedTags" cols="12">
                  <v-select
                    :items="allTags"
                    v-model="selectedTags"
                    full-width
                    multiple
                    chips
                    deletable-chips
                    single-line
                  >
                    <!-- ovdje ovaj close nece closeat -->

                    <!-- <template #selection="{ item }">
                  <v-chip close color="primary">{{ item.text }}</v-chip>
                </template> -->
                  </v-select>

                  <template
                    v-slot:selection="{ attrs, item, select, selectedTags }"
                  >
                    <v-chip
                      v-bind="attrs"
                      :input-value="selectedTags"
                      close
                      @click="select"
                      @click:close="remove(item)"
                    >
                      <strong>{{ item }}</strong>
                      <span>(interest)</span>
                    </v-chip>
                  </template>
                </v-col>
              </v-col>
            </v-row>
          </li>
          <li>
            <v-row>
              <v-col class="pb-0 pr-0 " cols="4" align="start">
                New recipe?
              </v-col>
              <v-col>
                <v-checkbox v-model="checkbox1"></v-checkbox>
              </v-col>
            </v-row>
          </li>
        </ul>
        <v-card-actions class="pa-0">
          <v-row justify="center" class="ma-0">
            <v-btn rounded class="py-3 px-15  mb-5 mr-2 primary elevation-0"
              >Publish</v-btn
            >
            <v-btn
              outlined
              rounded
              @click="show = false"
              class="py-3 px-10  mb-5 mr-2 elevation-0"
              >Cancel</v-btn
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import WeekdayPill from "@/components/Settings/WeekdayPill";
const { weekdayName } = require("@/assets/date/date_handling.js");

export default {
  data() {
    return {
      selectedMeal: [],
      mealType: [
        { text: "Breakfast" },
        { text: "Lunch" },
        { text: "Dinner" },
        { text: "Snack" },
        { text: "Dessert" }
      ],
      allTags: [
        { text: "Vegeterian" },
        { text: "Vegan" },
        { text: "Gluten-free" },
        { text: "Dairy-free" },
        { text: "Very healthy" },
        { text: "High protein" },
        { text: "Low-fat" }
      ],
      servings: Number,
      time: Number,
      search: "",
      selected: [],
      selectedTags: [],
      timeType: ["h", "min"],
      checkbox1: ["primary"]
    };
  },
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
    allSelected() {
      return this.selected.length === this.mealType.length;
    },
    allSelectedTags() {
      return this.selectedTags.length === this.allTags.length;
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

  watch: {
    selected() {
      this.search = "";
    }
  },

  methods: {
    remove(item) {
      const index = this.selected.indexOf(item.type);
      if (index >= 0) this.selected.splice(index, 1);
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
