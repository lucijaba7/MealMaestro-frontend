import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#89C2B2", //plava
        secondary: "#E05333", //crvena
        accent: "#F8AC42", //zuta
        white: "#FFFEFB",
        background: "FFFEFB",
        primaryText: "#445462",
        secondaryText: "#6D7984"
      }
    }
  },
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
});
