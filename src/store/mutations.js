/**
 * Created by kid on 2016/12/30.
 */
import * as types from './mutation-types';

export default {
  [types.SET_USER](state, parameter) {
    state.user = parameter;
  },
  [types.SET_CONFIG](state, parameter) {
    state.config = parameter;
  },
};
