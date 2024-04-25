import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        saveUser: {
            data: []
        }
    },
    getters: {
        getSaveUser: (state) => {
            return state.saveUser;
        },
    },
    mutations: {
        SET_SAVEUSER: (state, saveUserInfo) => {
            Vue.set(state, 'saveUser', saveUserInfo)
        }
    },
    actions: {
        SetSaveUser: (context, saveUserInfo) => {
            context.commit('SET_SAVEUSER', saveUserInfo);
        },
    },
}
