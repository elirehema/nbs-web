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
  },
  [mutation.DELETE_PUBLICATION](state) {
    state.isLoggedIn = true;
  },
  [mutation.DELETE_PUBLICATION_SUCCESS](state, payload) {
    state.isLoading = false;
    state.publication = payload;
    state.publications.splice(state.publications.indexOf(payload), 1);

  },
  [mutation.DELETE_PUBLICATION_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_PUBLICATION_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_PUBLICATION](state) {
    state.isLoggedIn = true;
  },
  [mutation.EDIT_PUBLICATION_SUCCESS](state, payload) {
    state.isLoading = false;
    state.publication = payload;
  },
  [mutation.EDIT_PUBLICATION_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_PUBLICATION_ERROR](state) {
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

  async deletepublications({ commit }, payload) {
    commit(mutation.DELETE_PUBLICATION);
    await this.$api.$delete(`publications/${payload.pubid}`)
      .then(response => {
        if (response != null) {
          commit(mutation.DELETE_PUBLICATION_SUCCESS, payload);
        }
      }).catch(error => {
        commit(mutation.DELETE_PUBLICATION_FAILED);
      });
  },
  async editpublications({ commit }, payload) {
    commit(mutation.EDIT_PUBLICATION);
    await this.$api.$patch(`publications/${payload.pubid}`, payload)
      .then(response => {
        commit(mutation.EDIT_PUBLICATION_SUCCESS, response);

      }).catch(error => {
        commit(mutation.EDIT_PUBLICATION_FAILED);
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
