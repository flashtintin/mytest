/**
 * Author kid
 * Date 2019/6/3
 * Time 下午2:40
 */
const network = {
  name: 'network',
  path: '/example/network',
  component: (resolve) => {
    require.ensure(['../../views/home/example/network/index.vue'], () => {
      resolve(require('../../views/home/example/network/index.vue'));
    });
  },
};
const networkDetail = {
  name: 'networkDetail',
  path: '/example/networkDetail',
  component: (resolve) => {
    require.ensure(['../../views/home/example/network/networkDetail.vue'], () => {
      resolve(require('../../views/home/example/network/networkDetail.vue'));
    });
  },
};
const system = {
  name: 'system',
  path: '/example/system',
  component: (resolve) => {
    require.ensure(['../../views/home/example/system/index.vue'], () => {
      resolve(require('../../views/home/example/system/index.vue'));
    });
  },
};

export default [network, networkDetail, system];
