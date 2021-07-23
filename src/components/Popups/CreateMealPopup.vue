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

        <v-card
          outlined
          class="dragDrop mx-auto my-12"
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
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon id="upload-button">mdi-upload</v-icon>
            </v-btn>
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
        <v-card-subtitle class="pt-5 pl-2">
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
        <v-btn small rounded outlined class="py-3 my-5 mr-2  elevation-0"
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

        <!-- <v-container fluid>
          <v-row align="center">
            <v-col cols="12" sm="6">
              <v-select
                v-model="allTags"
                :items="allTags"
                attach
                chips
                label="Add tags"
                multiple
              ></v-select>
            </v-col>
          </v-row>
        </v-container> -->

        <!-- <v-row>
          <v-chip
            v-for="tag in this.allTags"
            :key="tag"
            class="ma-1"
            color="primary"
          >
            {{ tag }}
          </v-chip>
        </v-row> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Upload",
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
      tags: ["Gluten free", "High protein", "Low-fat", "Vegeterian", "Vegan"],
      servings: Number,
      totalTime: Number,
      timeType: ["h", "min"],
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
  methods: {
    // closeDialog() {
    //   // Remove all the uploaded files
    //   this.uploadedFiles = [];
    //   // Close the dialog box
    //   this.$emit("update:dialog", false);
    // },

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
