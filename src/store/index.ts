import Vue from "vue";
import Vuex from "vuex";
import createVuexAlong from "vuex-along";
import {
  goodsClassificationList,
  goodsClassificationTree,
  goodsList,
  shoppingCar,
  marketInfo,
  userInfo,
  userOrder,
} from "./state";
import {
  getGoodsClassificationList,
  getGoodsClassificationTree,
  getGoodsList,
  getMarketInfo,
  getShoppingCar,
  getUserInfo,
  getUserOrder,
} from "./getters";
import {
  clearShoppingCar,
  setGoodsClassificationList,
  setGoodsClassificationTree,
  setGoodsList,
  setMarketInfo,
  setShoppingCar,
  setUserInfo,
  setUserOrder,
  updateShoppingCar,
} from "./mutations";
import {
  GET_GOODS_CLASSIFICATION_LIST,
  GET_GOODS_CLASSIFICATION_TREE,
  GET_GOODS_LIST,
  GET_MARKET_INFO,
  GET_SHOPPING_CAR,
  GET_USER_INFO,
  GET_USER_ORDER,
} from "./type/getter-type";
import {
  CLEAR_SHOPPING_CAR,
  SET_GOODS_CLASSIFICATION_LIST,
  SET_GOODS_CLASSIFICATION_TREE,
  SET_GOODS_LIST,
  SET_MARKET_INFO,
  SET_SHOPPING_CAR,
  SET_USER_INFO,
  SET_USER_ORDER,
  UPDATE_SHOPPONG_CAR,
} from "./type/mutation-type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsClassificationList: goodsClassificationList,
    goodsClassificationTree: goodsClassificationTree,
    goodsList: goodsList,
    shoppingCar: shoppingCar,
    userInfo: userInfo,
    marketInfo: marketInfo,
    userOrder: userOrder,
  },
  getters: {
    [GET_GOODS_CLASSIFICATION_LIST]: getGoodsClassificationList,
    [GET_GOODS_CLASSIFICATION_TREE]: getGoodsClassificationTree,
    [GET_GOODS_LIST]: getGoodsList,
    [GET_SHOPPING_CAR]: getShoppingCar,
    [GET_USER_INFO]: getUserInfo,
    [GET_MARKET_INFO]: getMarketInfo,
    [GET_USER_ORDER]: getUserOrder,
  },
  mutations: {
    [SET_GOODS_CLASSIFICATION_LIST]: setGoodsClassificationList,
    [SET_GOODS_CLASSIFICATION_TREE]: setGoodsClassificationTree,
    [SET_GOODS_LIST]: setGoodsList,
    [SET_SHOPPING_CAR]: setShoppingCar,
    [UPDATE_SHOPPONG_CAR]: updateShoppingCar,
    [SET_USER_INFO]: setUserInfo,
    [CLEAR_SHOPPING_CAR]: clearShoppingCar,
    [SET_MARKET_INFO]: setMarketInfo,
    [SET_USER_ORDER]: setUserOrder,
  },
  actions: {},
  plugins: [createVuexAlong()],
});
