import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "guide",
    goodsClassification: [],
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
    },
    setGoodsClassification(state, goodsClassification) {
      state.goodsClassification = goodsClassification;
    },
  },
  actions: {
    setUserName({ commit }, userName) {
      commit("setUserName", userName);
    },
    setGoodsClassification({ commit }, goodsClassification) {
      commit("setGoodsClassification", goodsClassification);
    },
  },
  modules: {},
});
