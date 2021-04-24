import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  mainland: {},
  mainlands: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_MAINLAND_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_MAINLAND_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.mainlands = payload;
  },
  [mutation.GET_MAINLAND_VALUES_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_MAINLAND_VALUES_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllmainlands({
    commit
  }) {
    commit(mutation.GET_MAINLAND_VALUES);
    await this.$api.$get(`mainlands/`)
      .then(response => {
        commit(mutation.GET_MAINLAND_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_MAINLAND_VALUES_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  mainlandsdata: function (state) {
    return state.mainlands;
  }


};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
