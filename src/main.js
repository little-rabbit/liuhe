// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from './router'
// import mint from 'mint-ui'
import axios from 'axios'
import jsonp from 'vue-jsonp'
import 'mint-ui/lib/style.css'
import './assets/css/neat-min.css'
import './assets/css/styles.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.use(jsonp);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$http=axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
