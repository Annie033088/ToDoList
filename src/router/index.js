import VueRouter from "vue-router";
import AppAbout from '@/views/AppAbout';
import AppHome from '@/views/AppHome';

const routes = [
    {
        path: '/about',
        name: 'AppAbout',
        component: AppAbout
    },
    {
        path: '/',
        name: 'AppHome',
        component: AppHome
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router