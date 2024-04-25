import Vue from 'vue';

let globalData = new Vue({
    data: {
        $isAdmin: false,
        $globalIp: 'http://192.168.88.93:7070',
    }
});

export default {
    computed: {
        $isAdmin: {
            get: function () {
                return globalData.$data.$isAdmin
            },
            set: function (newIsAdmin) {
                return globalData.$data.$isAdmin = newIsAdmin
            }
        },
        $globalIp: {
            get: function () {
                return globalData.$data.$globalIp;
            },
            set: function (newGlobalIp) {
                globalData.$data.$globalIp = newGlobalIp;
            }
        },
    },
}