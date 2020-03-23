import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  indicator: {},
  indicators: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_INDICATORS](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_INDICATORS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicators = payload;
  },
  [mutation.GET_INDICATORS_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_INDICATORS_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_VALUE](state) {
    state.isLoggedIn = true;
  },
  [mutation.POST_INDICATOR_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicator = payload;
    state.indicators.push(payload);
  },
  [mutation.POST_INDICATOR_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_VALUE_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllIndicators({ commit }) {
    commit(mutation.GET_INDICATORS);
    await this.$api.$get(`indicators/`)
      .then(response => {
        commit(mutation.GET_INDICATORS_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_INDICATORS_ERROR);
        console.log(error);

      });
  },
  async postindicatorvalue({ commit }, payload) {
    commit(mutation.POST_INDICATOR_VALUE);
    await this.$api.$post(`indicators/`, payload)
      .then(response => {
        if (response.indicatorid != null) {
          commit(mutation.POST_INDICATOR_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_INDICATOR_VALUE_FAILED);
        console.log(error);

      });
  },

};
const getters = {
  indicatorsdata: function (state) {
    return state.indicators;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
