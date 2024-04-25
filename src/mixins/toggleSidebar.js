import Vue from 'vue';
let globalData = new Vue({
    data: { $sidebarModel: true }
});
export default {
    computed: {
        $sidebarModel: {
            get: function () { return globalData.$data.$sidebarModel },
            set: function (newSidebarModel) { globalData.$data.$sidebarModel = newSidebarModel; }
        }
    },
    methods: {
        toggleSidebar:async function() {
            this.$sidebarModel ? this.$sidebarModel = false : this.$sidebarModel = true;
            this.$nextTick(function () {
                console.log(this.$sidebarModel) // => 'updated'
            })
        },
    },
};
