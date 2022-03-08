<template>
  <div class="top-bar">
    <div class="marketName" v-if="marketInfo">
      欢迎来到{{ marketInfo.marketName || "网上商城" }}
    </div>
    <div class="login" @click="login()">登录/注册</div>
  </div>
</template>

<script lang="ts">
import { LoDashStatic } from "lodash";
import { Component, Vue } from "vue-property-decorator";
type MarketInfo = {
  marketName: string;
  marketRecommend: string;
  marketMeta: string;
};
@Component({
  components: {},
})
export default class TopBar extends Vue {
  private marketInfo = null;
  private goodsClassification = null;
  private _: LoDashStatic = window._;
  async getMarketInfo(): Promise<void> {
    const res = await this.axios.get("/marketInfo/getMarketInfo");
    (this.marketInfo as unknown) = this._.cloneDeep(
      res.data.data[0]
    ) as MarketInfo;
    this.marketInfo &&
      localStorage.setItem("marketName", (this.marketInfo as any).marketName);
  }
  async getGoodsClassification(): Promise<void> {
    const res = await this.axios.get(
      "/goodsClassification/getAllClassfication"
    );
    this.getGoodsClassification = this._.cloneDeep(res.data.data);
    this.$store.dispatch("setGoodsClassification", this.getGoodsClassification);
  }
  async mounted(): Promise<void> {
    await this.getMarketInfo();
    await this.getGoodsClassification();
  }

  login(): void {
    this.$router.push("/login");
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  max-width: 1440px;
  width: 1440px;
  background: #f7f7f7;
  display: flex;
  margin: 0 auto;
  // box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.2);
  .marketName {
    // color: white;
    margin-left: 150px;
    font-size: 20px;
  }
  .login {
    width: 59px;
    height: 50px;
    font-size: 13px;
    font-weight: 700;
    color: #000;
    margin-left: auto;
    margin-right: 200px;
    // line-height: 18px;
    cursor: pointer;
  }
}
</style>
