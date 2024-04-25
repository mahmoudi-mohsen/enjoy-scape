import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        savePerson: {
            data: []
        }
    },
    getters: {
        getSavePerson: (state) => {
            return state.savePerson;
        },
    },
    mutations: {
        SET_SAVEPERSON: (state, savePersonInfo) => {
            Vue.set(state, 'savePerson', savePersonInfo)
        }
    },
    actions: {
        SetSavePerson: (context, savePersonInfo) => {
            context.commit('SET_SAVEPERSON', savePersonInfo);
        },
    },
}
