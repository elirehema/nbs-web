import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  periodtype: {},
  periodtypes: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_PERIODTYPES_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_PERIODTYPES_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.periodtypes = payload;
  },
  [mutation.GET_PERIODTYPES_VALUES_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_PERIODTYPES_VALUES_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_PERIOD_TYPE_VALUE](state) {
    state.isLoggedIn = true;
  },
  [mutation.POST_INDICATOR_PERIOD_TYPE_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.periodtype = payload;
    state.periodtypes.push(payload);
  },
  [mutation.POST_INDICATOR_PERIOD_TYPE_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_PERIOD_TYPE_VALUE_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_PERIOD_TYPE](state) {
    state.isLoggedIn = true;
  },
  [mutation.DELETE_PERIOD_TYPE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.sector = payload;
    state.periodtypes.splice(state.periodtypes.indexOf(payload));

  },
  [mutation.DELETE_PERIOD_TYPE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_PERIOD_TYPE_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_PERIOD_TYPE](state) {
    state.isLoggedIn = true;
  },
  [mutation.EDIT_PERIOD_TYPE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.sector = payload;
  },
  [mutation.EDIT_PERIOD_TYPE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_PERIOD_TYPE_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllperiodtypes({ commit }) {
    commit(mutation.GET_PERIODTYPES_VALUES);
    await this.$api.$get(`periodtypes/`)
      .then(response => {
        commit(mutation.GET_PERIODTYPES_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_PERIODTYPES_VALUES_ERROR);
        console.log(error);

      });
  },
  async postperiodtypevalue({ commit }, payload, callback) {
    commit(mutation.POST_INDICATOR_PERIOD_TYPE_VALUE);
    await this.$api.$post(`periodtypes/`, payload)
      .then(response => {
        if (response.periodid != null) {
          commit(mutation.POST_INDICATOR_PERIOD_TYPE_VALUE_SUCCESS, response);
          if (callback) {
            callback();
          }

        }
      }).catch(error => {
        commit(mutation.POST_INDICATOR_PERIOD_TYPE_VALUE_ERROR);
        console.log(error);

      });
  },

  async perioddelete({ commit }, payload) {
    commit(mutation.DELETE_PERIOD_TYPE);
    await this.$api.$delete(`periodtypes/${payload.periodid}`)
      .then(response => {
        if (response != null) {
          commit(mutation.DELETE_PERIOD_TYPE_SUCCESS, payload);
        }
      }).catch(error => {
        commit(mutation.DELETE_PERIOD_TYPE_FAILED);
      });
  },
  async periodedit({ commit }, payload) {
    commit(mutation.EDIT_PERIOD_TYPE);
    await this.$api.$put(`periodtypes/${payload.periodid}`, payload)
      .then(response => {
        commit(mutation.EDIT_PERIOD_TYPE_SUCCESS, response);

      }).catch(error => {
        commit(mutation.EDIT_PERIOD_TYPE_FAILED);
      });
  },

};
const getters = {
  periodtypesdata: function (state) {
    return state.periodtypes;
  },
  periodtypescount: function (state, getters) {
    return getters.periodtypesdata.length;
  }


};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
