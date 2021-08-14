<template>
  <v-row>
    <v-dialog
      class="ma-0 popup"
      v-model="show"
      persistent
      max-width="600"
      eager
      @click:outside="closeDialog"
    >
      <v-card class="pa-3">
        <v-btn
          absolute
          right
          fab
          class="accent elevation-0 "
          @click="closeDialog"
          width="22.5"
          height="22.5"
          ><v-icon color="white" small>mdi-close</v-icon></v-btn
        >
        <v-row align="center">
          <v-col cols="3"><v-img src="@/assets/logo.png"></v-img></v-col>
          <v-col cols="8"
            ><div class="font-weight-bold">Want to cook something else?</div>
            <div>
              Choose one of the meals for {{ meal }} from below!
            </div> </v-col
          ><v-spacer cols="1"></v-spacer>
        </v-row>
        <!-- <v-row>
          <v-col class="pa-0">
            <h4 class="ml-10 mt-5">- Your recipes -</h4>
            <v-slide-group
              height="300"
              show-arrows
              next-icon="mdi-chevron-right accent rounded-xl theme--dark"
              prev-icon="mdi-chevron-left accent rounded-xl theme--dark"
            >
              <v-slide-item
                v-for="(meal, i) in meals"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
              > -->
        <!-- <WeeklyMealCard :meal="meal" /> -->
        <!-- </v-slide-item>
            </v-slide-group></v-col
          >
        </v-row> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import WeeklyMealCard from "@/components/Cards/WeeklyMealCard";

export default {
  name: "ChooseMealPopup",
  props: {
    value: Boolean,
    multiple: {
      type: Boolean,
      default: false
    },
    meal: String
  },

  data() {
    return {
      meals: [
        {
          id: "5BH7BBJH6Z6",
          name: "Caribbean Chicken and 'Rice'",
          image:
            "https://imgr.search.brave.com/rcEdQ2BSqTWexyAgC65o90Udh1TlGI3hxtnDTjwUNCM/fit/1200/1200/no/1/aHR0cHM6Ly9oZGRl/c2t0b3B3YWxscGFw/ZXJzLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA5L3dh/bGxwYXBlcnMtY2F0/cy1oZC5qcGc",
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
            "Cilantro, chopped, for garnish"
          ],
          directions:
            "Combine riced cauliflower and water; cover with vented plastic wrap and microwave on High 6 minutes. Meanwhile, brush chicken with olive oil; season all over with 1/2 teaspoon each salt and pepper. Grill on medium 5 minutes, turning over once halfway through. Whisk together sweetened cream of coconut and hot sauce; brush onto chicken. Grill until cooked through (165°F), about 5 minutes longer, brushing and turning 2 more times. Grill 2 limes, halved, until lightly charred, 2 to 3 minutes.Toss cooked cauliflower with black beans and 1/4 teaspoon salt. Serve chicken over cauliflower with limes, garnished with chopped cilantro.",
          tags: [
            "Gluten-free",
            "High protein",
            "Low-fat",
            "neki tag",
            "evo joos"
          ],
          date: "22.05.2021.",
          published: true,
          ratings: 4
        }
      ]
    };
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

    device() {
      return this.$vuetify.breakpoint.name;
    }
  },
  components: { WeeklyMealCard },
  created() {},
  mounted() {},
  methods: {
    closeDialog() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.dragDrop {
  border: 1px solid gray !important;
}
/* 
.v-dialog {
  z-index: 0; */
/* } */
</style>
