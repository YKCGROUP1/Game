import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';
import router from './router';
import ElementUI from 'element-ui'
Vue.use(Vuex);


import 'element-ui/lib/theme-chalk/index.css';
import './style/global.css'
import './style/header.css'
import './style/carddata.css'


Vue.use(ElementUI);
import axios from "./axios";
Vue.prototype.$axios = axios
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.prototype.$eventBus = new Vue(); // 创建事件总线
//require("./mock.js")
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

