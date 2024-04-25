import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        mobileLogin: {
            data: []
        }
    },
    getters: {
        getMobileLogin: (state) => {
            return state.mobileLogin;
        },
    },
    mutations: {
        SET_MOBILELOGIN: (state, mobileLoginInfo) => {
            Vue.set(state, 'mobileLogin', mobileLoginInfo)
        }
    },
    actions: {
        SetMobileLogin: (context, mobileLoginInfo) => {
            context.commit('SET_MOBILELOGIN', mobileLoginInfo);
        },
    },
}
