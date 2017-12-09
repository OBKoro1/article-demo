
import * as types from './mutation_type';

export default {
  actionFn({commit},data){ //actionFn 是组件通过dispatch触发的函数名
    commit(types.VUEX_TEST,data);
    //types.VUEX_TEST 是要commit到mutation的哪个位置
    //data 是传过来的参数
  }
};

