import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    supportTicketPriority: {
      data: []
    }
  },
  getters: {
    getSupportTicketPriority: (state) => {
      return state.supportTicketPriority;
    },
  },
  mutations: {
    SET_SUPPORTTICKETPRIORITY: (state, supportTicketPriorityInfo) => {
      Vue.set(state, 'supportTicketPriority', supportTicketPriorityInfo)
    }
  },
  actions: {
    SetSupportTicketPriority: (context, supportTicketPriorityInfo) => {
      context.commit('SET_SUPPORTTICKETPRIORITY', supportTicketPriorityInfo);
    },
  },
}
