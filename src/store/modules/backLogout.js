import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        backLogout: {
            data: []
        }
    },
    getters: {
        getBackLogout: (state) => {
            return state.backLogout;
        },
    },
    mutations: {
        SET_BACKLOGOUT: (state, backLogoutInfo) => {
            Vue.set(state, 'backLogout', backLogoutInfo)
        }
    },
    actions: {
        SetBackLogout: (context, backLogoutInfo) => {
            context.commit('SET_BACKLOGOUT', backLogoutInfo);
        },
    },
}
