import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  indicatorcategorie: {},
  indicatorcategories: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_INDICATOR_CATEGORIES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_INDICATOR_CATEGORIES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorcategories = payload;
  },
  [mutation.GET_INDICATOR_CATEGORIES_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_INDICATOR_CATEGORIES_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_CATEGORY_VALUE](state) {
    state.isLoggedIn = true;
  },
  [mutation.POST_INDICATOR_CATEGORY_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorcategorie = payload;
    state.indicatorcategories.push(payload);
  },
  [mutation.POST_INDICATOR_CATEGORY_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_CATEGORY_VALUE_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllIndicatorCategories({
    commit
  }) {
    commit(mutation.GET_INDICATOR_CATEGORIES);
    await this.$api.$get(`indicatorcategories/`)
      .then(response => {
        commit(mutation.GET_INDICATOR_CATEGORIES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_INDICATOR_CATEGORIES_ERROR);
        console.log(error);

      });
  },
  async postindicatorcategory({ commit }, payload) {
    commit(mutation.POST_INDICATOR_CATEGORY_VALUE);
    await this.$api.$post(`indicatorcategories/`, payload)
      .then(response => {
        if (response.categoryid != null) {
          commit(mutation.POST_INDICATOR_CATEGORY_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_INDICATOR_CATEGORY_VALUE_ERROR);
        console.log(error);

      });
  },
};
const getters = {
  indicatorcategoriesdata: function (state) {
    return state.indicatorcategories;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
