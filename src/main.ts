import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// import axios from 'axios'
import ActionHelper from "@/store/ActionHelper";

Vue.config.productionTip = false;
// Vue.prototype.axios = axios;
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
