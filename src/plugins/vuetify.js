import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                secondary: '#E05333'
            }
        }
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
});
