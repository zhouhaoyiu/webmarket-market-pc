import { orderArr } from "type";


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

// 向购物车中添加商品，如果商品已经存在，则商品数量加1
export const setShoppingCar = function (state: any, list: any): void {
  let flag = true;
  state.shoppingCar.forEach((item: any) => {
    if (item.goodId === list.goodId) {
      item.goodNumber += list.goodNumber;
      flag = false;
    }
  });
  flag && state.shoppingCar.push({ checked: false, ...list });
  // console.log(JSON.stringify(state.shoppingCar, null, 2));
};

export const updateShoppingCar = function (state: any, list: any): void {
  state.shoppingCar = list;
};

export const clearShoppingCar = function (state: any): void {
  state.shoppingCar = [];
};

export const setUserInfo = function (state: any, info: any): void {
  state.userInfo = info;
};

export const setMarketInfo = function (state: any, info: any): void {
  state.marketInfo = info;
};

export const setUserOrder = function (state: any, order: orderArr): void {
  state.userOrder = order;
}
