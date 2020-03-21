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
  }
};
const actions = {
  async getAllperiodtypes({
    commit
  }) {
    commit(mutation.GET_PERIODTYPES_VALUES);
    await this.$api.$get(`periodtypes/`)
      .then(response => {
        commit(mutation.GET_PERIODTYPES_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_PERIODTYPES_VALUES_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  periodtypesdata: function (state) {
    return state.periodtypes;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
