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
      <div class="shopping-car-null" v-if="currentShoppingCar.length === 0">
        您的购物车为空
      </div>
      <div
        v-else
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
        <div class="check-all">
          <el-checkbox v-model="selectAll">全选</el-checkbox>
        </div>
        <div class="clear-car">
          <el-button type="text" @click="clearShoppingCar" class=""
            >清空购物车</el-button
          >
        </div>
      </div>
      <div class="shopping-car-bottom-btns-right">
        <div>
          <span class="good-select"
            >已选商品 <span class="strong">{{ selectGoodsNumber }}</span> 件
          </span>
          <span class="sum-cost">
            合计（不含运费) :
            <span class="strong">{{ selectGoodsPrice }}</span></span
          >
        </div>
        <div>
          <button
            @click="submitOrder"
            class="shopping-car-bottom-btns-right-submit"
          >
            结算
          </button>
        </div>
      </div>
    </div>
    <el-dialog
      title="支付"
      center
      :visible.sync="payDialogVisible"
      width="30%"
      :before-close="() => (payDialogVisible = false)"
    >
      <div style="display: flex; justify-content: center; align-self: center">
        <img
          src="../../assets/pay.png"
          alt=""
          style="width: 200px; height: 200px"
        />
      </div>
      <div style="display: flex; justify-content: flex-end">
        <el-button
          @click="
            () => {
              payDialogVisible = false;
            }
          "
          >取消</el-button
        >
        <el-button type="primary" @click="pay">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

type shoppingCarArr = Array<{
  goodId: number;
  goodName: string;
  goodPrice: number;
  goodNumber: number;
  checked: boolean;
}>;
@Component({
  components: {},
})
export default class ShoppingCar extends Vue {
  currentShoppingCar: shoppingCarArr = [];
  payDialogVisible: boolean = false;

  get selectAll(): boolean {
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

  public clearShoppingCar(): void {
    this.currentShoppingCar = this.currentShoppingCar.filter(
      (good: { checked: boolean }) => !good.checked
    );
  }

  public setGoodNumber(currentGood: any, method: string): void {
    const number = method === "plus" ? 1 : -1;
    this.currentShoppingCar.forEach(
      (good: { goodNumber: number; goodId: number }) =>
        good.goodId === currentGood.goodId &&
        good.goodNumber > 0 &&
        (good.goodNumber += number)
    );
  }

  public deleteGood(currentGood: any): void {
    this.currentShoppingCar = this.currentShoppingCar.filter(
      (good: { goodId: number }) => good.goodId !== currentGood.goodId
    );
  }

  public created(): void {
    this.currentShoppingCar = window._.cloneDeep(this.$store.state.shoppingCar);
  }

  @Watch("currentShoppingCar", { deep: true })
  public currentShoppingCarChange(val: any): void {
    this.$store.commit("updateShoppingCar", val);
  }

  public submitOrder(): void {
    this.payDialogVisible = true;
  }

  public async pay(): Promise<void> {
    const res = await this.axios.post("/order/createOrder", {
      goods: JSON.stringify(this.currentShoppingCar.filter(
        (good: { checked: boolean }) => good.checked
      )),
      orderdate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      orderStatus: 0,
      useruuid: this.$store.state.userInfo.useruuid,
      username: this.$store.state.userInfo.username,
      orderaddress: this.$store.state.userInfo.address,
    });
    if (res.data.code === 1) {
      this.$message.success("支付成功");
      this.payDialogVisible = false;
      this.clearShoppingCar();
    } else if (res.data.code === 0) {
      this.$message.error("支付失败");
    }
  }

  get selectGoodsNumber(): number {
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

  get selectGoodsPrice(): number {
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
  width: 1440px;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  background: #f7f7f7;
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
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
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

    .shopping-car-null {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #999;
    }
    .shopping-car-box {
      width: 90%;
      padding: 0 5%;
      height: 100px;
      margin: 20px auto 40px auto;
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
    background: #fff;
    border-top: 1px solid #e6e6e6;
    justify-content: space-between;
    position: fixed;
    top: calc(100% - 72px);
    z-index: 20;

    .shopping-car-bottom-btns-left {
      width: 20%;
      display: flex;
      // justify-content: sb;
      align-items: center;
      .clear-car {
        margin-left: 20px;
        line-height: 72px;
      }
    }
    .shopping-car-bottom-btns-right {
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 72px;
      .good-select,
      .sum-cost {
        font-size: 14px;
      }
      .sum-cost {
        margin-left: 20px;
      }
      .strong {
        margin: 0 5px;
        line-height: 72px;
        font-weight: bold;
        font-size: 20px;
        color: #ff6700;
      }
      .shopping-car-bottom-btns-right-submit {
        margin-right: 20px;
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
