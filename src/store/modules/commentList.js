import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        commentList: {
            data: []
        }
    },
    getters: {
        getCommentList: (state) => {
            return state.commentList;
        },
    },
    mutations: {
        SET_COMMENTLIST: (state, commentListInfo) => {
            Vue.set(state, 'commentList', commentListInfo)
        }
    },
    actions: {
        SetCommentList: (context, commentListInfo) => {
            context.commit('SET_COMMENTLIST', commentListInfo);
        },
    },
}
