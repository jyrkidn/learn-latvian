import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'

import './registerServiceWorker'

import './assets/styles/main.scss'

Vue.mixin({
  methods: {
    shuffle (items) {
      for (var j, x, i = items.length; i; j = parseInt(Math.random() * i), x = items[--i], items[i] = items[j], items[j] = x);

      return items
    }
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
