/**
 * Author kid
 * Date 2019/4/2
 * Time 下午2:30
 */
const files = require.context('.', false, /\.js$/);
const children = [];

files.keys().forEach((key) => {
  if (key === './index.js') return;
  children.push(...(files(key).default));
});

export default [{
  name: 'home',
  path: '/home',
  component: (resolve) => {
    require.ensure(['../../views/home/index.vue'], () => {
      resolve(require('../../views/home/index.vue'));
    });
  },
  children,
}];
