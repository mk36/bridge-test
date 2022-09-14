export default {
  namespaced: true,
  state: {
    selectedQuoteOptions: [],
  },
  getters: {},
  mutations: {
    SET_SELECTED_QUOTE_OPTIONS(state, options) {
      state.selectedQuoteOptions = options;
      console.log('set options', options);
    },
  },
  actions: {},
};
