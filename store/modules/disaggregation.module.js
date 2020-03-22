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
    async postdisaggregation({ commit },payload) {
      commit(mutation.POST_DISAGGREGATION);
      await this.$api.$post(`disaggregations/`, payload)
        .then(response => {
        if (response.id != null) {
          commit(mutation.POST_DISAGGREGATION_SUCCESS, response);
          }


        }).catch(error => {
          commit(mutation.POST_DISAGGREGATION_ERROR);
          console.log(error);

        });
    },

};
const getters = {
  disaggregationdata: function (state) {
    return state.disaggregations;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
