<template>
  <div class="product">
    <div class="product-top">
      <div class="product-images">
        <el-carousel class="carousel" height="600px">
          <el-carousel-item
            v-for="(item, index) in goodInfo.goodImages.split(',')"
            :key="index"
          >
            <img :src="`http://localhost:8090/images/${item}`" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="product-info">
        <div class="product-info-title">
          <h1>{{ goodInfo.goodName }}</h1>
          <h2>{{ goodInfo.goodDesc }}</h2>
        </div>
        <div class="product-info-price">
          <h1>￥{{ goodInfo.goodPrice }}</h1>
        </div>
        <div>
          <div>数量</div>
          <div>
            <el-input-number v-model="orderNumber"></el-input-number>
          </div>
        </div>
        <div>
          <div>配送至</div>
          <div>{{ $store.state.userInfo.address }}</div>
        </div>
        <div class="product-info-buy">
          <el-button type="primary" size="large" @click="addCart">
            加入购物车
          </el-button>
          <el-button type="primary" size="large" @click="buy()">
            立即购买
          </el-button>
        </div>
      </div>
    </div>
    <div class="product-bottom">
      <div v-if="goodInfo.goodDescribeImages.length">
        <div
          v-for="(imageDesc, index) in goodInfo.goodDescribeImages.split(',')"
          :key="index"
        >
          <img :src="`http://localhost:8090/images/${imageDesc}`" alt="" />
        </div>
      </div>
      <div v-else>
        <div>暂无图片</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import Vue from "vue";
import Component from "vue-class-component";

type GoodInfo = {
  goodId?: number;
  goodName?: string;
  goodDesc?: string;
  goodPrice?: number;
  goodImages?: string;
  goodDescribeImages?: string;
};

@Component({
  components: {},
})
export default class Product extends Vue {
  public gid = -1;
  public goodInfo: GoodInfo = {};

  public orderNumber = 1;

  created() {
    if (!localStorage.getItem("useruuid")) {
      this.$router.push("/login");
    }
    this.gid = Number(this.$route.query.goodId) ?? -1;
    this.goodInfo = this.$store.getters.getGoodsList.find((item: any) => {
      return item.goodId === this.gid;
    });
    console.log(this.goodInfo);
  }

  addCart() {
    this.$store.commit("setShoppingCar", {
      goodId: this.gid,
      goodName: this.goodInfo.goodName,
      goodPrice: this.goodInfo.goodPrice,
      goodNumber: this.orderNumber,
    });
  }

  async buy(): Promise<void> {
    const res = await this.axios.post("/order/buy", {
      goodId: this.gid,
      goodName: this.goodInfo.goodName,
      goodPrice: this.goodInfo.goodPrice,
      goodNumber: this.orderNumber,
      address: this.$store.state.userInfo.address,
      userId: this.$store.state.userInfo.userId,
    });
  }

  async mounted() {
    const logDate = dayjs().format("YYYY-MM-DD");
    console.log(this.gid);
    // const res = await this.axios.post("/log/add", {
    //   userId: this.$store.state.userInfo.userId,
    //   logDate,
    //   logType: "查看商品",
    //   logContent: `查看商品${this.goodInfo.goodName}`,
    // });
  }
}
</script>

<style lang="scss" scoped>
.product {
  background: red;
  width: 1440px;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  overflow-x: hidden;
  overflow-y: auto;
  .product-top {
    width: 100%;
    height: 630px;
    background: #fff;
    display: flex;
    flex-direction: row;
    .product-images {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-carousel {
        width: 800px;
        height: 600px;
        .el-carousel__container {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
    .product-info {
      width: 50%;
      height: 100%;
      padding: 15px;
      background: #fff;
    }
  }
}
</style>
