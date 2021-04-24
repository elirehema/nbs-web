import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  totalfemales: {},
  totalfemales: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_TOTALFEMALE_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_TOTALFEMALE_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.totalfemales = payload;
  },
  [mutation.GET_TOTALFEMALE_VALUES_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_TOTALFEMALE_VALUES_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAlltotalfemales({
    commit
  }) {
    commit(mutation.GET_TOTALFEMALE_VALUES);
    await this.$api.$get(`totalfemales/`)
      .then(response => {
        commit(mutation.GET_TOTALFEMALE_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_TOTALFEMALE_VALUES_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  totalfemalesdata: function (state) {
    return state.totalfemales;
  }


};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
