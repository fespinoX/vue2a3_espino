//import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).mount('#app')


new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
