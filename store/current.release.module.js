import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  currentrelease: {},
  currentreleases: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_CURRENT_RELEASES](state) {
    state.isLoading = true;
  },
  [mutation.GET_CURRENT_RELEASES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.currentreleases = payload;
  },
  [mutation.GET_CURRENT_RELEASES_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_CURRENT_RELEASES_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_CURRENT_RELEASES](state) {
    state.isLoading = true;
  },
  [mutation.POST_CURRENT_RELEASES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.currentrelease = payload;

    state.currentreleases.push(payload);
  },
  [mutation.POST_CURRENT_RELEASES_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_CURRENT_RELEASES_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_CURRENT_RELEASE](state) {
    state.isLoggedIn = true;
  },
  [mutation.DELETE_CURRENT_RELEASE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.currentrelease = payload;
    state.currentreleases.splice(state.currentreleases.indexOf(payload), 1);

  },
  [mutation.DELETE_CURRENT_RELEASE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_CURRENT_RELEASE_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_CURRENT_RELEASE](state) {
    state.isLoggedIn = true;
  },
  [mutation.EDIT_CURRENT_RELEASE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.currentrelease = payload;
  },
  [mutation.EDIT_CURRENT_RELEASE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_CURRENT_RELEASE_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllCurrentReleases({ commit }) {
    commit(mutation.GET_CURRENT_RELEASES);
    await this.$api.$get(`releases/`)
      .then(response => {
        commit(mutation.GET_CURRENT_RELEASES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_CURRENT_RELEASES_ERROR);
        console.log(error);

      });
  },
  async postcurrentrelease({ commit }, payload) {
    commit(mutation.POST_CURRENT_RELEASES);
    await this.$api.$post(`releases/`, payload)
      .then(response => {
        if (response.releaseid != null) {
          commit(mutation.POST_CURRENT_RELEASES_SUCCESS, response);
        }


      }).catch(error => {
        commit(mutation.POST_CURRENT_RELEASES_ERROR);
        console.log(error);

      });
  },
  async deletecurrentrelease({ commit }, payload) {
    commit(mutation.DELETE_CURRENT_RELEASE);
    await this.$api.$delete(`releases/${payload.releaseid}`)
      .then(response => {
        if (response != null) {
          commit(mutation.DELETE_CURRENT_RELEASE_SUCCESS, payload);
        }
      }).catch(error => {
        commit(mutation.DELETE_CURRENT_RELEASE_FAILED);
      });
  },
  async editdicurrentrelease({ commit }, payload) {
    commit(mutation.EDIT_CURRENT_RELEASE);
    await this.$api.$patch(`releases/${payload.releaseid}`, payload)
      .then(response => {
        commit(mutation.EDIT_CURRENT_RELEASE_SUCCESS, response);

      }).catch(error => {
        commit(mutation.EDIT_CURRENT_RELEASE_FAILED);
      });
  },

};
const getters = {
  currentreleasesdata: function (state) {
    return state.currentreleases;
  }


};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
