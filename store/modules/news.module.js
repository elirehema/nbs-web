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
  }
};
const actions = {
  async getnews({ commit }) {
    commit(mutation.NEWS_DATAS);
    await this.$api.$get(`news/`)
      .then(response => {
        console.log(response)
        commit(mutation.NEWS_DATAS_SUCCESS, response);


      }).catch(error => {
        commit(mutation.NEWS_DATAS_FAILED);
        console.log(error);

      });
  },

  async savenews({
    commit
  }, payload) {
    console.log(payload);
    commit(mutation.SAVE_NEWS_DATA);
    await this.$api.$post(`news/`, payload)
      .then(response => {
        commit(mutation.SAVE_NEWS_DATA_SUCCESS, response);
        this.$router.push('/home');


      }).catch(error => {
        commit(mutation.SAVE_NEWS_DATA_FAILED);
        console.log(error);

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
  state,
  getters,
  mutations,
  actions,
};
