import { orderArr } from "type";

export const getGoodsClassificationList = (state: any): any =>
  state.goodsClassificationList;
export const getGoodsClassificationTree = (state: any): any =>
  state.goodsClassificationTree;
export const getGoodsList = (state: any): any => state.goodsList;
export const getShoppingCar = (state: any): any => state.shoppingCar;
export const getUserInfo = (state: any): any => state.userInfo;
export const getMarketInfo = (state: any): any => state.marketInfo;
export const getUserOrder = (state: any): orderArr => state.userOrder;
