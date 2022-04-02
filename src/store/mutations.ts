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
  state.shoppingCar = list;
}