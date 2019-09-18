export default [{
  name: 'login',
  path: '/',
  component: (resolve) => {
    require.ensure(['../views/login.vue'], () => {
      resolve(require('../views/login.vue'));
    });
  },
}];
