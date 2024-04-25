import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        personByUserId: {
            data: []
        }
    },
    getters: {
        getPersonByUserId: (state) => {
            return state.personByUserId;
        },
    },
    mutations: {
        SET_PERSONBYUSERID: (state, personByUserIdInfo) => {
            Vue.set(state, 'personByUserId', personByUserIdInfo)
        }
    },
    actions: {
        SetPersonByUserId: (context, personByUserIdInfo) => {
            context.commit('SET_PERSONBYUSERID', personByUserIdInfo);
        },
    },
}
