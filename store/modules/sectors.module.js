import * as mutation from './mutation-types';
const state = () => ({
  count: null,
 sector: {},
  sectors: [],
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.GET_SECTORS](state) {
    state.isLoggedIn = true;
  },
  [mutation.GET_SECTORS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.sectors = payload;
  },
  [mutation.GET_SECTORS_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.GET_SECTORS_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getAllSectors({
    commit
  }) {
    commit(mutation.GET_SECTORS);
    await this.$api.$get(`sectors/`)
      .then(response => {
        commit(mutation.GET_SECTORS_SUCCESS, response);


      }).catch(error => {
        commit(mutation.GET_SECTORS_ERROR);
        console.log(error);

      });
  },

};
const getters = {
  sectordata: function (state) {
    return state.sectors;
  }


};
export default {
  state,
  getters,
  mutations,
  actions,
};
