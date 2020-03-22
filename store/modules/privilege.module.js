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
  },

  [mutation.POST_PRIVILEGE_VALUE](state) {
    state.isLoading = true;
  },
  [mutation.POST_PRIVILEGE_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.privilege = payload;
    state.privileges.push(payload);
  },
  [mutation.POST_PRIVILEGE_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_PRIVILEGE_VALUE_ERROR](state) {
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

  async postprivilegevalue({ commit }, payload) {
    commit(mutation.POST_PRIVILEGE_VALUE);
    await this.$api.$post(`privilages/`, payload)
      .then(response => {
        if (response.id != null) {
          commit(mutation.POST_PRIVILEGE_VALUE_SUCCESS, response);

        }
      }).catch(error => {
        commit(mutation.POST_PRIVILEGE_VALUE_FAILED);
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
