import * as mutation from './mutation-types';
const state = () => ({
  userdata: {},

});

const mutations = {

  [mutation.LOGIN](state) {
    state.showLoader = true;
  },
  [mutation.LOGIN_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.LOGIN_ERROR](state) {
    state.showLoader = false;
  },
  [mutation.LOGIN_SUCCESS](state, payload) {
    state.showLoader = false;
    state.userdata = payload;

  },
  [mutation.LOGOUT](state) {
    state.showLoader = true;
  },
  [mutation.LOGOUT_SUCCESS](state) {
    state.showLoader = false;
    state.userdata = null;
  },
  [mutation.LOGOUT_FAILED](state) {
    state.showLoader = false;
  },
};
const actions = {
  async login({ commit }, payload) {
    commit(mutation.LOGIN);
    await this.$api.$post(`auth/signin`, payload)
      .then(response => {
        if (response.accessToken != null) {

          commit(mutation.LOGIN_SUCCESS, response);
          const token = response.accessToken;
          //const uuId = response.id;
          localStorage.setItem('qAccessToken', token);
          localStorage.setItem('mroles', response.roles);
          localStorage.setItem('mmail', response.email);
          localStorage.setItem('uuId', response.id);
          localStorage.setItem('loginid', response.loginid);
          this.$router.push('/dashboard');
        }


      }).catch(error => {
        commit(mutation.LOGIN_ERROR);
        localStorage.removeItem('qAccessToken');
        localStorage.removeItem('uuId');
        localStorage.removeItem('mmail');
        localStorage.removeItem('mroles');
        localStorage.removeItem('loginid');
        console.log(error);

      });
  },
  async logout({ commit }) {
    await this.$api.$get(`auth/signout`)
      .then(response => {
        if (response.result == 'OK') {
          commit(mutation.LOGOUT);
          window.localStorage.clear();
          localStorage.removeItem('qAccessToken');
          localStorage.removeItem('uuId');
          localStorage.removeItem('mmail');
          localStorage.removeItem('mroles');
          localStorage.removeItem('loginid');
          sessionStorage.clear();
          this.$router.push('/');
        }


      }).catch(error => {
        commit(mutation.LOGOUT_FAILED);

      });
  }
};
const getters = {
  isLoggedIn: function (state) {
    if (Object.keys(state.userdata).length > 0 || localStorage.removeItem('qAccessToken')) {
      return true;
    }
    return false;
  },
  userInfos: function (state) {
    return state.userdata;
  }
};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
