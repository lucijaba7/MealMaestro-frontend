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
      <v-card>
        <v-btn
          absolute
          right
          fab
          class="accent elevation-0 mt-3"
          @click="closeDialog"
          width="22.5"
          height="22.5"
          ><v-icon color="white" small>mdi-close</v-icon></v-btn
        >
        <v-row class="ma-0 pt-6" justify="center">
          <v-card-title class="headline font-weight-bold pb-0">
            Let's create a new meal!
          </v-card-title></v-row
        >
        <v-form ref="formCreateMeal" v-model="valid" lazy-validation>
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
                    :rules="fileRules"
                  ></v-file-input>
                </v-col>
                <v-col cols="11"
                  ><v-virtual-scroll
                    v-if="uploadedFiles.length > 0"
                    :items="[uploadedFiles[0]]"
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
              </v-card-actions>
            </v-card>
            <div v-if="this.noImage" class="text-caption" style="color:red">
              Please select an image
            </div>
          </v-col>

          <v-col class="py-0 pl-8" cols="5" align="start">
            <v-select
              v-model="mealType"
              :items="meals"
              label="Meal type"
              :rules="inputRules"
            ></v-select>
          </v-col>

          <v-col class="py-0 pl-8" cols="5" align="start">
            <v-text-field
              label="Servings"
              v-model="servings"
              type="number"
              :rules="inputRules"
            ></v-text-field>
          </v-col>

          <v-row class="py-0 mx-5">
            <v-col class="pb-0" cols="5" align="start">
              <v-text-field
                label="Total time"
                v-model="totalTime"
                type="number"
                :rules="inputRules"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-card-subtitle class="pt-5 mx-4 pb-2">
            Ingredients
          </v-card-subtitle>
          <v-row class="mx-5">
            <v-col cols="5">
              <p class="ma-0 primary--text caption">
                {{ this.ingredient }}
              </p>
              <v-divider class="my-0 primary theme--light"></v-divider>
            </v-col>
            <v-col cols="2">
              <p class="ma-0 primary--text light caption">
                {{ this.quantity }}
              </p>
              <v-divider class="my-0 primary theme--light"></v-divider>
            </v-col>

            <v-col cols="4">
              <p class="ma-0 primary--text caption">Unit</p>
              <v-divider class="my-0 primary font-weight-light"></v-divider>
            </v-col>
          </v-row>

          <v-item-group v-for="(item, i) in ingredientsList" :key="i">
            <v-row class="mx-5">
              <v-col cols="5" class="pb-0">
                <v-autocomplete
                  class="mt-5"
                  v-model="ingredientsList[i].ingredientName"
                  :items="ingredients"
                  item-text="name"
                  dense
                  :rules="inputRules"
                ></v-autocomplete>
              </v-col>
              <v-col cols="2" class="pb-0">
                <v-text-field
                  class="mb-5"
                  v-model="item.quantity"
                  :rules="inputRules"
                ></v-text-field>
              </v-col>
              <v-col cols="4" class="pb-0"
                ><v-select
                  :items="
                    ingredientsList[i].ingredientName == ''
                      ? ['Select ingredient']
                      : unitTypes(ingredientsList[i].ingredientName)
                  "
                  v-model="item.unit"
                  :rules="inputRules"
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
              :rules="inputRules"
            ></v-textarea>
          </v-container>
          <v-container class="px-8 pt-0">
            <v-row align="center" justify="start">
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

          <v-card-actions class="pt-0">
            <v-col class="pt-0" cols="12" align="right">
              <v-btn
                rounded
                class="primary elevation-0 text-caption"
                @click="saveRecipe()"
                >save recipe</v-btn
              >
            </v-col>
          </v-card-actions>
        </v-form>
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
      name: "",
      ingredients: [],
      servings: "",
      totalTime: "",
      ingredientsList: [{ ingredientName: "", quantity: "", unit: "" }],
      directions: "",
      selected: [],
      userId: this.$store.getters.getUser._id,

      valid: false,
      //RULES
      inputRules: [v => v.length > 0 || "Field must not be empty"],
      fileRules: [v => !!v || "1 image required"],

      meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
      ingredientName: "",
      timeType: ["h", "min"],
      unitType: [],
      ingredientQuantity: "",
      //OVDJE U Tags hocemo cheap i nest lowFodmap idk what that is
      allTags: [
        { text: "vegetarian" },
        { text: "vegan" },
        { text: "glutenFree" },
        { text: "dairyFree" },
        { text: "veryHealthy" },
        { text: "cheap" },
        { text: "lowFodmap" }
      ],
      loading: false,
      search: "",

      dragover: false,
      noImage: false
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
    ingredient() {
      if (this.device == "xs") return "Ingredient";
      return "Ingredient name";
    }
  },

  async created() {
    this.getIngredients();
  },
  mounted() {
    console.log(this.userId);
  },
  methods: {
    async getIngredients() {
      const data = await IngredientService.getAllIngredients();

      this.ingredients = [];
      for (var ingredient of data) {
        var units = ["g"];
        for (var p_measure of ingredient.pieceMeasurements) {
          units.push(p_measure.unit);
        }
        for (var c_measure of ingredient.cupMeasurements) {
          units.push(c_measure.unit);
        }
        for (var l_measure of ingredient.liquidMeasurements) {
          units.push(l_measure.unit);
        }
        this.ingredients.push({
          name: ingredient.ingredient_name,
          unit: units
        });
      }
    },
    closeDialog() {
      this.clear();
      this.show = false;
    },

    onFileSelected(event) {
      this.uploadedFiles.push(event);
    },
    unitTypes(name) {
      for (var ingr of this.ingredients) {
        if (ingr.name == name) {
          return ingr.unit;
        }
      }
    },
    addIngredient() {
      this.ingredientsList.push({ ingredientName: "", quantity: "", unit: "" });
    },
    removeIngredient(i) {
      this.ingredientsList.splice(i, 1);
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
      e.dataTransfer.files.forEach(element => this.uploadedFiles.push(element));
    },
    async saveRecipe() {
      this.$refs.formCreateMeal.validate();

      if (
        this.valid &&
        this.uploadedFiles.length == 1 &&
        this.directions != ""
      ) {
        this.show = false;
        let fileData = new FormData();

        fileData.append("image", this.uploadedFiles[0]);

        let url = await RecipeService.getRecipeImage(fileData);
        console.log(url.url);

        let data = {
          mealName: this.mealName,
          mealType: this.mealType,
          servings: this.servings,
          image: url.url,
          totalTime: this.totalTime,
          userId: this.userId,
          ingredientsList: this.ingredientsList,
          directions: this.directions,
          tags: this.selected,
          date: moment(new Date()).format("yyyy-MM-DD hh:mm a")
        };

        await RecipeService.saveRecipeData(data);
      }
      if (!this.uploadedFiles.length) {
        this.noImage = true;
      }
    },
    clear() {
      this.mealName = "";
      this.uploadedFiles = [];
      this.mealType = "";
      this.servings = "";
      this.totalTime = "";
      this.ingredientsList = [{ ingredientName: "", quantity: "", unit: "" }];
      this.directions = "";
      this.selected = [];

      this.$refs.formCreateMeal.reset();
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
