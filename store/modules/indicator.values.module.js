import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  indicatorvalue: {},
  indicatorvalues: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_INDICATOR_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_INDICATOR_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorvalues = payload;
  },
  [mutation.GET_INDICATOR_VALUES_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_INDICATOR_VALUES_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_VALUE](state) {
    state.isLoggedIn = true;
  },
  [mutation.POST_INDICATOR_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorvalue = payload;
    state.indicatorvalues.push(payload);
  },
  [mutation.POST_INDICATOR_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_VALUE_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllIndicatorvalues({
    commit
  }) {
    commit(mutation.GET_INDICATOR_VALUES);
    await this.$api.$get(`indicatorvalues/`)
      .then(response => {
        commit(mutation.GET_INDICATOR_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_INDICATOR_VALUES_ERROR);
        console.log(error);

      });
  },
  async postindicatorvalues({ commit }, payload) {
    commit(mutation.POST_INDICATOR_VALUE);
    await this.$api.$post(`indicatorvalues/`, payload)
      .then(response => {
        if (response.id != null) {
          commit(mutation.POST_INDICATOR_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_INDICATOR_VALUE_ERROR);
        console.log(error);

      });
  },
};
const getters = {
  indicatorvaluesdata: function (state) {
    return state.indicatorvalues;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};