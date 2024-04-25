import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';
import menu from './mixins/menu'
import Toasted from 'vue-toasted';
import toggleSidebar from '@/mixins/toggleSidebar';
import isAdmin from '@/mixins/isAdmin';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import clickOutside from '@/directives/click-ouside';
import Pagination from 'vue-pagination-2';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.component('pagination', Pagination);
Vue.component('date-picker', VuePersianDatetimePicker);
Vue.mixin(toggleSidebar);
Vue.mixin(isAdmin);
Vue.mixin(menu);
Vue.use(Toasted);
Vue.directive('click-outside', clickOutside);

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    created() {
        axios.interceptors.response.use(function (response) {
            return response
        }, function (error) {
            console.log(error.response.status);
            if (error.response.status === 401) {
                store.dispatch('logout');
                router.push('/')
            }
            return Promise.reject(error)
        })
    },
    render: function (h) {
        return h(App)
    }
}).$mount('#app');
