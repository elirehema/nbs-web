import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  login: {},
  logins: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_LOGINS_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_LOGINS_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.logins = payload;
  },
  [mutation.GET_LOGINS_VALUES_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_LOGINS_VALUES_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllLogins({ commit }) {
    commit(mutation.GET_LOGINS_VALUES);
    await this.$api.$get(`logins/`)
      .then(response => {
        commit(mutation.GET_LOGINS_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_LOGINS_VALUES_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  loginsdata: function (state) {
    return state.logins;
  }
};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
