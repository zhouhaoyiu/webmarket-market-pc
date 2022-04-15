<template>
  <div class="shopping-list">
    <div class="shopping-list-title">
      {{ goodClassificationName }}
    </div>
    <div class="shopping-list-orderby">
      <span class="title">排序</span>
      <div class="selections">
        <div
          class="selection"
          v-for="[k, v] of Object.entries(orderByObj)"
          :key="k"
          :style="{ borderColor: orderBy === k ? '#459cff' : '', color: orderBy === k ? '#459cff' : '' }"
          @click="setOrderBy(k)"
        >
          {{ v }}
        </div>
      </div>
    </div>
    <div class="shopping-list-goods-list">
      <div
        class="shopping-list-good"
        v-for="good in GoodsList"
        :key="good.goodId"
      >
        <div class="shopping-list-good-tags">
          <el-tag effect="dark">新品</el-tag>
          <el-tag effect="dark">免息</el-tag>
          <el-tag effect="dark">买赠</el-tag>
          <el-tag effect="dark">以旧换新</el-tag>
        </div>
        <img
          :src="`http://localhost:8090/images/${good.goodImages.split(',')[0]}`"
          class="shopping-list-good-img"
          alt=""
        />
        <div class="shopping-list-good-info">
          <div class="good-name">
            {{ good.goodName }}
          </div>
          <div class="good-price">￥ {{ good.goodPrice }}</div>
          <div class="good-count">剩余 {{ good.goodCount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import dayjs from "dayjs";
@Component({
  components: {},
})
export default class List extends Vue {
  public gid = -1;
  public orderByObj = {
    default: "默认",
    hot: "销量",
    priceHigh: "价格从高到低",
    priceLow: "价格从低到高",
  };
  public orderBy = "default";

  created() {
    if (!localStorage.getItem("useruuid")) {
      this.$router.push("/login");
    }
    this.gid = Number(this.$route.query.classificationId) ?? -1;
  }

  get GoodsList() {
    return this.$store.state.goodsList.filter(
      (good: { goodClassification: number }) =>
        good.goodClassification === this.gid
    );
  }

  get goodClassificationName() {
    return this.$store.state.goodsClassificationList.filter(
      (classification: { classificationId: number }) =>
        classification.classificationId === this.gid
    )[0].classificationName;
  }

  public setOrderBy(orderBy: string): void {
    this.orderBy = orderBy;
  }

  async mounted() {
    // console.log(this.$route);
    const logDate = dayjs().format("YYYY-MM-DD");
  }
}
</script>

<style lang="scss" scoped>
.shopping-list {
  width: 1440px;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  .shopping-list-title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    text-align: left;
    color: #333;
  }

  .shopping-list-orderby{
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title{
      font-size: 16px;
      color: #333;
    }
    .selections{
      display: flex;
      margin-left: 20px;
      .selection{
        color: black;
        font-size: 14px;
        border: 1px solid #333;
        padding: 0px 30px;
        height: 32px;
        line-height: 32px;
        border-radius: 16px;
        color: #333;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }

  .shopping-list-goods-list {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 40px 100px;
    .shopping-list-good {
      width: 310px;
      height: 427px;
      margin: 0 20px 20px 0;
      padding: 25px 0 0 16px;
      border-radius: 20px;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      .shopping-list-good-tags {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        .el-tag {
          margin-right: 10px;
        }
      }
      .shopping-list-good-info {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        // justify-content: flex-end;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: #333;
        .good-name {
          width: 100%;
          height: 40px;
          line-height: 40px;
        }
        .good-price {
          width: 100%;
          margin-top: 10%;
          height: 20px;
          font-size: 18px;
          color: #2189ff;
          line-height: 20px;
        }
        .good-count {
          width: 100%;
          margin-top: 5%;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
        }
      }
      .shopping-list-good-img {
        margin-top: 10%;
        width: 200px;
        height: 40%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        object-fit: contain;
      }
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px #459cff;
      }
    }
  }
}
</style>
