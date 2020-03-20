import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  new: {},
  news: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_INDICATORS](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_INDICATORS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.news = payload;
  },
  [mutation.GET_INDICATORS_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_INDICATORS_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllIndicators({
    commit
  }) {
    commit(mutation.GET_INDICATORS);
    await this.$api.$get(`indicators/`)
      .then(response => {
        commit(mutation.GET_INDICATORS_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_INDICATORS_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  indicatorsdata: function (state) {
    return state.news;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
