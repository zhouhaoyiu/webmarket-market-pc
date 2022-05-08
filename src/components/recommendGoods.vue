<template>
  <div class="recommend">
    <div class="recommend-title">推荐商品 {{ recommendName }}</div>
    <div style="display: flex; justify-content: space-between">
      <div
        @mousedown="preventDefault()"
        @click="goGoodDetail(good.goodId)"
        style="cursor: pointer; user-select: none"
        v-for="good in recommendGoods.slice(0, 8)"
        :key="good.goodId"
      >
        <el-tooltip
          class="item"
          effect="dark"
          :content="good.goodName"
          placement="top"
        >
          <img
            style="width: 100px; height: 100px"
            :src="`http://localhost:8090/images/${
              good.goodImages.split(',')[0]
            }`"
            alt="goods image"
          />
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
enum goodRecommend {
  sellVolume = "销量",
  visitVolume = "访问量",
  shelfTime = "上架时间(新->旧)",
}
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {},
})
export default class RecommendGoods extends Vue {
  public get recommendName(): string {
    switch (this.recommend) {
      case "sellVolume":
        return "热销";
      case "visitVolume":
        return "热访";
      case "shelfTime":
        return "新品";
      default:
        return "";
    }
  }

  public get recommend(): string {
    return this.$store.state.marketInfo.marketRecommend;
  }

  public get recommendGoods(): any[] {
    switch (this.recommend) {
      case "sellVolume":
        return this.$store.state.goodsList.sort(
          (a: { goodSellCount: number }, b: { goodSellCount: number }) =>
            b.goodSellCount - a.goodSellCount
        );
      case "visitVolume":
        return this.$store.state.goodsList.sort(
          (a: { goodVisitCount: number }, b: { goodVisitCount: number }) =>
            b.goodVisitCount - a.goodVisitCount
        );
      case "shelfTime":
        return this.$store.state.goodsList.sort(
          (a: { goodId: number }, b: { goodId: number }) => b.goodId - a.goodId
        );
      default:
        return this.$store.state.goodsList;
    }
  }

  public preventDefault(): void {
    event!.preventDefault();
  }

  public goGoodDetail(id: number): void {
    this.$nextTick(() => {
      this.$router.push({
        path: "/home/detail",
        query: {
          goodId: "" + id,
        },
      });
    });
  }

  public mounted(): void {
    console.log(
      "%c welcome to market ",
      "color:white;font-size:30px;background:linear-gradient(315deg, rgb(66, 211, 146) 25%, rgb(100, 126, 255))"
    );
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 1440px;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  .recommend-title {
    margin-top: 12px;
    font-size: 24px;
  }
}
</style>
