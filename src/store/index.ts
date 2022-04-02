import Vue from "vue";
import Vuex from "vuex";
import createVuexAlong from "vuex-along";
import {
  goodsClassificationList,
  goodsClassificationTree,
  goodsList,
  shoppingCar,
} from "./state";
import {
  getGoodsClassificationList,
  getGoodsClassificationTree,
  getGoodsList,
  getShoppingCar,
} from "./getters";
import {
  setGoodsClassificationList,
  setGoodsClassificationTree,
  setGoodsList,
  setShoppingCar,
} from "./mutations";
import {
  GET_GOODS_CLASSIFICATION_LIST,
  GET_GOODS_CLASSIFICATION_TREE,
  GET_GOODS_LIST,
  GET_SHOPPING_CAR,
} from "./type/getter-type";
import {
  SET_GOODS_CLASSIFICATION_LIST,
  SET_GOODS_CLASSIFICATION_TREE,
  SET_GOODS_LIST,
  SET_SHOPPING_CAR,
} from "./type/mutation-type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsClassificationList: goodsClassificationList,
    goodsClassificationTree: goodsClassificationTree,
    goodsList,
    shoppingCar,
  },
  getters: {
    [GET_GOODS_CLASSIFICATION_LIST]: getGoodsClassificationList,
    [GET_GOODS_CLASSIFICATION_TREE]: getGoodsClassificationTree,
    [GET_GOODS_LIST]: getGoodsList,
    [GET_SHOPPING_CAR]: getShoppingCar,
  },
  mutations: {
    [SET_GOODS_CLASSIFICATION_LIST]: setGoodsClassificationList,
    [SET_GOODS_CLASSIFICATION_TREE]: setGoodsClassificationTree,
    [SET_GOODS_LIST]: setGoodsList,
    [SET_SHOPPING_CAR]: setShoppingCar,
  },
  actions: {},
  plugins: [createVuexAlong()],
});
