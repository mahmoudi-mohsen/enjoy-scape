import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        mobileConfirm: {
            data: []
        }
    },
    getters: {
        getMobileConfirm: (state) => {
            return state.mobileConfirm;
        },
    },
    mutations: {
        SET_MOBILECONFIRM: (state, mobileConfirmInfo) => {
            Vue.set(state, 'mobileConfirm', mobileConfirmInfo)
        }
    },
    actions: {
        SetMobileConfirm: (context, mobileConfirmInfo) => {
            context.commit('SET_MOBILECONFIRM', mobileConfirmInfo);
        },
    },
}
