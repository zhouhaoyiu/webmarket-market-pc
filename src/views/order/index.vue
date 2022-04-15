<template>
  <div>order</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class Order extends Vue {
  /**
   * TODO:
   * 我的订单
   */
  // public async created(): Promise<void> {
  //   const myOrder = await this.axios.get("/order/getOrderByUserName", {
  //     params: {
  //       useruuid: this.$store.state.userInfo.useruuid,
  //     },
  //   });
  // }
}
</script>

<style lang="scss" scoped></style>
