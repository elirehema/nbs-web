import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  sourcegroup: {},
  sourcegroups: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_SOURCE_GROUP](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_SOURCE_GROUP_SUCCESS](state, payload) {
    state.isLoading = false;
    state.sourcegroups = payload;
  },
  [mutation.GET_SOURCE_GROUP_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_SOURCE_GROUP_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_SOURCE_GROUP](state) {
    state.isLoggedIn = true;
  },
  [mutation.POST_SOURCE_GROUP_SUCCESS](state, payload) {
    state.isLoading = false;
    state.sourcegroup = payload;
    state.sourcegroups.push(payload);
  },
  [mutation.POST_SOURCE_GROUP_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_SOURCE_GROUP_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllSourceGroups({ commit }) {
    commit(mutation.GET_SOURCE_GROUP);
    await this.$api.$get(`sourcegroups/`)
      .then(response => {
        commit(mutation.GET_SOURCE_GROUP_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_SOURCE_GROUP_ERROR);
        console.log(error);

      });
  },
  async postsourcegroupvalue({ commit }, payload) {
    commit(mutation.POST_SOURCE_GROUP);
    await this.$api.$post(`sourcegroups/`, payload)
      .then(response => {
        if (response.sourcegroupid != null) {
          commit(mutation.POST_SOURCE_GROUP_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_SOURCE_GROUP_FAILED);
        console.log(error);

      });
  },

};
const getters = {
  sourcegroupsdata: function (state) {
    return state.sourcegroups;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
