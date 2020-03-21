import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  privilege: {},
  privileges: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_PRIVILEGE_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_PRIVILEGE_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.privileges = payload;
  },
  [mutation.GET_PRIVILEGE_VALUES_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_PRIVILEGE_VALUES_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllprivileges({
    commit
  }) {
    commit(mutation.GET_PRIVILEGE_VALUES);
    await this.$api.$get(`privilages/`)
      .then(response => {
        commit(mutation.GET_PRIVILEGE_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_PRIVILEGE_VALUES_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  privilegesdata: function (state) {
    return state.privileges;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
