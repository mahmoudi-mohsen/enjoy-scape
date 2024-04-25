import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import mobileLogin from './modules/mobileLogin'
import mobileConfirm from './modules/mobileConfirm'
import personByUserId from './modules/personByUserId'
import saveUser from './modules/saveUser'
import saveComment from './modules/saveComment'
import user from './modules/user'
import person from './modules/person'
import documentTypes from './modules/documentTypes'
import catalogs from './modules/catalogs'
import savePerson from './modules/savePerson'
import backLogout from './modules/backLogout'
import supportTicketList from './modules/supportTicketList';
import supportTicketCommentList from './modules/supportTicketCommentList';
import supportTicketPriority from './modules/supportTicketPriority';
import unreadMsgCount from './modules/unreadMsgCount';
import saveSupportTicket from './modules/saveSupportTicket';
import saveSupportComment from './modules/saveSupportComment';
import viewSupportTicket from './modules/viewSupportTicket';
import saveAttachment from './modules/saveAttachment';
import attachmentList from './modules/attachmentList';
import reportsList from './modules/reportsList';
import reportExcelDownload from './modules/reportExcelDownload';
import isLocalAdmin from './modules/isLocalAdmin';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        mobileLogin,
        mobileConfirm,
        personByUserId,
        saveUser,
        saveComment,
        user,
        person,
        documentTypes,
        catalogs,
        savePerson,
        backLogout,
        supportTicketList,
        supportTicketCommentList,
        supportTicketPriority,
        unreadMsgCount,
        saveSupportTicket,
        saveSupportComment,
        viewSupportTicket,
        saveAttachment,
        attachmentList,
        reportsList,
        reportExcelDownload,
        isLocalAdmin,
    },
    state: {}
    ,
    mutations: {
        SET_USER_DATA(state, userData) {
            state.token = userData;
            var token = userData.token;
            localStorage.setItem('token', JSON.stringify(token));
            axios.defaults.headers.common['Authorization'] = `Barer ${
                userData.token
            }`
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('token')
        },
    },
    actions: {
        logout({commit}) {
            commit('CLEAR_USER_DATA')
        }
    },
    getters: {
        loggedIn(state) {
            return !!state.token
        }
    },

});
