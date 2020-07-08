import VueRouter from 'vue-router';
import Products from './components/Products';
import Carousel from './components/Carousel';
import Checkout from "./components/Checkout";
import Vue from 'vue';
Vue.use(VueRouter);

const routes = [
  {
      path: "/",
      name: 'Products',
      component: Products,
  },
  {
      path: "/Checkout",
      name: 'Checkout',
      component: Checkout,
  },
  {
    path: "/Carousel",
    name: 'Carousel',
    component: Carousel,
},
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;