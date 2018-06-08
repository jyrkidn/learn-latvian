import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'
import shuffle from './utils/shuffle'

import './registerServiceWorker'

import './assets/styles/main.scss'

Vue.mixin({
  methods: {
    shuffle
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
