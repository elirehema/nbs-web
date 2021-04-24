import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  disaggregation: {},
  disaggregations: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_DISAGGREGATIONS](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_DISAGGREGATIONS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.disaggregations = payload;
  },
  [mutation.GET_DISAGGREGATIONS_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_DISAGGREGATIONS_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_DISAGGREGATION](state) {
    state.isLoggedIn = true;
  },
  [mutation.POST_DISAGGREGATION_SUCCESS](state, payload) {
    state.isLoading = false;
    state.disaggregation = payload;
    state.disaggregations.push(payload);
  },
  [mutation.POST_DISAGGREGATION_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_DISAGGREGATION_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_DISAGGREGATION](state) {
    state.isLoggedIn = true;
  },
  [mutation.DELETE_DISAGGREGATION_SUCCESS](state, payload) {
    state.isLoading = false;
    state.disaggregation = payload;
    state.disaggregations.splice(state.disaggregations.indexOf(payload), 1);

  },
  [mutation.DELETE_DISAGGREGATION_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_DISAGGREGATION_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_DISAGGREGATION](state) {
    state.isLoggedIn = true;
  },
  [mutation.EDIT_DISAGGREGATION_SUCCESS](state, payload) {
    state.isLoading = false;
    state.disaggregation = payload;
  },
  [mutation.EDIT_DISAGGREGATION_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_DISAGGREGATION_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllDisaggregations({
    commit
  }) {
    commit(mutation.GET_DISAGGREGATIONS);
    await this.$api.$get(`disaggregations/`)
      .then(response => {
        commit(mutation.GET_DISAGGREGATIONS_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_DISAGGREGATIONS_ERROR);
        console.log(error);

      });
  },
  async postdisaggregation({ commit }, payload) {
    commit(mutation.POST_DISAGGREGATION);
    await this.$api.$post(`disaggregations/`, payload)
      .then(response => {
        if (response.disaggregationtypeid != null) {
          commit(mutation.POST_DISAGGREGATION_SUCCESS, response);
        }


      }).catch(error => {
        commit(mutation.POST_DISAGGREGATION_ERROR);
        console.log(error);

      });
  },
  async deletedisaggregations({ commit }, payload) {
    commit(mutation.DELETE_DISAGGREGATION);
    await this.$api.$delete(`disaggregations/${payload.disaggregationtypeid}`)
      .then(response => {
        if (response != null) {
          commit(mutation.DELETE_DISAGGREGATION_SUCCESS, payload);
        }
      }).catch(error => {
        commit(mutation.DELETE_DISAGGREGATION_FAILED);
      });
  },
  async editdisaggregation({ commit }, payload) {
    commit(mutation.EDIT_DISAGGREGATION);
    await this.$api.$patch(`disaggregations/${payload.disaggregationtypeid}`, payload)
      .then(response => {
        commit(mutation.EDIT_DISAGGREGATION_SUCCESS, response);

      }).catch(error => {
        commit(mutation.EDIT_DISAGGREGATION_FAILED);
      });
  },

};
const getters = {
  disaggregationdata: function (state) {
    return state.disaggregations;
  }


};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
