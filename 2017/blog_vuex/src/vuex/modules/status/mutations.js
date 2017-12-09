/**
 * Created by OB、koro1 on 2017/4/10.
 */

import * as types from './mutation_type';//引入变量用作区分

export default {
  //types.VUEX_TEST 代表接受哪个actions的commit 也就是上面引入变量的作用
  [types.VUEX_TEST](state,data){ 
    //第一个参数state是这个模块的state 第二个参数是传进来的数据 
    if(data.status==1){ //根据传进来的参数做各种操作
      //这里就是操作state了，赋值之后，各个组件上面引用该数据的地方会自动更新      
      state.msg=data.text;
    }else if(data.status==2){
        state.msg='奕迅';
    }
    console.log(state.mg,data,'mutation'); 
  }
};
