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
  },
  [mutation.CREATE_SECTOR](state) {
    state.isLoggedIn = true;
  },
  [mutation.CREATE_SECTOR_SUCCESS](state, payload) {
    state.isLoading = false;
    state.sector = payload;
    state.sectors.push(payload);
  },
  [mutation.CREATE_SECTOR_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.CREATE_SECTOR_ERROR](state) {
    state.isLoading = false;
  },
   [mutation.DELETE_SECTOR](state) {
      state.isLoggedIn = true;
    },
    [mutation.DELETE_SECTOR_SUCCESS](state, payload) {
      state.isLoading = false;
      state.sector = payload;
      state.sectors.push(payload);
    },
    [mutation.DELETE_SECTOR_FAILED](state) {
      state.isLoading = false;
    },
    [mutation.DELETE_SECTOR_ERROR](state) {
      state.isLoading = false;
    },
     [mutation.EDIT_SECTOR](state) {
          state.isLoggedIn = true;
        },
        [mutation.EDIT_SECTOR_SUCCESS](state, payload) {
          state.isLoading = false;
          state.sector = payload;
          state.sectors.push(payload);
        },
        [mutation.EDIT_SECTOR_FAILED](state) {
          state.isLoading = false;
        },
        [mutation.EDIT_SECTOR_ERROR](state) {
          state.isLoading = false;
        }


};
const actions = {
  async getAllSectors({ commit }) {
    commit(mutation.GET_SECTORS);
    await this.$api.$get(`sectors/`)
      .then(response => {
        commit(mutation.GET_SECTORS_SUCCESS, response);
      }).catch(error => {
        commit(mutation.GET_SECTORS_ERROR);
        console.log(error);

      });
  },
  async postsector({ commit }, payload) {
    commit(mutation.CREATE_SECTOR);
    await this.$api.$post(`sectors/`, payload)
      .then(response => {
        if (response.id != null) {
          commit(mutation.CREATE_SECTOR_SUCCESS, response);
        }
      }).catch(error => {
        commit(mutation.CREATE_SECTOR_FAILED);
      });
  },
  async sectordelete({commit}, payload){
   commit(mutation.DELETE_SECTOR);
      await this.$api.$delete(`sectors/${payload}`)
        .then(response => {
        console.log(response);
          if (response.status  === 200) {
            commit(mutation.DELETE_SECTOR_SUCCESS, response);
          }
        }).catch(error => {
          commit(mutation.DELETE_SECTOR_FAILED);
        });
  },
   async sectoredit({ commit },payload) {
      commit(mutation.EDIT_SECTOR);
      await this.$api.$put(`sectors/${payload.sectorid}`, payload)
        .then(response => {
          if (response.id != null) {
            commit(mutation.EDIT_SECTOR_SUCCESS, response);
          }
        }).catch(error => {
          commit(mutation.EDIT_SECTOR_FAILED);
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
