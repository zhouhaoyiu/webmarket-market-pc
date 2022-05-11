<template>
  <div class="product">
    <div class="product-top">
      <div class="product-images">
        <el-carousel class="carousel" height="600px">
          <el-carousel-item
            v-for="(item, index) in (goodInfo.goodImages || '').split(',')"
            :key="index"
          >
            <img :src="`http://localhost:8090/images/${item}`" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="product-info">
        <div class="product-info-title">
          {{ goodInfo.goodName }}
        </div>
        <div class="product-info-yh">
          <div class="product-info-yh-title">商城优势</div>
          <div class="product-info-yh-text">
            <span class="pdp-product-yh-txt">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQUJCQkODg4QEBATExMVFRUeHh46Ojo/Pz9JSUlZWVlaWlpqampra2t3d3d9fX2QkJCRkZGgoKC1tbW3t7fDw8PU1NTY2Njh4eHl5eXn5+f19fX6+vr9/f3+/v7///8rw5LlAAAACnRSTlMAJD1DmZq/1+3yE/35XQAAAJFJREFUGNNtkEcWgzAQQ0UMGP/03nsDfP/7ZWFCyvPfjRYaSZIkmdQ6Z1OjN0lOQ54EpVPQUnQkKflSoEgk5fyQS4Y/jLLPsXnMgEwWGA0AVnU5BawccL9NYFFVSwAnBxz8dTwv6zVBskDv6C9Pvw2ONtj3z97vmidpE2J42nfbEJGosUKR2rFxJJnMOmezMOELZn4MwJNL3HYAAAAASUVORK5CYII="
                class="fw_icon"
              />
              <span> 以旧换新 </span>
            </span>
            <span class="pdp-product-yh-txt">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQUJCQkODg4QEBATExMVFRUeHh46Ojo/Pz9JSUlZWVlaWlpqampra2t3d3d9fX2QkJCRkZGgoKC1tbW3t7fDw8PU1NTY2Njh4eHl5eXn5+f19fX6+vr9/f3+/v7///8rw5LlAAAACnRSTlMAJD1DmZq/1+3yE/35XQAAAJFJREFUGNNtkEcWgzAQQ0UMGP/03nsDfP/7ZWFCyvPfjRYaSZIkmdQ6Z1OjN0lOQ54EpVPQUnQkKflSoEgk5fyQS4Y/jLLPsXnMgEwWGA0AVnU5BawccL9NYFFVSwAnBxz8dTwv6zVBskDv6C9Pvw2ONtj3z97vmidpE2J42nfbEJGosUKR2rFxJJnMOmezMOELZn4MwJNL3HYAAAAASUVORK5CYII="
                class="fw_icon"
              />
              <span>管家服务</span></span
            ><span class="pdp-product-yh-txt"
              ><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQUJCQkODg4QEBATExMVFRUeHh46Ojo/Pz9JSUlZWVlaWlpqampra2t3d3d9fX2QkJCRkZGgoKC1tbW3t7fDw8PU1NTY2Njh4eHl5eXn5+f19fX6+vr9/f3+/v7///8rw5LlAAAACnRSTlMAJD1DmZq/1+3yE/35XQAAAJFJREFUGNNtkEcWgzAQQ0UMGP/03nsDfP/7ZWFCyvPfjRYaSZIkmdQ6Z1OjN0lOQ54EpVPQUnQkKflSoEgk5fyQS4Y/jLLPsXnMgEwWGA0AVnU5BawccL9NYFFVSwAnBxz8dTwv6zVBskDv6C9Pvw2ONtj3z97vmidpE2J42nfbEJGosUKR2rFxJJnMOmezMOELZn4MwJNL3HYAAAAASUVORK5CYII="
                class="fw_icon"
              />
              <span>7天无理由退货</span></span
            ><span class="pdp-product-yh-txt"
              ><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQUJCQkODg4QEBATExMVFRUeHh46Ojo/Pz9JSUlZWVlaWlpqampra2t3d3d9fX2QkJCRkZGgoKC1tbW3t7fDw8PU1NTY2Njh4eHl5eXn5+f19fX6+vr9/f3+/v7///8rw5LlAAAACnRSTlMAJD1DmZq/1+3yE/35XQAAAJFJREFUGNNtkEcWgzAQQ0UMGP/03nsDfP/7ZWFCyvPfjRYaSZIkmdQ6Z1OjN0lOQ54EpVPQUnQkKflSoEgk5fyQS4Y/jLLPsXnMgEwWGA0AVnU5BawccL9NYFFVSwAnBxz8dTwv6zVBskDv6C9Pvw2ONtj3z97vmidpE2J42nfbEJGosUKR2rFxJJnMOmezMOELZn4MwJNL3HYAAAAASUVORK5CYII="
                class="fw_icon"
              />
              <span>官方正品</span></span
            ><span class="pdp-product-yh-txt"
              ><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQUJCQkODg4QEBATExMVFRUeHh46Ojo/Pz9JSUlZWVlaWlpqampra2t3d3d9fX2QkJCRkZGgoKC1tbW3t7fDw8PU1NTY2Njh4eHl5eXn5+f19fX6+vr9/f3+/v7///8rw5LlAAAACnRSTlMAJD1DmZq/1+3yE/35XQAAAJFJREFUGNNtkEcWgzAQQ0UMGP/03nsDfP/7ZWFCyvPfjRYaSZIkmdQ6Z1OjN0lOQ54EpVPQUnQkKflSoEgk5fyQS4Y/jLLPsXnMgEwWGA0AVnU5BawccL9NYFFVSwAnBxz8dTwv6zVBskDv6C9Pvw2ONtj3z97vmidpE2J42nfbEJGosUKR2rFxJJnMOmezMOELZn4MwJNL3HYAAAAASUVORK5CYII="
                class="fw_icon"
              />
              <span>免费包邮</span></span
            >
          </div>
        </div>
        <div class="product-info-price">￥{{ goodInfo.goodPrice }}</div>
        <div class="product-info-order-number">
          <div class="product-info-order-number-title">数量</div>
          <div>
            <el-input-number v-model="orderNumber"></el-input-number>
          </div>
        </div>
        <div class="product-info-order-address">
          <div class="product-info-order-address-title">配送至</div>
          <div class="address">{{ $store.state.userInfo.address }}</div>
        </div>
        <div class="product-info-buy">
          <button
            class="product-info-buy-btn"
            style="background: #2189ff90"
            @click="addCart"
          >
            加入购物车
          </button>
          <button
            class="product-info-buy-btn"
            style="background: #2189ff"
            @click="() => (payDialogVisible = true)"
          >
            立即购买
          </button>
        </div>
      </div>
    </div>
    <div class="product-bottom">
      <div
        class="product-bottom-pic-desc"
        v-if="(goodInfo.goodDescribeImages || []).length"
      >
        <div
          v-for="(imageDesc, index) in (goodInfo.goodDescribeImages ||'').split(',')"
          :key="index"
        >
          <img :src="`http://localhost:8090/images/${imageDesc}`" alt="" />
        </div>
      </div>
      <div class="product-bottom-pic-null" v-else>
        <span>暂无图片</span>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="payDialogVisible"
      width="30%"
      :before-close="
        () => {
          payDialogVisible = false;
        }
      "
    >
      <div
        style="display: flex; justify-content: center; flex-direction: column"
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
      </div>
    </el-dialog>
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
  public payDialogVisible = false;

  public orderNumber = 1;

  public created() {
    if (!localStorage.getItem("useruuid")) {
      this.$router.push("/login");
    }
    this.gid = Number(this.$route.query.goodId) ?? -1;
    this.goodInfo = this.$store.getters.getGoodsList.find((item: any) => {
      return item.goodId === this.gid;
    });
  }

  public addCart(): void {
    this.$store.commit("setShoppingCar", {
      goodId: this.gid,
      goodName: this.goodInfo.goodName,
      goodPrice: this.goodInfo.goodPrice,
      goodNumber: this.orderNumber,
    });
    this.$message.success("已经加入购物车");
  }

  public async pay(): Promise<void> {
    const res = await this.axios.post("/order/createOrder", {
      goods: JSON.stringify([
        {
          goodId: this.gid,
          goodName: this.goodInfo.goodName,
          goodPrice: this.goodInfo.goodPrice,
          goodNumber: this.orderNumber,
        },
      ]),
      orderdate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      orderStatus: 0,
      useruuid: this.$store.state.userInfo.useruuid,
      username: this.$store.state.userInfo.username,
      orderaddress: this.$store.state.userInfo.address,
    });

    if (res.data.code === 1) {
      this.$message.success("购买成功");
    } else if (res.data.code === 0) {
      this.$message.error("购买失败");
    }
    this.payDialogVisible = false;
  }

  public async mounted() {
    const logtime = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const res = await this.axios.post("/userLog/addUserLog", {
      useruuid: this.$store.state.userInfo.useruuid,
      logtime,
      type: "查看商品",
      gid: this.gid,
    });
  }
}
</script>

