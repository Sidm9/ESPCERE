import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Main';
import About from '../components/About';
import Test from  '../components/Test';
import Parent from  '../components/Parent';

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
        path: '/Parent',
        name: "Parent",
        component: Parent,
    },
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;