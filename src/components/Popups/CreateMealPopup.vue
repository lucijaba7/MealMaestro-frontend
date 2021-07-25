<template>
  <v-row>
    <v-dialog
      v-model="show"
      persistent
      max-width="700"
      @click:outside="show = false"
    >
      <v-card>
        <!-- <v-col align="right" class="pb-0"> -->
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
        <!-- </v-col> -->
        <v-card-title class="headline font-weight-bold pb-0">
          Let's create a new meal!
        </v-card-title>
        <!-- <v-row> -->
        <v-col class="pb-0" cols="12" align="start">
          <v-text-field
            class="font-weight-medium"
            label="Meal name"
            v-model="mealName"
            type="text"
            :rules="inputRules"
          ></v-text-field>
        </v-col>
        <v-card-subtitle class="py-0">
          Image
        </v-card-subtitle>
        <v-card
          outlined
          class="dragDrop mx-auto "
          max-width="650"
          @drop.prevent="onDrop($event)"
          @dragover.prevent="dragover = true"
          @dragenter.prevent="dragover = true"
          @dragleave.prevent="dragover = false"
          :class="{ 'grey lighten-2': dragover }"
        >
          <v-card-text>
            <v-row
              class="d-flex flex-column"
              dense
              align="center"
              justify="center"
            >
              <v-icon :class="[dragover ? 'mt-2, mb-6' : 'mt-5']" size="60">
                mdi-cloud-upload
              </v-icon>
              <p>
                Drop your file(s) here.
              </p>
            </v-row>
            <v-virtual-scroll
              v-if="uploadedFiles.length > 0"
              :items="uploadedFiles"
              height="150"
              item-height="50"
            >
              <template v-slot:default="{ item }">
                <v-list-item :key="item.name">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }}
                      <span class="ml-3 text--secondary">
                        {{ item.size }} bytes</span
                      >
                    </v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn @click.stop="removeFile(item.name)" icon>
                      <v-icon> mdi-close-circle </v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>

                <v-divider></v-divider>
              </template>
            </v-virtual-scroll>
          </v-card-text>
          <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <v-col cols="1">
              <v-file-input
                truncate-length="50"
                prepend-icon="mdi-upload"
              ></v-file-input>
            </v-col>
          </v-card-actions>
        </v-card>

        <v-col class="pb-0" cols="4" align="start">
          <v-select :items="meals" label="Meal type"></v-select>
        </v-col>
        <!-- <v-row> -->
        <v-col class="pb-0" cols="4" align="start">
          <v-text-field
            label="Servings"
            v-model="servings"
            type="number"
          ></v-text-field>
        </v-col>
        <!-- </v-row> -->
        <v-row>
          <v-col class="pb-0" cols="4" align="start">
            <v-text-field
              label="Total time"
              v-model="totalTime"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col class="pb-0" cols="2" align="start"
            ><v-select :items="timeType"></v-select
          ></v-col>
        </v-row>
        <!-- </v-row> -->
        <v-card-subtitle class="pt-5 pl-2 pb-2">
          Ingredients
        </v-card-subtitle>
        <v-row>
          <v-col cols="8" sm="7">
            <p class="ma-0 primary--text caption">
              Ingredient name
            </p>
            <v-divider class="my-0 primary theme--light"></v-divider>
          </v-col>
          <v-col cols="2">
            <p class="ma-0 primary--text light caption">
              {{ this.quantity }}
            </p>
            <v-divider class="my-0 primary theme--light"></v-divider>
          </v-col>

          <v-col cols="2">
            <p class="ma-0 primary--text caption">{{ this.unit }}</p>
            <v-divider class="my-0 primary font-weight-light"></v-divider>
          </v-col>
        </v-row>

        <v-item-group v-for="(item, i) in ingredientsList" :key="i">
          <v-row>
            <v-col cols="8" sm="7">
              <!-- PROVJERIT JESAM DOBRO V-MODEL I ITEMS JER TREBAM INGREDIENTS IZ BAZE -->

              <v-autocomplete
                class="mt-5"
                v-model="item.ingredientName"
                :items="ingredients"
                dense
              ></v-autocomplete>
            </v-col>
            <v-col cols="2">
              <v-text-field
                class="mb-5"
                v-model="item.quantity"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="2"
              ><v-select :items="unitType" v-model="item.unit"></v-select
            ></v-col>
            <v-btn
              @click="removeIngredient(i)"
              fab
              color="transparent"
              class="elevation-0 mt-8"
              max-width="18"
              max-height="18"
              ><v-icon medium color="grey">mdi-close-circle-outline</v-icon>
            </v-btn>
          </v-row>
        </v-item-group>

        <v-btn
          @click="addIngredient"
          small
          rounded
          outlined
          class="py-3 my-5 mr-2  elevation-0"
          >Add
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-card-subtitle class="py-0">
          Directions
        </v-card-subtitle>
        <v-container fluid>
          <v-textarea
            outlined
            name="input-7-1"
            auto-grow
            class="py-0"
          ></v-textarea>
        </v-container>

        <!-- TAGOVIIII -->

        <v-container class="py-0">
          <v-row align="center" justify="start">
            <!-- <v-col
              v-for="(selection, i) in selections"
              :key="selection.text"
              class="shrink"
            >
              <v-chip
                :disabled="loading"
                close
                class="primary"
                @click:close="selected.splice(i, 1)"
              >
                {{ selection.text }}
              </v-chip>
            </v-col> -->

            <!-- ko kreten mi je prije uspjelo da chips budu primary sad nece  -->

            <v-col v-if="!allSelected" cols="12">
              <v-select
                :items="allTags"
                v-model="selected"
                full-width
                multiple
                chips
                deletable-chips
                label="Add tags"
                single-line
              >
                <!-- ovdje ovaj close nece closeat -->

                <!-- <template #selection="{ item }">
                  <v-chip close color="primary">{{ item.text }}</v-chip>
                </template> -->
              </v-select>

              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  v-bind="attrs"
                  :input-value="selected"
                  close
                  @click="select"
                  @click:close="remove(item)"
                >
                  <strong>{{ item }}</strong>
                  <span>(interest)</span>
                </v-chip>
              </template>
            </v-col>
          </v-row>
        </v-container>

        <!-- <v-divider v-if="!allSelected"></v-divider> -->

        <v-divider></v-divider>

        <!-- Kinda not sure wtf this is also kill me ovaj purple -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "CreateMealPopup",
  props: {
    value: Boolean,
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mealName: "",
      defaultMeal: "Breakfast",
      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
      servings: Number,
      totalTime: Number,
      ingredientName: "",
      ingredients: ["Apple", "Salt", "b", "m", "k"],
      timeType: ["h", "min"],
      unitType: [
        "g",
        "kg",
        "mg",
        "teaspoon",
        "tablespoon",
        "fl oz",
        "cup",
        "ml",
        "L",
        "dl",
        "lb",
        "oz"
      ],
      ingredientQuantity: "",
      //OVDJE U Tags hocemo cheap i nest lowFodmap idk what that is
      allTags: [
        { text: "Vegeterian" },
        { text: "Vegan" },
        { text: "Gluten-free" },
        { text: "Dairy-free" },
        { text: "Very healthy" },
        { text: "High protein" },
        { text: "Low-fat" }
      ],
      loading: false,
      search: "",
      selected: [],
      ingredientsList: [{ ingredientName: "", quantity: "", unit: "" }],
      inputRules: [v => v.length >= 5 || "Minimum length is 5 characters"],

      dragover: false,
      uploadedFiles: []
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

    allSelected() {
      return this.selected.length === this.allTags.length;
    },
    // categories() {
    //   const search = this.search.toLowerCase();

    //   if (!search) return this.allTags;

    //   return this.allTags.filter(item => {
    //     const text = item.text.toLowerCase();
    //     return text.indexOf(search) > -1;
    //   });
    // },

    selections() {
      const selections = [];
      for (const selection of this.selected) {
        selections.push(selection);
      }
      return selections;
    },

    device() {
      return this.$vuetify.breakpoint.name;
    },
    quantity() {
      if (this.device == "sm") return "QTY";
      else if (this.device == "xs") return "Q";
      return "Quantity";
    },
    unit() {
      if (this.device == "xs") return "U";
      // else if (this.device == "sm") return "Q";
      return "Unit";
    }
  },

  watch: {
    selected() {
      this.search = "";
    }
  },

  methods: {
    // closeDialog() {
    //   // Remove all the uploaded files
    //   this.uploadedFiles = [];
    //   // Close the dialog box
    //   this.$emit("update:dialog", false);
    // },

    addIngredient() {
      this.ingredientsList.push({ ingredientName: "", quantity: "", unit: "" });
    },

    removeIngredient(i) {
      this.ingredientsList.splice(i, 1);
    },

    next() {
      this.loading = true;
      setTimeout(() => {
        this.search = "";
        this.selected = [];
        this.loading = false;
      }, 2000);
    },

    removeFile(fileName) {
      const index = this.uploadedFiles.findIndex(
        file => file.name === fileName
      );
      // If file is in uploaded files remove it
      if (index > -1) this.uploadedFiles.splice(index, 1);
    },

    onDrop(e) {
      this.dragover = false;

      if (!this.multiple && e.dataTransfer.files.length > 1) {
        this.$store.dispatch("addNotification", {
          message: "Only one file can be uploaded at a time..",
          colour: "error"
        });
      } else
        e.dataTransfer.files.forEach(element =>
          this.uploadedFiles.push(element)
        );
    },

    submit() {
      // If there aren't any files to be uploaded throw error
      if (!this.uploadedFiles.length > 0) {
        this.$store.dispatch("addNotification", {
          message: "There are no files to upload",
          colour: "error"
        });
      } else {
        // Send uploaded files to parent component
        this.$emit("filesUploaded", this.uploadedFiles);
        // Close the dialog box
        this.closeDialog();
      }
    }
  }
};
</script>

<style scoped>
.dragDrop {
  border: 1px solid gray !important;
}
</style>
