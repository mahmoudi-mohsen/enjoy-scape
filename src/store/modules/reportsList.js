import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    reportsList: {
      data: []
    }
  },
  getters: {
    getReportsList: (state) => {
      return state.reportsList;
    },
  },
  mutations: {
    SET_REPORTSLIST: (state, reportsListInfo) => {
      Vue.set(state, 'reportsList', reportsListInfo)
    }
  },
  actions: {
    SetReportsList: (context, reportsListInfo) => {
      context.commit('SET_REPORTSLIST', reportsListInfo);
    },
  },
}
