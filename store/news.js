import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  new: {},
  news: [],
  savednew: {},
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.NEWS_DATAS](state) {
    state.isLoggedIn = true;
  },
  [mutation.NEWS_DATAS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.news = payload;
  },
  [mutation.NEWS_DATAS_FAILED](state) {
    state.isLoading = false;
  },

  [mutation.NEWS_DATA](state) {
    state.isLoggedIn = true;
  },
  [mutation.NEWS_DATA_SUCCESS](state, payload) {
    state.isLoading = false;
    state.new = payload;
  },
  [mutation.NEWS_DATA_FAILED](state) {
    state.isLoading = false;
  },

  [mutation.SAVE_NEWS_DATA](state) {
    state.isLoggedIn = true;
  },
  [mutation.SAVE_NEWS_DATA_SUCCESS](state, payload) {
    state.isLoading = false;
    state.savenew = payload;
    state.news.push(payload);
  },
  [mutation.SAVE_NEWS_DATA_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_NEWS](state) {
    state.isLoggedIn = true;
  },
  [mutation.DELETE_NEWS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.new = payload;
    state.news.splice(state.news.indexOf(payload), 1);

  },
  [mutation.DELETE_NEWS_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.DELETE_NEWS_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_NEWS](state) {
    state.isLoggedIn = true;
  },
  [mutation.EDIT_NEWS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.new = payload;
  },
  [mutation.EDIT_NEWS_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_NEWS_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getnews({ commit }) {
    commit(mutation.NEWS_DATAS);
    await this.$api.$get(`news/`)
      .then(response => {
        commit(mutation.NEWS_DATAS_SUCCESS, response);


      }).catch(error => {
        commit(mutation.NEWS_DATAS_FAILED);
        console.log(error);

      });
  },

  async savenews({
    commit
  }, payload) {
    commit(mutation.SAVE_NEWS_DATA);
    await this.$api.$post(`news/`, payload)
      .then(response => {
        commit(mutation.SAVE_NEWS_DATA_SUCCESS, response);

      }).catch(error => {
        commit(mutation.SAVE_NEWS_DATA_FAILED);
        console.log(error);

      });
  },

  async deletenews({ commit }, payload) {
    commit(mutation.DELETE_NEWS);
    await this.$api.$delete(`news/${payload.newsid}`)
      .then(response => {
        if (response != null) {
          commit(mutation.DELETE_NEWS_SUCCESS, payload);
        }
      }).catch(error => {
        commit(mutation.DELETE_NEWS_FAILED);
      });
  },
  async editnews({ commit }, payload) {
    commit(mutation.EDIT_NEWS);
    await this.$api.$patch(`news/${payload.newsid}`, payload)
      .then(response => {
        commit(mutation.EDIT_NEWS_SUCCESS, response);

      }).catch(error => {
        commit(mutation.EDIT_NEWS_FAILED);
      });
  },
};
const getters = {
  newsdata: function (state) {
    return state.news;
  },
  getsavednew: function (state) {
    return state.savenew;
  }

};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
