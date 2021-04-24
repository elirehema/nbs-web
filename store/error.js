import * as mutation from './mutation-types';
const state = () => ({
  showError: Boolean,
  errorMessage: ''

});

const mutations = {
  [mutation.REQUEST](state) {
    state.showError = false;
  },
  [mutation.REQUEST_SUCCESS](state) {
    state.showError = false;
  },
  [mutation.RESPONSE_ERROR](state, payload) {
    state.showError = true;
    state.errorMessage = payload;
  },
  [mutation.REQUEST_ERROR](state, payload) {
    state.showError = true;
    state.errorMessage = payload;
  },

};
const actions = {
  request_error({ commit }, payload) {
    commit(mutation.REQUEST_ERROR, payload);

  },
  response_error({ commit }, payload) {
    commit(mutation.RESPONSE_ERROR, payload);
  }
};

const getters = {
  responseerror: function (state) {
    console.log(state.showError);
    return state.showError;
  },
  errormessage: function (state) {
    console.log(state.showError);
    return state.errorMessage;
  }
};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
