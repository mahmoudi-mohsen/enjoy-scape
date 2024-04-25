import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    attachmentList: {
      data: []
    }
  },
  getters: {
    getAttachmentList: (state) => {
      return state.attachmentList;
    },
  },
  mutations: {
    SET_ATTACHMENTLIST: (state, attachmentListInfo) => {
      Vue.set(state, 'attachmentList', attachmentListInfo)
    }
  },
  actions: {
    SetAttachmentList: (context, attachmentListInfo) => {
      context.commit('SET_ATTACHMENTLIST', attachmentListInfo);
    },
  },
}
