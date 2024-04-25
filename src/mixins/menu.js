import Vue from 'vue';

let globalData = new Vue({
    data: {
        $menuState: false,
    }
});

export default {
    computed: {
        $menuState: {
            get: function () {
                return globalData.$data.$menuState
            },
            set: function (newMenuState) {
                return globalData.$data.$menuState = newMenuState
            }
        }
    },
}