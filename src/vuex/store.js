import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//首先申明一个状态
const state = {
  count:0
};

//然后 actions 注册事件处理函数，当这个函数被触发时，将状态提交到mutaions中处理
const actions = {
  increment:({commit}) => commit('increment'),//提交到mutaions中处理
  decrement:({commit}) => commit('decrement')
};

//更新状态
const mutations = {
  increment(state){
    state.count = state.count + 5;
  },
  decrement(state){
    state.count = state.count - 3;
  }
};

//获取状态信息
const getters = {

};

//下面这个相当关键，所有模块注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
