import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    isLocalAdmin: {
      data: []
    }
  },
  getters: {
    getIsLocalAdmin: (state) => {
      return state.isLocalAdmin;
    },
  },
  mutations: {
    SET_ISLOCALADMIN: (state, isLocalAdminInfo) => {
      Vue.set(state, 'isLocalAdmin', isLocalAdminInfo)
    }
  },
  actions: {
    SetIsLocalAdmin: (context, isLocalAdminInfo) => {
      context.commit('SET_ISLOCALADMIN', isLocalAdminInfo);
    },
  },
}
