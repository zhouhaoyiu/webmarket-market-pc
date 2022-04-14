<template>
  <div class="top-bar">
    <div class="marketName" v-if="marketInfo" @click="$router.push('/home')">
      欢迎来到{{ marketInfo.marketName || "网上商城" }}
    </div>
    <div
      v-if="$route.fullPath !== '/home'"
      @click="$router.push('/home')"
      class="gohome"
    >
      回到首页
    </div>
    <div v-if="!userName" class="login" @click="login()">登录/注册</div>
    <div v-else class="userInfo">
      <div class="user-order">我的订单</div>
      <div class="userName-text" @click="openInfoDialog()">
        欢迎您 {{ userName }}
      </div>
      <div class="user-shoppingCar" @click="goShoppingCar()">
        <i class="fas fa-shopping-cart"></i>
        <div class="shoppingCar-text">购物车</div>
      </div>
      <div class="userName-logout">
        <el-button type="text" @click="logout()">登出</el-button>
      </div>
    </div>
    <el-dialog
      title="个人信息"
      :visible.sync="userInfoDialogVisible"
      width="30%"
      center
      class="userInfo-dialog"
    >
      <div>
        <!-- <div
          v-for="[key, value] of Object.entries($store.state.userInfo)"
          :key="key"
          style="display: flex"
        >
          <div style="font-size: 20px">{{ key }}</div>
          <div>{{ value }}</div>
        </div> -->
        <div class="userInfo-dialog-line">
          <div class="userInfo-dialog-line-left">用户名</div>
          <div class="userInfo-dialog-line-right">{{ userInfo.username }}</div>
        </div>
        <div class="userInfo-dialog-line">
          <div class="userInfo-dialog-line-left">性别</div>
          <div class="userInfo-dialog-line-right">
            {{ userInfo.username ? "男" : "女" }}
          </div>
        </div>
        <div class="userInfo-dialog-line">
          <div class="userInfo-dialog-line-left">电话号码</div>
          <div class="userInfo-dialog-line-right">
            <div v-if="!userInfoEditStatus">
              {{ userInfo.phonenumber }}
            </div>
            <el-input v-else v-model="setUserInfoData.phonenumber"></el-input>
          </div>
        </div>
        <div class="userInfo-dialog-line">
          <div class="userInfo-dialog-line-left">地址</div>
          <div class="userInfo-dialog-line-right">
            <div v-if="!userInfoEditStatus">{{ userInfo.address }}</div>
            <el-input v-else v-model="setUserInfoData.address"></el-input>
          </div>
        </div>
      </div>
      <div class="userInfo-dialog-btns">
        <el-button
          class="userInfo-dialog-btn"
          type="primary"
          @click="userInfoEditStatus = true"
          v-if="!userInfoEditStatus"
        >
          编辑信息
        </el-button>
        <div class="userInfo-dialog-btn" v-else>
          <el-button @click="userInfoEditStatus = false"> 取消 </el-button>
          <el-button type="primary" @click="userInfoEditStatus = false">
            保存
          </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
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

  public setUserInfoData = {
    phonenumber: "",
    address: "",
  };

  public goodsClassification = null;
  public _ = window._;
  public userInfoDialogVisible = false;
  public userInfoEditStatus = false;

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
    this.setUserInfoData.phonenumber = this.userInfo.phonenumber;
    this.setUserInfoData.address = this.userInfo.address;
  }

  goShoppingCar(): void {
    this.$router.push({
      path: "/home/shoppingCar",
    });
  }
  openInfoDialog() {
    this.userInfoDialogVisible = true;
  }

  get markName(): string {
    return this.marketInfo.marketName || "网上商城";
  }

  get userName(): string | undefined {
    return localStorage.getItem("username") || undefined;
  }

  get shoppingCarNum(): number {
    return this.$store.getters.getShoppingCar.length || 0;
  }

  get userInfo(): Record<string, string> {
    return this.$store.state.userInfo;
  }

  login(): void {
    this.$router.push("/login");
    this.$store.dispatch("setShoppingCar", []);
  }

  logout(): void {
    localStorage.removeItem("username");
    this.$store.dispatch("setShoppingCar", []);
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
    cursor: pointer;
  }
  .gohome {
    margin-left: 20px;
    font-size: 12px;
    cursor: pointer;
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

    .user-order {
      height: 50px;
      font-size: 13px;
      font-weight: 700;
      margin-right: 20px;
      color: #000;
      cursor: pointer;
    }
    .userName-text {
      margin-left: 10px;
      font-size: 14px;
      color: #999;
      cursor: pointer;
    }
    .userName-text:hover {
      color: #333;
    }
    .user-shoppingCar {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: normal;
      margin-left: 30px;
      border: 1px solid black;
      border-radius: 10px;
      height: 10px;
      margin-top: auto;
      margin-bottom: auto;
      padding: 15px 10px;
      cursor: pointer;
      .fas {
        margin-right: 10px;
      }
    }
    .user-shoppingCar:hover {
      background-color: #000;
      color: #fff;
      border: 1px solid #f7f7f7;
    }
    .userName-logout {
      margin-left: 30px;
      font-size: 14px;
      color: #000;
    }
  }
  .userInfo-dialog {
    .userInfo-dialog-line {
      display: flex;
      // justify-content: space-between;
      margin-bottom: 10px;
      .userInfo-dialog-line-left {
        font-size: 18px;
        color: #999;
        line-height: 30px;
      }
      .userInfo-dialog-line-right {
        margin-left: 20px;
        font-size: 22px;
        color: #333;
        line-height: 30px;
      }
    }
    .userInfo-dialog-btns {
      display: flex;
      justify-content: end;
      .userInfo-dialog-btn {
        margin-left: auto;
        margin-right: 20px;
      }
    }
  }
}
</style>
