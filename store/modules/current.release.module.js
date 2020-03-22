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
    state.currentreleases.push(payload)
  },
  [mutation.POST_CURRENT_RELEASES_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_CURRENT_RELEASES_ERROR](state) {
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
        if (response.id != null) {
          commit(mutation.POST_CURRENT_RELEASES_SUCCESS, response);
        }


      }).catch(error => {
        commit(mutation.POST_CURRENT_RELEASES_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  currentreleasesdata: function (state) {
    return state.currentreleases;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
