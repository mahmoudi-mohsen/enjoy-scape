import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    reportExcelDownload: {
      data: []
    }
  },
  getters: {
    getReportExcelDownload: (state) => {
      return state.reportExcelDownload;
    },
  },
  mutations: {
    SET_REPORTEXXELDOWNLOAD: (state, reportExcelDownloadInfo) => {
      Vue.set(state, 'reportExcelDownload', reportExcelDownloadInfo)
    }
  },
  actions: {
    SetReportExcelDownload: (context, reportExcelDownloadInfo) => {
      context.commit('SET_REPORTEXXELDOWNLOAD', reportExcelDownloadInfo);
    },
  },
}
