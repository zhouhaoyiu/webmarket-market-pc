<template>
  <div class="home">
    <TopBar></TopBar>
    <ListBar></ListBar>
    <div class="carousel">
      <el-carousel height="640px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <RecommendGoods></RecommendGoods>
  </div>
</template>

<script lang="ts">
import ListBar from "@/components/ListBar.vue";
import RecommendGoods from "@/components/recommendGoods.vue";
import TopBar from "@/components/topBar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { TopBar, ListBar, RecommendGoods },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .el-carousel {
      width: 1440px;
    }

    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  // flex-wrap: wrap;
}
</style>
