
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'







createApp(App).use(store).use(router).mount('#app')



//import dateFilter from './filters/date.filter'
//     .config.globalProperties.$filters = {
//     myDateFilter(value) {
//         return '$' + dateFilter
//     }
// }

