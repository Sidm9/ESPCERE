import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Main';
import About from '../components/About';
import Test from  '../components/Test';
import Checkout from  '../components/Checkout';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home,
    },
    {
        path: "/about",
        name: 'about',
        component: About,
    },
    {
        path: '/test',
        name: "test",
        component: Test,
    },
    {
        path: '/Checkout',
        name: "Checkout",
        component: Checkout,
    },
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;