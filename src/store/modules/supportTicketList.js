import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    supportTicketList: {
      data: []
    }
  },
  getters: {
    getSupportTicketList: (state) => {
      return state.supportTicketList;
    },
  },
  mutations: {
    SET_SUPPORTTICKETLIST: (state, supportTicketListInfo) => {
      Vue.set(state, 'supportTicketList', supportTicketListInfo)
    }
  },
  actions: {
    SetSupportTicketList: (context, supportTicketListInfo) => {
      context.commit('SET_SUPPORTTICKETLIST', supportTicketListInfo);
    },
  },
}
