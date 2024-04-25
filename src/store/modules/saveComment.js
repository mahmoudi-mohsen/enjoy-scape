import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        saveComment: {
            data: []
        }
    },
    getters: {
        getSaveComment: (state) => {
            return state.saveComment;
        },
    },
    mutations: {
        SET_SAVECOMMENT: (state, saveCommentInfo) => {
            Vue.set(state, 'saveComment', saveCommentInfo)
        }
    },
    actions: {
        SetSaveComment: (context, saveCommentInfo) => {
            context.commit('SET_SAVECOMMENT', saveCommentInfo);
        },
    },
}
