import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store/index'
import dateFilter from './filters/date.filter'



Vue.filter('date', dateFilter)

createApp(App).use(store).use(router).mount('#app')
