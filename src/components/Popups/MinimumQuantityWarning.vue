<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="500"
      @click:outside="show = false"
    >
      <v-card>
        <v-col align="right" class="pb-0">
          <v-btn
            absolute
            right
            fab
            class="accent elevation-0 mt-1"
            @click="show = false"
            width="22.5"
            height="22.5"
            ><v-icon color="white" small>mdi-close</v-icon></v-btn
          >
        </v-col>
        <v-row class="ma-0">
          <v-col cols="12" sm="5" align-self="center">
            <v-img
              src="@/assets/logo.png"
              :width="device == 'xs' ? '60%' : '80%'"
              :height="device == 'xs' ? '60%' : '80%'"
              class="mx-auto"
            ></v-img>
          </v-col>
          <v-col
            :align="device == 'xs' ? 'center' : 'left'"
            cols="12"
            sm="7"
            class="pa-0"
          >
            <v-card-text>
              <b style="font-size: 25px">We're sorry.</b> <br />
              To accomplish this week's plan, you cannot lower the quantity of
              this ingredient.
            </v-card-text>
          </v-col>
        </v-row>

        <v-card-actions class="pa-0">
          <v-row justify="center" class="ma-0">
            <v-btn
              rounded
              @click="show = false"
              class="py-3 mb-5 mr-2 elevation-0 primary"
              >OK</v-btn
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "MinimumQuantityWarning",
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
    },
    device() {
      return this.$vuetify.breakpoint.name;
    }
  }
};
</script>
