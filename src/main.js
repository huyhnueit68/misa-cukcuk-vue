import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index.js'
import VueSwal from 'vue-swal'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VTooltip from 'v-tooltip'
import Autocomplete from 'v-autocomplete'
import 'v-autocomplete/dist/v-autocomplete.css'
import vuetify from './plugins/vuetify'

Vue.use(Autocomplete)

Vue.use(VTooltip)
Vue.use(VueSweetalert2);
Vue.use(VueSwal)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    VueSweetalert2,
    vuetify,
    render: h => h(App)
}).$mount('#app')