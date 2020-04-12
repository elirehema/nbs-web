import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  publication: {},
  publications: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_PUBLICATIONS_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_PUBLICATIONS_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.publications = payload;
  },
  [mutation.GET_PUBLICATIONS_VALUES_FAILLED](state) {
    state.isLoading = false;
  },
  [mutation.GET_PUBLICATIONS_VALUES_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_PUBLICATION_VALUE](state) {
    state.isLoggedIn = true;
  },
  [mutation.POST_PUBLICATION_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.publication = payload;
    state.publications.push(payload);
  },
  [mutation.POST_PUBLICATION_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_PUBLICATION_VALUE_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllpublications({
    commit
  }) {
    commit(mutation.GET_PUBLICATIONS_VALUES);
    await this.$api.$get(`publications/`)
      .then(response => {
        commit(mutation.GET_PUBLICATIONS_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_PUBLICATIONS_VALUES_ERROR);
        console.log(error);

      });
  },
  async postpublications({ commit }, payload) {
    commit(mutation.POST_PUBLICATION_VALUE);
    await this.$api.$post(`publications/`, payload)
      .then(response => {
        if (response.pubid != null) {
          commit(mutation.POST_PUBLICATION_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_PUBLICATION_VALUE_ERROR);
        console.log(error);

      });
  },


};
const getters = {
  publicationsdata: function (state) {
    return state.publications;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
