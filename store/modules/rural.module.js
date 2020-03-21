import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  rural: {},
  rurals: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_RURALS_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_RURALS_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.rurals = payload;
  },
  [mutation.GET_RURALS_VALUES_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_RURALS_VALUES_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllRurals({
    commit
  }) {
    commit(mutation.GET_RURALS_VALUES);
    await this.$api.$get(`rurals/`)
      .then(response => {
        commit(mutation.GET_RURALS_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_RURALS_VALUES_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  ruralsdata: function (state) {
    return state.rurals;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
