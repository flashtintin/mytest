/**
 * Created by kid on 2017/5/17.
 */
import VueRouter from 'vue-router';
import myFetch from 'vue-fetch-plugin';
import Login from './login';
import Error from './error';
import Home from './home';
import store from '../store';

const routes = [
  ...Login,
  ...Error,
  ...Home,
];
const router = new VueRouter({
  mode: 'history',
  routes,
});
router.beforeEach(async (to, from, next) => {
  const { user } = store.getters;
  if (user.account) {
    if (to.path === '/') {
      next('/example/network');
    } else {
      next();
    }
  } else {
    // const result = await myFetch.get('/touch');
    // // 已经登录的情况
    // if (result.code === 0 && result.user.account) {
    //   store.commit('setUser', result.user);
    //   store.commit('setConfig', result.config);
    //   if (to.path === '/home' || to.path === '/') {
    //     const rootPath = '/config/network';
    //     next(rootPath);
    //   } else { // 否则正常访问
    //     next();
    //   }
    // } else {
    //   store.commit('setConfig', result.config);
    //   next();
    // }
    next();
  }
});

export default router;
