export type shoppingCarArr = Array<{
  goodId: number;
  goodName: string;
  goodPrice: number;
  goodNumber: number;
  checked: boolean;
}>;

export type orderArr = Array<{
  orderid: number;
  orderuuid: string;
  orderdate: string;
  orderaddress: string;
  goods: string;
  orderStatus: number;
  useruuid: string;
  username: string;
  refuseReason?: string;
  remarks?: string;
}>;
