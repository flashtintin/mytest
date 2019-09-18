/**
 * Created by kid on 2017/5/15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import myFetch from 'vue-fetch-plugin';
import app from './views/app.vue';
import router from './router';
import store from './store';

const myError = {
  code: -1,
  message: '服务器内部错误',
};
// 开启错误提示
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(myFetch, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    accept: 'application/json',
  },
  reqInterceptor: request => request,
  resFilter: result => result,
  resError: (res) => {
    console.log(res);
    return myError;
  },
});
Vue.use(Vuex);

new Vue({
  components: { app },
  router,
  store,
  template: '<app/>',
}).$mount('#app');
