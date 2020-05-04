import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import storePlugin from './store/storeplugin'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(storePlugin)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
