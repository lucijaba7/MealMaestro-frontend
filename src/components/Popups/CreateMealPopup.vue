<template>
  <v-row>
    <v-dialog
      v-model="show"
      persistent
      max-width="600"
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
          width="22.5"
          height="22.5"
          ><v-icon color="white" small>mdi-close</v-icon></v-btn
        >
        <v-row class="ma-0 pt-6" justify="center">
          <v-card-title class="headline font-weight-bold pb-0">
            Let's create a new meal!
          </v-card-title></v-row
        >
        <v-col class="pb-0 px-8" cols="12" align="start">
          <v-text-field
            class="font-weight-medium"
            label="Meal name"
            v-model="mealName"
            type="text"
            :rules="inputRules"
          ></v-text-field>
        </v-col>

        <v-card-subtitle class="py-0 pl-8">
          Image
        </v-card-subtitle>

        <v-col cols="12" class="px-8">
          <v-card
            outlined
            class="dragDrop mx-auto"
            auto-grow
            @drop.prevent="onDrop($event)"
            @dragover.prevent="dragover = true"
            @dragenter.prevent="dragover = true"
            @dragleave.prevent="dragover = false"
            :class="{ 'grey lighten-2': dragover }"
          >
            <v-card-text class="pb-0">
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
            </v-card-text>
            <v-card-actions>
              <v-col cols="1">
                <v-file-input
                  prepend-icon="mdi-upload"
                  height="10"
                  @change="onFileSelected"
                  hide-input
                ></v-file-input>
              </v-col>
              <v-col cols="11"
                ><v-virtual-scroll
                  v-if="uploadedFiles.length > 0"
                  :items="uploadedFiles"
                  height="70"
                  item-height="50"
                >
                  <template v-slot:default="{ item }">
                    <v-list-item :key="item.name" height="70">
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
                  </template> </v-virtual-scroll
              ></v-col>
            </v-card-actions> </v-card
        ></v-col>

        <v-col class="pb-0 pl-8" cols="5" align="start">
          <v-select
            v-model="mealType"
            :items="meals"
            label="Meal type"
          ></v-select>
        </v-col>

        <v-col class="pb-0 pl-8" cols="5" align="start">
          <v-text-field
            label="Servings"
            v-model="servings"
            type="number"
          ></v-text-field>
        </v-col>

        <v-row class="pa-0 mx-6">
          <v-col class="pb-0" cols="5" align="start">
            <v-text-field
              label="Total time (minutes)"
              v-model="totalTime"
              type="number"
            ></v-text-field>
          </v-col>
          <!-- <v-col class="pb-0" cols="2" align="start"
            ><v-select :items="timeType"></v-select
          ></v-col> -->
        </v-row>

        <v-card-subtitle class="pt-5 px-9 pb-2">
          Ingredients
        </v-card-subtitle>
        <v-row class="mx-6">
          <v-col cols="7" sm="7">
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
          <v-row class="mx-6">
            <v-col cols="7" sm="7" class="pb-0">
              <!-- PROVJERIT JESAM DOBRO V-MODEL I ITEMS JER TREBAM INGREDIENTS IZ BAZE -->

              <v-autocomplete
                class="mt-5"
                v-model="ingredientsList[i].ingredientName"
                :items="ingredients"
                item-text="name"
                dense
              ></v-autocomplete>
            </v-col>
            <v-col cols="2" class="pb-0">
              <v-text-field class="mb-5" v-model="item.quantity"></v-text-field>
            </v-col>
            <v-col cols="2" class="pb-0"
              ><v-select
                :items="
                  ingredientsList[i].ingredientName == ''
                    ? ['please']
                    : unitTypes(ingredientsList[i].ingredientName)
                "
                v-model="item.unit"
              ></v-select
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
          class="my-5 ml-8 mt-0 pt-0 px-1 elevation-0"
          >Add
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-card-subtitle class="py-0 px-8">
          Directions
        </v-card-subtitle>
        <v-container class="px-8 py-0">
          <v-textarea
            outlined
            v-model="directions"
            name="input-7-1"
            auto-grow
            class="py-0"
          ></v-textarea>
        </v-container>

        <!-- TAGOVIIII -->

        <v-container class="px-8">
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
                class="py-0 my-0"
              >
                <!-- ovdje ovaj close nece closeat -->

                <!-- <template #selection="{ item }">
                  <v-chip close color="primary">{{ item.text }}</v-chip>
                </template> -->
              </v-select>

              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  class="primary"
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

        <!-- <v-divider></v-divider> -->

        <!-- Kinda not sure wtf this is also kill me ovaj purple -->
        <v-card-actions>
          <v-col class="pt-0" cols="12" align="right">
            <v-btn
              rounded
              class="primary elevation-0 text-caption"
              @click="saveRecipe()"
              >save recipe</v-btn
            >
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import IngredientService from "@/services/IngredientService.js";
import moment from "moment";
import RecipeService from "@/services/RecipeService.js";

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
      uploadedFiles: [],
      mealType: "",
      ingredients: [],
      name: "",
      servings: null,
      totalTime: null,
      ingredientsList: [{ ingredientName: "", quantity: "", unit: "" }],
      directions: null,
      selected: [],
      username: localStorage.getItem("username"),

      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
      ingredientName: "",
      timeType: ["h", "min"],
      unitType: [],
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
      inputRules: [v => v.length >= 5 || "Minimum length is 5 characters"],
      dragover: false
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
    // unitType() {
    //   unitType = ;
    // }
  },
  async created() {
    const data = await IngredientService.getAllIngredients();

    this.ingredients = [];
    for (var ingredient of data) {
      var units = ["g"];
      for (var p_measure of ingredient.pieceMeasurements) {
        units.push(p_measure.unit);
      }
      this.ingredients.push({
        name: ingredient._id.replaceAll("_", " "),
        unit: units
      });
    }
  },
  methods: {
    // closeDialog() {
    //   // Remove all the uploaded files
    //   this.uploadedFiles = [];
    //   // Close the dialog box
    //   this.$emit("update:dialog", false);
    // },
    onFileSelected(event) {
      this.uploadedFiles.push(event);
    },
    unitTypes(name) {
      for (var ingr of this.ingredients) {
        if (ingr.name == name) {
          return ingr.unit;
        }
      }
      console.log("opali");
    },
    addIngredient() {
      this.ingredientsList.push({ ingredientName: "", quantity: "", unit: "" });
    },

    removeIngredient(i) {
      this.ingredientsList.splice(i, 1);
    },

    // next() {
    //   this.loading = true;
    //   setTimeout(() => {
    //     this.search = "";
    //     this.selected = [];
    //     this.loading = false;
    //   }, 2000);
    // },

    removeFile(fileName) {
      const index = this.uploadedFiles.findIndex(
        file => file.name === fileName
      );
      // If file is in uploaded files remove it
      if (index > -1) this.uploadedFiles.splice(index, 1);
    },

    onDrop(e) {
      // console.log(e);
      this.dragover = false;

      e.dataTransfer.files.forEach(element => this.uploadedFiles.push(element));
    },

    // submit() {
    //   // If there aren't any files to be uploaded throw error
    //   if (!this.uploadedFiles.length > 0) {
    //     this.$store.dispatch("addNotification", {
    //       message: "There are no files to upload",
    //       colour: "error"
    //     });
    //   } else {
    //     // Send uploaded files to parent component
    //     this.$emit("filesUploaded", this.uploadedFiles);
    //     // Close the dialog box
    //     this.closeDialog();
    //   }
    // }
    async saveRecipe() {
      // console.log(this.uploadedFiles[0]);

      let formData = new FormData();

      // files
      formData.append(
        "files",
        this.uploadedFiles[0],
        this.uploadedFiles[0].name
      );

      console.log(formData);

      var data = {
        mealName: this.mealName,
        image: this.uploadedFiles[0],
        mealType: this.mealType,
        servings: this.servings,
        totalTime: this.totalTime,
        username: this.username,
        ingredientsList: this.ingredientsList,
        directions: this.directions,
        tags: this.selected,
        date: moment(new Date()).format("yyyy-MM-DD hh:mm a") //new Date().toISOString().split("T")
      };
      // console.log(data.image);
      await RecipeService.saveRecipe(data);
    }
  }
};
</script>

<style scoped>
.dragDrop {
  border: 1px solid gray !important;
}
/* .v-file-input__text {
  display: none;
} */
</style>
