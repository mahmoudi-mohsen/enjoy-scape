import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        documentTypes: {
            data: []
        }
    },
    getters: {
        getDocumentTypes: (state) => {
            return state.documentTypes;
        },
    },
    mutations: {
        SET_DOCUMENTTYPES: (state, documentTypesInfo) => {
            Vue.set(state, 'documentTypes', documentTypesInfo)
        }
    },
    actions: {
        SetDocumentTypes: (context, documentTypesInfo) => {
            context.commit('SET_DOCUMENTTYPES', documentTypesInfo);
        },
    },
}
