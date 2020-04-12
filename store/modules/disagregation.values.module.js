import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  disaggregationvalue: {},
  disaggregationvalues: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_DISAGGREGATIONS_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_DISAGGREGATIONS_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.disaggregationvalues = payload;
  },
  [mutation.GET_DISAGGREGATIONS_VALUES_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_DISAGGREGATIONS_VALUES_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_DISAGGREGATION_VALUE](state) {
    state.isLoading = true;
  },
  [mutation.POST_DISAGGREGATION_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.disaggregationvalue = payload;
    state.disaggregationvalues.push(payload);
  },
  [mutation.POST_DISAGGREGATION_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_DISAGGREGATION_VALUE_ERROR](state) {
    state.isLoading = false;
  },
       [mutation.DELETE_DISAGGREGATION_VALUE](state) {
         state.isLoggedIn = true;
       },
       [mutation.DELETE_DISAGGREGATION_VALUE_SUCCESS](state, payload) {
         state.isLoading = false;
         state.disaggregationvalue = payload;
         state.disaggregationvalues.splice(state.disaggregationvalues.indexOf(payload));

       },
       [mutation.DELETE_DISAGGREGATION_VALUE_FAILED](state) {
         state.isLoading = false;
       },
       [mutation.DELETE_DISAGGREGATION_VALUE_ERROR](state) {
         state.isLoading = false;
       },
       [mutation.EDIT_DISAGGREGATION_VALUE](state) {
         state.isLoggedIn = true;
       },
       [mutation.EDIT_DISAGGREGATION_VALUE_SUCCESS](state, payload) {
         state.isLoading = false;
         state.disaggregationvalue = payload;
       },
       [mutation.EDIT_DISAGGREGATION_VALUE_FAILED](state) {
         state.isLoading = false;
       },
       [mutation.EDIT_DISAGGREGATION_VALUE_ERROR](state) {
         state.isLoading = false;
       }
};
const actions = {
  async getAlldisaggregationvalues({
    commit
  }) {
    commit(mutation.GET_DISAGGREGATIONS_VALUES);
    await this.$api.$get(`disaggregationvalues/`)
      .then(response => {
        commit(mutation.GET_DISAGGREGATIONS_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_DISAGGREGATIONS_VALUES_ERROR);
        console.log(error);

      });
  },
  async postdisaggregationvalue({ commit }, payload) {
    commit(mutation.POST_DISAGGREGATION_VALUE);
    await this.$api.$post(`disaggregationvalues/`, payload)
      .then(response => {
        if (response.disaggregationid != null) {
          commit(mutation.POST_DISAGGREGATION_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_DISAGGREGATION_VALUE_ERROR);
        console.log(error);

      });
  },
    async deletedisaggregationvalue({ commit }, payload) {
        commit(mutation.DELETE_DISAGGREGATION_VALUE);
        await this.$api.$delete(`disaggregationvalues/${payload.disaggregationid}`)
          .then(response => {
            if (response != null) {
              commit(mutation.DELETE_DISAGGREGATION_VALUE_SUCCESS, payload);
            }
          }).catch(error => {
            commit(mutation.DELETE_DISAGGREGATION_VALUE_FAILED);
          });
      },
      async editdisaggregationvalue({ commit }, payload) {
        commit(mutation.EDIT_DISAGGREGATION_VALUE);
        await this.$api.$patch(`disaggregationvalues/${payload.disaggregationid}`, payload)
          .then(response => {
              commit(mutation.EDIT_DISAGGREGATION_VALUE_SUCCESS, response);

          }).catch(error => {
            commit(mutation.EDIT_DISAGGREGATION_VALUE_FAILED);
          });
      },

};
const getters = {
  disaggregationvaluesdata: function (state) {
    return state.disaggregationvalues;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
