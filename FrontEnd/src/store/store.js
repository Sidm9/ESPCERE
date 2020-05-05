import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    product: []
  },
  mutations: {
    increment(state) {
      state.count++
    },
    updateProducts(state, product) {
      state.product = product
    }
  },
  actions: {
    loadData({ commit }) {
      this.$http
        .get("http://localhost:3000/product")
        .then((response) => { commit('updateProducts', response.data) });
      console.log(this.data);
    },
  }
})
