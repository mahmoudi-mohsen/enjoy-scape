import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        user: {
            data: []
        }
    },
    getters: {
        getUser: (state) => {
            return state.user;
        },
    },
    mutations: {
        SET_USER: (state, userInfo) => {
            Vue.set(state, 'user', userInfo)
        }
    },
    actions: {
        SetUser: (context, userInfo) => {
            context.commit('SET_USER', userInfo);
        },
    },
}
