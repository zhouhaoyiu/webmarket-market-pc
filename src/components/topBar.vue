<template>
  <div class="top-bar">
    <div class="marketName" v-if="marketInfo">
      欢迎来到{{ marketInfo.marketName || "网上商城" }}
    </div>
    <div v-if="!userName" class="login" @click="login()">登录/注册</div>
    <div v-else class="userInfo">
      <div class="userName-text">欢迎您 {{ userName }}</div>
      <div class="userName-logout">
        <el-button type="text" @click="logout()">登出</el-button>
      </div>
    </div>
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
  public marketInfo: MarketInfo = {
    marketName: "",
    marketRecommend: "",
    marketMeta: "",
  };
  public goodsClassification = null;
  public _ = window._;
  async getMarketInfo(): Promise<void> {
    const res = await this.axios.get("/marketInfo/getMarketInfo");
    (this.marketInfo as unknown) = this._.cloneDeep(
      res.data.data[0]
    ) as MarketInfo;
    this.marketInfo &&
      localStorage.setItem("marketName", (this.marketInfo as any).marketName);
  }
  async mounted(): Promise<void> {
    await this.getMarketInfo();
  }

  get markName(): string {
    return this.marketInfo.marketName || "网上商城";
  }

  get userName(): string | undefined {
    return localStorage.getItem("username") || undefined;
  }

  login(): void {
    this.$router.push("/login");
  }

  logout(): void {
    localStorage.removeItem("username");
    this.$router.go(0);
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
    cursor: pointer;
  }
  .userInfo {
    width: 400px;
    height: 50px;
    font-size: 13px;
    font-weight: 700;
    color: #000;
    margin-left: auto;
    margin-right: 0px;
    display: flex;
    flex-direction: row;
    .userName-text {
      margin-left: 10px;
      font-size: 14px;
      color: #999;
    }
    .userName-logout {
      margin-left: 30px;
      font-size: 16px;
      color: #000;
    }
  }
}
</style>
