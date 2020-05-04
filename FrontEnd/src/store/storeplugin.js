import store from './store'
export default {
  store,
  /* eslint-disable */
  install (Vue, options) {
    Vue.prototype.$store = store
  }
}