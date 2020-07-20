import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Notifications from 'vue-notification'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(Loading)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
