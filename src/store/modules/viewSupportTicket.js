import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    viewSupportTicket: {
      data: []
    }
  },
  getters: {
    getViewSupportTicket: (state) => {
      return state.viewSupportTicket;
    },
  },
  mutations: {
    SET_VIEWSUPPORTTICKET: (state, viewSupportTicketInfo) => {
      Vue.set(state, 'viewSupportTicket', viewSupportTicketInfo)
    }
  },
  actions: {
    SetViewSupportTicket: (context, viewSupportTicketInfo) => {
      context.commit('SET_VIEWSUPPORTTICKET', viewSupportTicketInfo);
    },
  },
}
