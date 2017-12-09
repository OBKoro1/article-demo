import Vue from 'vue';
import Vuex from 'vuex';
import status from './modules/status/index';//引进模块
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {  
    //Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action
    dataStatus:status,//访问这里面数据的时候要使用'dataStatus'
  },
});
