import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    saveSupportComment: {
      data: []
    }
  },
  getters: {
    getSaveSupportComment: (state) => {
      return state.saveSupportComment;
    },
  },
  mutations: {
    SET_SAVESUPOORTCOMMENT: (state, saveSupportCommentInfo) => {
      Vue.set(state, 'saveSupportComment', saveSupportCommentInfo)
    }
  },
  actions: {
    SetSaveSupportComment: (context, saveSupportCommentInfo) => {
      context.commit('SET_SAVESUPOORTCOMMENT', saveSupportCommentInfo);
    },
  },
}
