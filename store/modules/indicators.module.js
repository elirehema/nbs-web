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
  },
  [mutation.DELETE_INDICATOR](state) {
    state.isLoggedIn = true;
  },
  [mutation.DELETE_INDICATOR_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicator = payload;
    state.indicators.splice(state.indicators.indexOf(payload), 1);

  },
  [mutation.DELETE_INDICATOR_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_INDICATOR_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_INDICATOR](state) {
    state.isLoggedIn = true;
  },
  [mutation.EDIT_INDICATOR_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicator = payload;
  },
  [mutation.EDIT_INDICATOR_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_INDICATOR_ERROR](state) {
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

  async deleteindicator({ commit }, payload) {
    commit(mutation.DELETE_INDICATOR);
    await this.$api.$delete(`indicators/${payload.indicatorid}`)
      .then(response => {
        if (response != null) {
          commit(mutation.DELETE_INDICATOR_SUCCESS, payload);
        }
      }).catch(error => {
        commit(mutation.DELETE_INDICATOR_FAILED);
      });
  },
  async editindicator({ commit }, payload) {
    commit(mutation.EDIT_INDICATOR);
    await this.$api.$patch(`indicators/${payload.indicatorid}`, payload)
      .then(response => {
        commit(mutation.EDIT_INDICATOR_SUCCESS, response);

      }).catch(error => {
        commit(mutation.EDIT_INDICATOR_FAILED);
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
