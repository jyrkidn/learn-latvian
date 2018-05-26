import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueProgressBar from 'vue-progressbar'

import './registerServiceWorker'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/main.scss'

Vue.use(Vuetify, {
  theme: {
    primary: '#9E1B34',
    secondary: '#ffffff',
    accent: '#77353D'
  }
})

Vue.use(VueProgressBar, {
  color: '#ffffff',
  failedColor: 'red',
  height: '2px'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
