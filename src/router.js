import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Mahale from './views/Mahale';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {title: 'Enjoy Escape'}
        },
        {
            path: '/mahaleKhabis',
            name: 'Mahale',
            component: Mahale,
            meta: {title: 'محله خبیث'}
        },
    ],
});
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((error) => {
    });
};
const DEFAULT_TITLE = 'Enjoy Escape';
router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/');
    }
    next();
});

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;