<style lang="scss" scoped>
.product {
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
      height: 70%;
      margin: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      font-size: 24px;
      background: #fff;

      .product-info-title {
        font-size: 36px;
        font-weight: 700;
      }

      .product-info-yh {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
        font-size: 18px;
        font-weight: 700;
        color: #666;
        .product-info-yh-title {
          width: 80px;
        }

        .product-info-yh-text {
          display: flex;
          flex-wrap: wrap;
          margin-left: 20px;
          .pdp-product-yh-txt {
            img {
              margin: 0px 5px;
            }
            margin-left: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 18px;
            line-height: 24px;
            color: #2189ff;
          }
        }
      }

      .product-info-price {
        padding-top: 10px;
        padding-right: 15px;
        text-align: right;
        font-size: 28px;
        font-weight: 700;
        color: #2189ff;
      }

      .product-info-order-number {
        display: flex;
        align-items: center;
        padding-top: 30px;
        padding-right: 15px;

        .product-info-order-number-title {
          width: 120px;
        }
      }

      .product-info-order-address {
        display: flex;
        align-items: center;
        padding-top: 40px;

        .product-info-order-address-title {
          width: 120px;
        }

        .address {
          font-size: 16px;
          line-height: 18px;
          color: rgb(51, 51, 51);
          border: 1px solid #2189ff;
          border-radius: 10px;
          padding: 10px 20px;
        }
      }
      .product-info-buy {
        display: flex;
        align-items: center;
        padding-top: 80px;
        .product-info-buy-btn {
          margin-right: 20px;
          width: 120px;
          height: 40px;

          color: #fff;
          border: none;
          border-radius: 20px;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }

  .product-bottom {
    width: 100%;
    height: auto;
    min-height: calc(100% - 630px);
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .product-bottom-pic-desc {
      font-size: 0;
    }
    .product-bottom-pic-null {
      font-size: 32px;
      color: #666;
    }
  }
}
</style>
