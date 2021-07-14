<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="600"
      @click:outside="show = false"
    >
      <v-card>
        <v-col align="right" class="pb-0">
          <v-btn
            fab
            class="accent elevation-0"
            @click="show = false"
            max-width="18"
            max-height="18"
            ><v-icon x-small>mdi-close</v-icon></v-btn
          >
        </v-col>
        <v-row class="ma-0">
          <v-col cols="12" sm="5" align-self="center">
            <v-img
              src="@/assets/logo.png"
              :width="this.$vuetify.breakpoint.name == 'xs' ? '70%' : '90%'"
              :height="this.$vuetify.breakpoint.name == 'xs' ? '70%' : '90%'"
              class="mx-auto"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="7" class="pa-0">
            <v-card-title
              class="font-weight-bold pb-0"
              :style="
                this.$vuetify.breakpoint.name == 'xs' ? 'fontSize: 22px ' : ''
              "
            >
              Conrats!! You’ve just created a new recipe!
            </v-card-title>
            <v-card-text class="pb-2 pt-0">
              <p
                class="font-weight-bold ma-0"
                :style="
                  this.$vuetify.breakpoint.name == 'xs' ? 'fontSize: 16px ' : ''
                "
              >
                Would you like to share this recipe with the World?
              </p>
              Your recipe would be shared with your followers and will be
              visible on everyone’s explore page, so everyone can find your
              awesome recipes!
            </v-card-text>
          </v-col>
          <v-checkbox
            class="ml-3 mt-0"
            label="Always publish my recipes"
          ></v-checkbox>
        </v-row>

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
              >No, thanks</v-btn
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data() {
    return {};
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
  }
};
</script>
