import * as mutation from './mutation-types';
const state = () => ({
  registration: {},
  isLoading: Boolean,
  userdata: {}
});

const mutations = {
  [mutation.REGISTER](state) {
    state.isLoading = true;
  },
  [mutation.REGISTER_SUCCESS](state, payload) {
    state.isLoading = false;
    state.userdata = payload;
  },
  [mutation.REGISTER_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.REGISTER_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async signup({
    commit
  }, payload) {
    commit(mutation.REGISTER);
    await this.$api.$post(`auth/signup/`, payload)
      .then(response => {
        if (response.message != null) {
          commit(mutation.REGISTER_SUCCESS, response);
          this.$router.push('/signin');
        }


      }).catch(error => {
        commit(mutation.REGISTER_FAILED);


      });
  }

};
const getters = {};
export default {
  state,
  getters,
  mutations,
  actions,
};
