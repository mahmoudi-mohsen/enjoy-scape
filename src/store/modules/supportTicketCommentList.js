import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    supportTicketCommentList: {
      data: []
    }
  },
  getters: {
    getSupportTicketCommentList: (state) => {
      return state.supportTicketCommentList;
    },
  },
  mutations: {
    SET_SUPPORTTICKETCOMMENTLIST: (state, supportTicketCommentListInfo) => {
      Vue.set(state, 'supportTicketCommentList', supportTicketCommentListInfo)
    }
  },
  actions: {
    SetSupportTicketCommentList: (context, supportTicketCommentListInfo) => {
      context.commit('SET_SUPPORTTICKETCOMMENTLIST', supportTicketCommentListInfo);
    },
  },
}
