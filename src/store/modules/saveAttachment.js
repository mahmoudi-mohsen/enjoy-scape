import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    saveAttachment: {
      data: []
    }
  },
  getters: {
    getSaveAttachment: (state) => {
      return state.saveAttachment;
    },
  },
  mutations: {
    SET_SAVEATTACHMENT: (state, saveAttachmentInfo) => {
      Vue.set(state, 'saveAttachment', saveAttachmentInfo)
    }
  },
  actions: {
    SetSaveAttachment: (context, saveAttachmentInfo) => {
      context.commit('SET_SAVEATTACHMENT', saveAttachmentInfo);
    },
  },
}
