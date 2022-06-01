<template>
  <div class="home">
    <TopBar></TopBar>
    <ListBar v-if="$route.fullPath === '/home'"></ListBar>

    <div v-if="$route.fullPath === '/home'" class="carousel">
      <el-carousel height="610px">
        <el-carousel-item v-for="(image, index) in marketInfo.marketImages.split(',')" :key="index">
          <img :src="`http://localhost:8090/images/${image}`" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <RecommendGoods v-if="$route.fullPath === '/home'"></RecommendGoods>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Footer from "@/components/footer.vue";
import ListBar from "@/components/ListBar.vue";
import RecommendGoods from "@/components/recommendGoods.vue";
import TopBar from "@/components/topBar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { TopBar, ListBar, RecommendGoods, Footer },
})
export default class Home extends Vue {
  async getCarousel(): Promise<void> {
    const res = await this.axios.get("/marketInfo/getMarketInfo");
    const data = res.data.data;
    this.$store.commit("setMarketInfo", data[0]);
  }
  get marketInfo() {
    return this.$store.state.marketInfo;
  }
  async created() {
    await this.getCarousel();
  }
}
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
  }
}
</style>
