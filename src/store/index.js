/**
 * Created by kid on 2017/5/31.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  user: {},
  config: {},
};

export default new Vuex.Store({
  state,
  getters,
  mutations
});
