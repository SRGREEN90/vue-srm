
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import VueCompositionAPI from '@vue/composition-api'
import Vuelidate from '@vuelidate/core'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'







createApp(App)
    .use(store)
    .use(router)
    .use(Vuelidate)
    .mount('#app')




//import dateFilter from './filters/date.filter'
//     .config.globalProperties.$filters = {
//     myDateFilter(value) {
//         return '$' + dateFilter
//     }
// }

