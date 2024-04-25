import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        person: {
            data: []
        }
    },
    getters: {
        getPerson: (state) => {
            return state.person;
        },
    },
    mutations: {
        SET_PERSON: (state, personInfo) => {
            Vue.set(state, 'person', personInfo)
        }
    },
    actions: {
        SetPerson: (context, personInfo) => {
            context.commit('SET_PERSON', personInfo);
        },
    },
}
