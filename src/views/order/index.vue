<template>
  <div class="myorder">
    <div class="myorder-title">我的订单</div>
    <div v-if="userOrder.length === 0">您目前暂无订单</div>
    <div v-else v-for="order in userOrder" :key="order.orderid" class="myorder-order" :style="{
      backgroundColor: orderStatusColor[order.orderStatus],
    }">
      <!-- {{ JSON.parse(order.goods) }} -->
      <div class="goods">
        <div class="good" v-for="(good, index) in JSON.parse(order.goods)" :key="index">
          {{ good.goodName }} * {{ good.goodNumber }}
        </div>
      </div>
      <div class="orderaddress">{{ order.orderaddress }}</div>
      <div class="orderdate">{{ order.orderdate }}</div>
      <div class="orderstatus">
        {{
            order.orderStatus === 0
              ? "待处理"
              : order.orderStatus === 1
                ? "已被拒绝"
                : "已发货"
        }}
      </div>
      <div class="orderstatus">
        <div v-if="order.orderStatus === 1">
          <div><b>拒绝原因</b></div>
          <div>
            {{ order.refuseReason }}
          </div>
        </div>
        <div v-else-if="order.orderStatus === 2">
          <div><b>备注</b></div>
          <div>{{ order.remarks }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { orderArr } from "type";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class Order extends Vue {
  orderStatusColor: { [key: number]: string } = {
    0: "#f5f5f5",
    1: "#ff333320",
    2: "#99ff3350",
  };

  public get userOrder(): orderArr {
    return this.$store.state.userOrder;
  }

  public async created(): Promise<void> {
    const myOrder = await this.axios.get("/order/getOrderByUserName", {
      params: {
        useruuid: this.$store.state.userInfo.useruuid,
      },
    });
    if (myOrder.data.code === 1) {
      this.$message.success(myOrder.data.msg);
      this.$store.commit("setUserOrder", myOrder.data.data);
      return;
    } else if (myOrder.data.code === 0) {
      this.$message.error(myOrder.data.msg);
      return;
    }
    this.$message.error("网络错误");
  }
}
</script>

<style lang="scss" scoped>
.myorder {

  width: 1440px;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  overflow: auto;

  .myorder-title {
    width: 95%;
    height: 65px;
    line-height: 65px;
    text-align: left;
    margin: auto;
    margin-top: 20px;
    padding: 0 50px;
    font-size: 22px;
    font-weight: bold;
    color: rgb(122, 122, 122);
    background: #f5f5f5;
    user-select: none;
  }

  .myorder-order {
    width: 95%;
    height: 100px;
    border-radius: 5px;
    margin: auto;
    margin-top: 20px;
    padding: 0 20px;
    font-size: 22px;
    color: #999;
    box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.2);
    background: #f7f7f7;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .goods {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .good {
        width: 100%;
        font-size: 16px;
        text-align: center;
        color: #333;
      }
    }

    .orderaddress {
      width: 10%;
      height: 100%;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #333;
    }

    .orderdate {
      width: 10%;
      height: 100%;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #333;
    }

    .orderstatus {
      width: 10%;
      height: 100%;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #333;
    }

    &:hover {
      border: 1px solid #f00;
      box-shadow: 0 0 1px #f00;
      background: #fff9f6;
      transform: scale(1.02);
    }
  }
}
</style>
