/**
 * Author kid
 * Date 2019/6/3
 * Time 下午2:40
 */
const network = {
  name: 'network',
  path: '/network',
  component: (resolve) => {
    require.ensure(['../../views/home/network/index.vue'], () => {
      resolve(require('../../views/home/network/index.vue'));
    });
  },
};
const networkDetail = {
  name: 'networkDetail',
  path: '/network/networkDetail',
  component: (resolve) => {
    require.ensure(['../../views/home/network/networkDetail.vue'], () => {
      resolve(require('../../views/home/network/networkDetail.vue'));
    });
  },
};

export default [network, networkDetail];
