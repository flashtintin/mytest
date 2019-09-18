/**
 * Author kid
 * Date 2019/6/3
 * Time 下午2:40
 */
const system = {
  name: 'system',
  path: '/system',
  component: (resolve) => {
    require.ensure(['../../views/home/system/index.vue'], () => {
      resolve(require('../../views/home/system/index.vue'));
    });
  },
};

export default [system];
