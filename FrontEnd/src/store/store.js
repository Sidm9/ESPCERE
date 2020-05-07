import Vue from 'vue'
import Vuex, { mapState } from 'vuex'

Vue.use(Vuex, mapState)

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },
      { invId: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
      { invId: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
      { invId: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 },
    ],
    inCart: [],
    cartValue: 0,
  },
  getters: {
    // TODO: Add getters
    forSale: state => state.forSale,
    inCart: state => state.inCart,
    cartValue: state => state.cartValue,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },

    ADD_TO_CART_VALUE(state, Count) { state.cartValue.push(Count); }

  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },

    addtoCartValue(context, Count) {
      this.commit('ADD_TO_CART_VALUE', Count);
    },
  },
});
   // loadData({ commit }) {
    //   this.$http
    //     .get("http://localhost:3000/product")
    //     .then((response) => { commit('updateProducts', response.data) });
    //   console.log(this.data);