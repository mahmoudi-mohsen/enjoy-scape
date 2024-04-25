import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    saveSupportTicket: {
      data: []
    }
  },
  getters: {
    getSaveSupportTicket: (state) => {
      return state.saveSupportTicket;
    },
  },
  mutations: {
    SET_SAVESUPPORTTICKET: (state, saveSupportTicketInfo) => {
      Vue.set(state, 'saveSupportTicket', saveSupportTicketInfo)
    }
  },
  actions: {
    SetSaveSupportTicket: (context, saveSupportTicketInfo) => {
      context.commit('SET_SAVESUPPORTTICKET', saveSupportTicketInfo);
    },
  },
}
