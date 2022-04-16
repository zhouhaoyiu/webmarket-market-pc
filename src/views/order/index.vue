<template>
  <div class="myorder">
    <div class="myorder-title">我的订单</div>
    <div v-if="userOrder.length === 0">您目前暂无订单</div>
    <div
      v-else
      v-for="order in userOrder"
      :key="order.orderid"
      class="myorder-order"
    >
      {{ JSON.parse(order.goods) }}
      <div v-for="(good, index) in JSON.parse(order.goods)" :key="index">
        {{ good.goodName }}
      </div>
      <div>{{ order.orderaddress }}</div>
      <div>{{ order.orderdate }}</div>
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
  public get userOrder(): orderArr {
    console.log(this.$store.state.userOrder);
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
  max-width: 1440px;
  margin: 0 auto;
  .myorder-title {
    width: 100%;
    height: 65px;
    line-height: 65px;
    text-align: left;
    margin-top: 20px;
    padding: 0 50px;
    font-size: 22px;
    color: #999;
    background: #f5f5f5;
    user-select: none;
  }

  .myorder-order {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    margin-top: 20px;
    padding: 0 20px;
    font-size: 22px;
    color: #999;
    box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.2);
    background: #f7f7f7;
    cursor: pointer;

    &:hover {
      border-color: #f00;
      box-shadow: 0 0 1px #f00;
      background: #fff9f6;
    }
  }
}
</style>
