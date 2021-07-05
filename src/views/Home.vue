<template>
  <v-container :fluid="device != 'lg'" class="pt-8">
    <v-row>
      <v-col cols="6" sm="2" xl="1" align="start">
        <v-img
          src="@/assets/Avatar.png"
          alt="Avatar"
          lazy-src
          contain
          max-width="150px"
        />
      </v-col>

      <v-col cols="12" sm="8" xl="9" order="3" order-sm="2" align-self="center">
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
      <v-col cols="12" sm="4" align="center">
        <v-btn fab class="accent elevation-0" max-width="18" max-height="18"
          ><v-icon x-small>mdi-chevron-left</v-icon></v-btn
        >
        <span class="mx-2">November 12 - December 18</span>

        <v-btn fab class="accent elevation-0" max-width="18" max-height="18"
          ><v-icon x-small>mdi-chevron-right</v-icon></v-btn
        >
      </v-col>

      <v-col cols="12" sm="4" :align="device == 'xs' ? 'center' : 'end'"
        ><v-btn rounded class="py-3 primary elevation-0 text-caption"
          >show weekly plan</v-btn
        ></v-col
      >
    </v-row>

    <v-row :dense="device == 'xs'">
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
      <v-col cols="12" sm="5" md="4">
        <v-img src="@/assets/meal1.png" class="rounded-xl" height="100%">
        </v-img>
      </v-col>
      <v-col cols="12" sm="7" md="8">
        <v-row>
          <v-col align-self="end" cols="12" sm="7"
            ><div class="font-weight-bold text-h6">
              {{ recipe.name }}
            </div></v-col
          ><v-col align-self="end" cols="12" sm="5">
            <v-row align="center" justify="end">
              <span>cooked </span>
              <v-checkbox v-model="checkbox1"></v-checkbox>
              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-row dense>
          <v-col
            cols="12"
            align-self="end"
            class="font-weight-bold text-subtitle-1"
            >{{ recipe.meal_type }}</v-col
          >
          <v-col cols="12" sm="6">
            {{ recipe.servings }} servings
            <v-icon small class="ml-1">mdi-silverware-fork-knife</v-icon>
            <v-btn
              small
              fab
              class="elevation-0 ml-1"
              max-width="22"
              max-height="22"
              ><v-icon small color="primary">mdi-pencil</v-icon></v-btn
            >
            <p class="ma-0">
              {{ recipe.total_time }} <v-icon small>mdi-clock</v-icon>
            </p>
          </v-col>
          <v-col cols="12" sm="6"> </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" class="font-weight-bold text-subtitle-1"
            >Ingredients</v-col
          >
          <ul>
            <li v-for="ingredient in recipe.ingredients_list" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
        </v-row>
      </v-col>
      <v-col>
        <p class="font-weight-bold primaryText--text mb-0">Directions:</p>
        <p>
          {{ recipe.directions }}
        </p>
      </v-col>
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
      checkbox1: false,
      recipe: {
        id: "5BH7BBJH6Z6",
        name: "Caribbean Chicken and 'Rice'",
        image: "neka slika",
        meal_type: "Lunch",
        servings: 4,
        total_time: "20 min",
        username: "@sarah_foster",
        ingredients_list: [
          "4 c. riced cauliflower",
          "1/4 c. water",
          "4 skinless, boneless chicken-breast cutlets",
          "2 tsp. olive oil",
          "1/4 c. sweetened cream of coconut",
          "2 tbsp. Hot sauce",
          "2 limes, halved",
          "1 (15-oz.) can black beans, rinsed and drained",
          "Cilantro, chopped, for garnish",
        ],
        directions:
          "Combine riced cauliflower and water; cover with vented plastic wrap and microwave on High 6 minutes. Meanwhile, brush chicken with olive oil; season all over with 1/2 teaspoon each salt and pepper. Grill on medium 5 minutes, turning over once halfway through. Whisk together sweetened cream of coconut and hot sauce; brush onto chicken. Grill until cooked through (165°F), about 5 minutes longer, brushing and turning 2 more times. Grill 2 limes, halved, until lightly charred, 2 to 3 minutes.Toss cooked cauliflower with black beans and 1/4 teaspoon salt. Serve chicken over cauliflower with limes, garnished with chopped cilantro.",
        tags: [
          "Gluten-free",
          "High protein",
          "Low-fat",
          "neki tag",
          "evo joos",
        ],
        date: "22.05.2021.",
        published: true,
        ratings: 4,
      },
    };
  },
  mounted() {},
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
    device() {
      return this.$vuetify.breakpoint.name;
    },
  },
};
</script>

<style scoped>
.main_divider {
  border-top: 1px solid black;
}
</style>
