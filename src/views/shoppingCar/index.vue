<template>
  <div class="shopping-car-content">
    <div class="shopping-car-boxes">
      <div class="shopping-car-title">
        <div class="shopping-car-title-selectAll">
          <el-checkbox v-model="selectAll">全选</el-checkbox>
        </div>
        <div class="shopping-car-title-goodname">商品名称</div>
        <div class="shopping-car-title-goodpricce">单价</div>
        <div class="shopping-car-title-goodnumber">数量</div>
        <div class="shopping-car-title-goodcalprice">当前总价</div>
        <div class="shopping-car-title-good-btns">操作</div>
      </div>
      <div
        class="shopping-car-box"
        :style="{
          borderColor: good.checked ? '#f00' : '#ccc',
          boxShadow: good.checked ? '0 0 1px #f00' : 'none',
          background: good.checked ? '#fff9f6' : '',
        }"
        v-for="good in currentShoppingCar"
        :key="good.goodId"
      >
        <div class="shopping-car-good-checkbox">
          <el-checkbox v-model="good.checked"></el-checkbox>
        </div>
        <div class="shopping-car-good-goodname">{{ good.goodName }}</div>
        <div class="shopping-car-good-goodprice">{{ good.goodPrice }}</div>
        <div class="shopping-car-good-goodnumber">{{ good.goodNumber }}</div>
        <div class="shopping-car-good-goodcalcprice">
          {{ good.goodPrice * good.goodNumber }}
        </div>
        <div class="shopping-car-good-btns">
          <el-button
            type="text"
            icon="el-icon-minus"
            @click="setGoodNumber(good, 'minus')"
          ></el-button>
          <el-button
            type="text"
            icon="el-icon-plus"
            @click="setGoodNumber(good, 'plus')"
          ></el-button>
          <el-button
            type="text"
            icon="el-icon-delete"
            @click="deleteGood(good)"
          ></el-button>
        </div>
      </div>
      <!-- {{ shoppingCar }} -->
    </div>
    <div class="shopping-car-bottom-btns">
      <div class="shopping-car-bottom-btns-left">
        <div><el-checkbox v-model="selectAll">全选</el-checkbox></div>
        <div>
          <button @click="clearShoppingCar" class="">清空购物车</button>
        </div>
      </div>
      <div class="shopping-car-bottom-btns-right">
        <div>已选商品 {{ selectGoodsNumber }} 件</div>
        <div>合计（不含运费）：{{ selectGoodsPrice }}</div>
        <div>
          <button class="shopping-car-bottom-btns-right-submit">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ShoppingCar extends Vue {
  currentShoppingCar = [];
  get selectAll() {
    console.log(this.currentShoppingCar);
    return (
      this.currentShoppingCar.filter(
        (good: { checked: boolean }) => good.checked
      ).length === this.currentShoppingCar.length
    );
  }
  set selectAll(value: boolean) {
    this.currentShoppingCar.forEach(
      (good: { checked: boolean }) => (good.checked = value)
    );
  }

  public clearShoppingCar() {
    this.currentShoppingCar = [];
  }
  public setGoodNumber(currentGood: any, method: string) {
    const number = method === "plus" ? 1 : -1;
    this.currentShoppingCar.forEach(
      (good: { goodNumber: number; goodId: number }) =>
        good.goodId === currentGood.goodId &&
        good.goodNumber > 0 &&
        (good.goodNumber += number)
    );
  }

  public deleteGood(currentGood: any) {
    this.currentShoppingCar = this.currentShoppingCar.filter(
      (good: { goodId: number }) => good.goodId !== currentGood.goodId
    );
  }

  public created() {
    this.currentShoppingCar = window._.cloneDeep(this.$store.state.shoppingCar);
  }

  @Watch("currentShoppingCar", { deep: true })
  public currentShoppingCarChange(val: any) {
    this.$store.commit("updateShoppingCar", val);
  }

  get selectGoodsNumber() {
    let sum = 0;
    this.currentShoppingCar.forEach(
      (good: { checked: boolean; goodNumber: number }) => {
        if (good.checked) {
          sum += good.goodNumber;
        }
      }
    );
    return sum;
  }
  get selectGoodsPrice() {
    let sum = 0;
    this.currentShoppingCar.forEach(
      (good: { checked: boolean; goodNumber: number; goodPrice: number }) => {
        if (good.checked) {
          sum += good.goodNumber * good.goodPrice;
        }
      }
    );
    return sum;
  }
}
</script>

<style lang="scss" scoped>
.shopping-car-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  .shopping-car-boxes {
    margin: 70px 0 80px 0;
    height: 650px;
    width: 1440px;
    max-width: 1440px;
    // background: fuchsia;
    .shopping-car-title {
      width: 80%;
      height: 50px;
      margin: auto;
      // background: violet;
      display: flex;
      justify-content: space-between;
      text-align: center;
      div {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .shopping-car-title-selectAll {
        width: 10%;
        height: 100%;
      }
      .shopping-car-title-goodname {
        width: 30%;
        height: 100%;
      }
      .shopping-car-title-goodpricce {
        width: 15%;
        height: 100%;
      }
      .shopping-car-title-goodnumber {
        width: 15%;
        height: 100%;
      }
      .shopping-car-title-goodcalprice {
        width: 20%;
        height: 100%;
      }
      .shopping-car-title-good-btns {
        width: 10%;
        height: 100%;
      }
    }
    .shopping-car-box {
      width: 90%;
      padding: 0 5%;
      height: 100px;
      margin: 10px auto 40px auto;
      text-align: center;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 0 5px #ccc;
      background: #f5f5f5;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .shopping-car-good-checkbox {
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .shopping-car-good-goodname {
        width: 30%;
        height: 100%;
        display: flex;
      }
      .shopping-car-good-goodprice {
        width: 15%;
        height: 100%;
        font-weight: bold;
      }
      .shopping-car-good-goodnumber {
        width: 15%;
        height: 100%;
        font-weight: bold;
      }
      .shopping-car-good-goodcalcprice {
        width: 20%;
        height: 100%;
        color: red;
        font-weight: bold;
      }
      .shopping-car-good-btns {
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .shopping-car-bottom-btns {
    width: 1440px;
    max-width: 1440px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: calc(100% - 72px);
    z-index: 20;
    background: #d8d8d8;
    .shopping-car-bottom-btns-left {
      display: flex;
    }
    .shopping-car-bottom-btns-right {
      display: flex;
      .shopping-car-bottom-btns-right-submit {
        width: 74px;
        height: 42px;
        line-height: 42px;
        background: #ff5000;
        color: #fff;
        border: none;
        border-radius: 21px;
        font-size: 16px;
        cursor: pointer;
      }
      .shopping-car-bottom-btns-right-submit:hover {
        background: #f22d00;
      }
    }
  }
}
</style>
