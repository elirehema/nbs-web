import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  indicatorsource: {},
  indicatorsources: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_INDICATORS_SOURCE](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_INDICATORS_SOURCE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorsources = payload;
  },
  [mutation.GET_INDICATORS_SOURCE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_INDICATORS_SOURCE_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_SOURCE_VALUE](state) {
    state.isLoggedIn = true;
  },
  [mutation.POST_INDICATOR_SOURCE_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorsource = payload;
    state.indicatorsources.push(payload);
  },
  [mutation.POST_INDICATOR_SOURCE_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_SOURCE_VALUE_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllIndicatorsSources({
    commit
  }) {
    commit(mutation.GET_INDICATORS_SOURCE);
    await this.$api.$get(`indicatorsources/`)
      .then(response => {
        commit(mutation.GET_INDICATORS_SOURCE_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_INDICATORS_SOURCE_ERROR);
        console.log(error);

      });
  },
  async postindicatorources({ commit }, payload) {
    commit(mutation.POST_INDICATOR_SOURCE_VALUE);
    await this.$api.$post(`indicatorsources/`, payload)
      .then(response => {
        if (response.id != null) {
          commit(mutation.POST_INDICATOR_SOURCE_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_INDICATOR_SOURCE_VALUE_ERROR);
        console.log(error);

      });
  },
};
const getters = {
  indicatorsourcesdata: function (state) {
    return state.indicatorsources;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
