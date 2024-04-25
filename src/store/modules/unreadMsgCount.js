import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    unreadMsgCount: {
      data: []
    }
  },
  getters: {
    getUnreadMsgCount: (state) => {
      return state.unreadMsgCount;
    },
  },
  mutations: {
    SET_UNREADMSGCOUNT: (state, unreadMsgCountInfo) => {
      Vue.set(state, 'unreadMsgCount', unreadMsgCountInfo)
    }
  },
  actions: {
    SetUnreadMsgCount: (context, unreadMsgCountInfo) => {
      context.commit('SET_UNREADMSGCOUNT', unreadMsgCountInfo);
    },
  },
}
