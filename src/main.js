import Vuelidate from '@vuelidate/core'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import dateFilter from '@/filters/date.filter'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'



createApp(App)
    .filter('date', dateFilter)
    .use(store)
    .use(router)
    .use(Vuelidate)
    .use(messagePlugin)
    .mount('#app')


