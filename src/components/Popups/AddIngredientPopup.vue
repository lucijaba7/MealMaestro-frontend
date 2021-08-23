<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="500"
      @click:outside="closeDialog"
    >
      <v-card>
        <v-col align="right" class="pb-0">
          <v-btn
            absolute
            right
            fab
            class="accent elevation-0 mt-1"
            @click="closeDialog"
            width="22.5"
            height="22.5"
            ><v-icon color="white" small>mdi-close</v-icon></v-btn
          >
        </v-col>

        <v-row class="ma-0">
          <v-col cols="12" class="pa-0">
            <v-card-title
              class="font-weight-bold"
              :style="{
                'fontSize: 20px': this.$vuetify.breakpoint.name == 'xs'
              }"
            >
              ADD INGREDIENT
            </v-card-title>
            <v-row class="mx-5">
              <v-col cols="8" class="pb-0">
                <p class="ma-0 primary--text caption">
                  ingredient
                </p>
                <v-divider class="my-0 primary theme--light"></v-divider>
              </v-col>
              <v-col cols="4" class="pb-0">
                <p class="ma-0 primary--text light caption">
                  qty (g)
                </p>
                <v-divider class="my-0 primary theme--light"></v-divider>
              </v-col>
            </v-row>
            <v-form ref="formAddIngredient" v-model="valid">
              <v-row class="mx-5">
                <v-col cols="8" class="py-0">
                  <v-autocomplete
                    class="mt-5"
                    v-model="ingredient"
                    :items="this.ingredientsList"
                    item-text="ingredient_name"
                    item-value="_id"
                    dense
                    :rules="inputRules"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4" class="py-0">
                  <v-text-field
                    class="mb-5"
                    v-model="quantity"
                    :rules="inputRules"
                    type="number"
                  ></v-text-field>
                </v-col> </v-row
            ></v-form>
          </v-col>
        </v-row>

        <v-card-actions class="pa-0">
          <v-row justify="center" class="ma-0">
            <v-btn
              rounded
              class="py-3 mb-5 mr-2 elevation-0 primary"
              @click="saveIngredient"
              >Save</v-btn
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import IngredientService from "@/services/IngredientService";

export default {
  name: "AddIngredientPopup",
  props: {
    value: Boolean
  },
  data() {
    return {
      ingredient: "",
      quantity: "",
      ingredientsList: [],
      valid: false,
      inputRules: [v => v.length > 0 || "Field must not be empty"]
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
    }
  },
  created() {
    this.getIngredients();
  },
  methods: {
    async getIngredients() {
      this.ingredientsList = await IngredientService.getAllIngredients();
      console.log("done");
    },
    saveIngredient() {
      this.$refs.formAddIngredient.validate();
      console.log(this.valid);
      if (this.valid) {
        var data = {
          ingredient: this.ingredient,
          quantity: this.quantity
        };
        this.$emit("addIngredient", data);
        this.closeDialog();
      }
    },
    closeDialog() {
      this.ingredient = "";
      this.quantity = "";

      this.$refs.formAddIngredient.resetValidation();
      this.show = false;
    }
  }
};
</script>
