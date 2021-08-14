export const popup = {
  state: {
    popup: false
  },
  getters: {
    isVisible: state => {
      return state.popup;
    }
  },
  actions: {
    showPoopup({ commit }) {
      commit("show");
    },
    hidePopup({ commit }) {
      commit("hide");
    }
  },
  mutations: {
    show(state) {
      state.popup = true;
    },
    hide(state) {
      state.popup = false;
    }
  }
};
