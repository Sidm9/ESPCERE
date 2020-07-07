import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        forSale: [
            { invId: 1, name: 'An Item', image: 'https://picsum.photos/200/200', price: 999 },
            { invId: 2, name: 'Thing', image: 'https://picsum.photos/200/200', price: 1499 },
            { invId: 3, name: 'Doo-dad', image: 'https://picsum.photos/200/200', price: 499 },
            { invId: 4, name: 'Other thing', image: 'https://picsum.photos/200/200', price: 299 },
        ],
        inCart: [],
    },
    getters: {
        forSale: state => state.forSale,
        inCart: state => state.inCart,
    },
    mutations: {
        ADD_TO_CART(state, invId) { state.inCart.push(invId); },
        REMOVE_FROM_CART(state, invId) { state.inCart.pop(invId); },
    },
    actions: {
        addToCart(context, invId) {
            context.commit('ADD_TO_CART', invId);
        },
        CART_REMOVE(context, invId) {
            context.commit('REMOVE_FROM_CART', invId)
        }
    },
});