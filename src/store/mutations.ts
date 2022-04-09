import { shoppingCar } from './state';
// import { adminInfoType } from "@/types/type";


export const setGoodsClassificationList = function (
  state: any,
  list: any
): void {
  state.goodsClassificationList = list;
};

export const setGoodsClassificationTree = function (
  state: any,
  tree: any
): void {
  state.goodsClassificationTree = tree;
};

export const setGoodsList = function (state: any, list: any): void {
  state.goodsList = list;
};

export const setShoppingCar = function (state: any, list: any): void {
  state.shoppingCar.push(list);
  console.log(state.shoppingCar);
}

export const clearShoppingCar = function (state: any): void {
  state.shoppingCar = [];
}

export const setUserInfo = function (state: any, info: any): void {
  state.userInfo = info;
}