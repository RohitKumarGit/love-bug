import Vue from 'vue'
import VueRouter from 'vue-router'
import './styles.scss'
import router from './router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueGeolocation from 'vue-browser-geolocation';

Vue.use(VueGeolocation);


// Import Bootstrap an BootstrapVue CSS files (order is important)

import * as VueGoogleMaps from'vue2-google-maps';
Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAV2sha6Y8hlAOAVLcWNG4lwD7lajGonrg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
