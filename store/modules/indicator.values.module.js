import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  indicatorvalue: {},
  indicatorvalues: [],
  regularindicatorvalues: [],
  indicatorvaluestemplate: [],
  regularindicatorvaluestemplate: [],
  regularindicatorvalue: {},
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_INDICATOR_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_INDICATOR_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorvalues = payload;
  },
  [mutation.GET_INDICATOR_VALUES_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_INDICATOR_VALUES_ERROR](state) {
    state.isLoading = false;
  },

  [mutation.GET_INDICATOR_TEMPLATE](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_INDICATOR_TEMPLATE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorvaluestemplate = payload;
  },
  [mutation.GET_INDICATOR_TEMPLATE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_INDICATOR_TEMPLATE_ERROR](state) {
    state.isLoading = false;
  },

  [mutation.GET_REGULAR_INDICATOR_TEMPLATE](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_REGULAR_INDICATOR_TEMPLATE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.regularindicatorvaluestemplate = payload;
  },
  [mutation.GET_REGULAR_INDICATOR_TEMPLATE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_REGULAR_INDICATOR_TEMPLATE_ERROR](state) {
    state.isLoading = false;
  },

  [mutation.GET_REGULAR_INDICATOR_VALUES](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_REGULAR_INDICATOR_VALUES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.regularindicatorvalues = payload;
  },
  [mutation.GET_REGULAR_INDICATOR_VALUES_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_REGULAR_INDICATOR_VALUES_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_VALUE](state) {
    state.isLoggedIn = true;
  },

  [mutation.EDIT_INDICATOR_VALUE](state) {
    state.isLoggedIn = true;
  },
  [mutation.EDIT_INDICATOR_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorvalue = payload;
    //Object.assign(this.indicatorvaluestemplate[0], payload);
  },
  [mutation.EDIT_INDICATOR_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.EDIT_INDICATOR_VALUE_ERROR](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_VALUE](state) {
    state.isLoggedIn = true;
  },

  [mutation.POST_INDICATOR_VALUE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.indicatorvalue = payload;
    if (payload.periodid == 1) {
      state.indicatorvaluestemplate.push(payload);
    } else {
      state.regularindicatorvaluestemplate.push(payload);
    }
  },
  [mutation.POST_INDICATOR_VALUE_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.POST_INDICATOR_VALUE_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllIndicatorvalues({ commit }) {
    commit(mutation.GET_INDICATOR_VALUES);
    await this.$api.$get(`indicatorvalues/`)
      .then(response => {
        commit(mutation.GET_INDICATOR_VALUES_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_INDICATOR_VALUES_ERROR);
        console.log(error);

      });
  },
  async getAllIndicatorValuesTemplate({ commit }) {
    commit(mutation.GET_INDICATOR_TEMPLATE);
    await this.$api.$get(`indicatorvalues/template`)
      .then((response) => {
        commit(mutation.GET_INDICATOR_TEMPLATE_SUCCESS, response);
        return response;
      }).catch(error => {
        commit(mutation.GET_INDICATOR_TEMPLATE_FAILED);
        console.log(error);
      });
  },
  async getAllRegularIndicatorvalues({ commit }) {
    commit(mutation.GET_REGULAR_INDICATOR_VALUES);
    await this.$api.$get(`regular/`)
      .then(response => {
        commit(mutation.GET_REGULAR_INDICATOR_VALUES_SUCCESS, response);
      }).catch(error => {
        commit(mutation.GET_REGULAR_INDICATOR_VALUES_ERROR);
        console.log(error);

      });
  },
  async getAllRegularIndicatorvaluesTemplate({ commit }) {
    commit(mutation.GET_REGULAR_INDICATOR_TEMPLATE);
    await this.$api.$get(`regular/template`)
      .then(response => {
        commit(mutation.GET_REGULAR_INDICATOR_TEMPLATE_SUCCESS, response);
        return response;
      }).catch(error => {
        commit(mutation.GET_REGULAR_INDICATOR_TEMPLATE_ERROR);
        console.log(error);

      });
  },
  async postindicatorvalues({ commit }, payload) {
    commit(mutation.POST_INDICATOR_VALUE);
    await this.$api.$post(`indicatorvalues/`, payload)
      .then(response => {
        console.log(response);
        if (response.valueid != null) {
          commit(mutation.POST_INDICATOR_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.POST_INDICATOR_VALUE_ERROR);
        console.log(error);

      });
  },
  async editindicatorvalues({ commit }, payload) {
    commit(mutation.EDIT_INDICATOR_VALUE);
    await this.$api.$patch(`indicatorvalues/${payload.valueid}`, payload)
      .then(response => {
        if (response) {
          commit(mutation.EDIT_INDICATOR_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.EDIT_INDICATOR_VALUE_ERROR);
        console.log(error);

      });
  },
  async editdefaultindicatorvalues({ commit }, payload) {
    commit(mutation.EDIT_INDICATOR_VALUE);
    await this.$api.$patch(`indicatorvalues/default/${payload.valueid}`, payload)
      .then(response => {
        if (response) {
          commit(mutation.EDIT_INDICATOR_VALUE_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.EDIT_INDICATOR_VALUE_ERROR);
        console.log(error);

      });
  },
};

const getters = {
  indicatorvaluesdata: function (state) {
    return state.indicatorvalues;
  },
  regularindicatorvaluesdata: function (state) {
    return state.regularindicatorvalues;
  },
  regularindicatorvaluestemplate: function (state) {
    return state.regularindicatorvaluestemplate;
  },
  indicatorvaluestemplate: function (state) {
    return state.indicatorvaluestemplate;
  },
  indicatordata: function (state, id) {
    return state.indicatorvalues.filter(id => indicatorvalues.id);
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
