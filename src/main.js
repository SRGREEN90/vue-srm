import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import dateFilter from '@/filters/date.filter'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'



// Vue.filter('date', dateFilter)

createApp(App).use(store).use(router).mount('#app')






// Vue.config.productionTip = false vladilen
//
// Vue.filter('date', dateFilter)
//
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
