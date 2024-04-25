import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        catalogs: {
            data: []
        }
    },
    getters: {
        getCatalogs: (state) => {
            return state.catalogs;
        },
    },
    mutations: {
        SET_CATALOGS: (state, catalogsInfo) => {
            Vue.set(state, 'catalogs', catalogsInfo)
        }
    },
    actions: {
        SetCatalogs: (context, catalogsInfo) => {
            context.commit('SET_CATALOGS', catalogsInfo);
        },
    },
}
