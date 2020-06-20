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
  },
  [mutation.DELETE_INDICATOR_SOURCE](state) {
    state.isLoggedIn = true;
  },
  [mutation.DELETE_INDICATOR_SOURCE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorsource = payload;
    state.indicatorsources.splice(state.indicatorsources.indexOf(payload), 1);

  },
  [mutation.DELETE_INDICATOR_SOURCE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_INDICATOR_SOURCE_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_INDICATOR_SOURCES](state) {
    state.isLoggedIn = true;
  },
  [mutation.EDIT_INDICATOR_SOURCES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorsource = payload;
  },
  [mutation.EDIT_INDICATOR_SOURCES_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_INDICATOR_SOURCES_ERROR](state) {
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
        if (response.sourceid != null) {
          commit(mutation.POST_INDICATOR_SOURCE_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_INDICATOR_SOURCE_VALUE_ERROR);
        console.log(error);

      });
  },
  async deleteindicatorsource({ commit }, payload) {
    commit(mutation.DELETE_INDICATOR_SOURCE);
    await this.$api.$delete(`indicatorsources/${payload.sourceid}`)
      .then(response => {
        if (response != null) {
          commit(mutation.DELETE_INDICATOR_SOURCE_SUCCESS, payload);
        }
      }).catch(error => {
        commit(mutation.DELETE_INDICATOR_SOURCE_FAILED);
      });
  },
  async editindicatorsource({ commit }, payload) {
    commit(mutation.EDIT_INDICATOR_SOURCES);
    await this.$api.$patch(`indicatorsources/${payload.sourceid}`, payload)
      .then(response => {
        commit(mutation.EDIT_INDICATOR_SOURCES_SUCCESS, response);

      }).catch(error => {
        commit(mutation.EDIT_INDICATOR_SOURCES_FAILED);
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
