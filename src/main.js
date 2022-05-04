import Vue from 'vue';

// GUI
import VueAwesomeSwiper from 'vue-awesome-swiper';

import Logger from '@/utils/logger';

import App from './App.vue';

Vue.use(Logger);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
