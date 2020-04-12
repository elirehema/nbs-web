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
  },
   [mutation.DELETE_SOURCE_GROUPS](state) {
           state.isLoggedIn = true;
         },
         [mutation.DELETE_SOURCE_GROUPS_SUCCESS](state, payload) {
           state.isLoading = false;
           state.sourcegroup = payload;
           state.sourcegroups.splice(state.sourcegroups.indexOf(payload));

         },
         [mutation.DELETE_SOURCE_GROUPS_FAILED](state) {
           state.isLoading = false;
         },
         [mutation.DELETE_SOURCE_GROUPS_ERROR](state) {
           state.isLoading = false;
         },
         [mutation.EDIT_SOURCE_GROUPS](state) {
           state.isLoggedIn = true;
         },
         [mutation.EDIT_SOURCE_GROUPS_SUCCESS](state, payload) {
           state.isLoading = false;
           state.sourcegroup = payload;
         },
         [mutation.EDIT_SOURCE_GROUPS_FAILED](state) {
           state.isLoading = false;
         },
         [mutation.EDIT_SOURCE_GROUPS_ERROR](state) {
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
        if (response.sourceid != null) {
          commit(mutation.POST_SOURCE_GROUP_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_SOURCE_GROUP_FAILED);
        console.log(error);

      });
  },
      async deletedisourcegroup({ commit }, payload) {
          commit(mutation.DELETE_SOURCE_GROUPS);
          await this.$api.$delete(`sourcegroups/${payload.sourceid}`)
            .then(response => {
              if (response != null) {
                commit(mutation.DELETE_SOURCE_GROUPS_SUCCESS, payload);
              }
            }).catch(error => {
              commit(mutation.DELETE_SOURCE_GROUPS_FAILED);
            });
        },
        async editdisourcegroup({ commit }, payload) {
          commit(mutation.EDIT_SOURCE_GROUPS);
          await this.$api.$patch(`sourcegroups/${payload.sourceid}`, payload)
            .then(response => {
                commit(mutation.EDIT_SOURCE_GROUPS_SUCCESS, response);

            }).catch(error => {
              commit(mutation.EDIT_SOURCE_GROUPS_FAILED);
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
