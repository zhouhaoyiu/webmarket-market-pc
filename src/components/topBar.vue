<template>
  <div class="top-bar">
    <div class="marketName" v-if="marketInfo" @click="$router.push('/home')">
      欢迎来到{{ marketInfo.marketName || "网上商城" }}
    </div>
    <div>
      <el-autocomplete class="search" size="small" v-model="searchGood" :fetch-suggestions="GoodSearch"
        placeholder="请输入搜索内容" :trigger-on-focus="false" @select="handleSelect"> </el-autocomplete>
    </div>
    <div v-if="$route.fullPath !== '/home'" @click="$router.push('/home')" class="gohome">
      回到首页
    </div>
    <div v-if="!userName" class="login" @click="login()">登录/注册</div>
    <div v-else class="userInfo">
      <div class="user-order" @click="() => $router.push('/home/Order')">
        我的订单
      </div>
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
    <el-dialog title="个人信息" :visible.sync="userInfoDialogVisible" width="30%" center class="userInfo-dialog">
      <div>
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
        <el-button class="userInfo-dialog-btn" type="primary" @click="userInfoEditStatus = true"
          v-if="!userInfoEditStatus">
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

  public searchGood = "";

  public GoodSearch(queryString: string, cb: Function) {
    const good = (this.$store.state.goodsList || []).filter((item: any) => {
      // 返回商品名称中含有搜索内容的商品，不区分大小写
      return item && item.goodName.toLowerCase().includes(queryString.toLowerCase());
    });
    console.log(good);
    const result = good.map((item: any) => {
      return { value: item.goodName, id: item.goodId };
    });
    cb(result);
  }

  public async handleSelect(item: { value: string; id: string }): Promise<any> {
    if (!item || !item.id) {
      return;
    }
    this.$router.push({
      path: "/home/detail",
      query: {
        goodId: item.id,
      },
    });
    this.searchGood = ''
    await this.$nextTick(); // 必须等待下一次tick才能获取到el-autocomplete的DOM
    if(this.$route.path === '/home/detail'){
      this.$router.go(0);
    } // 如果是详情页，则需要刷新才可以切换商品信息
  }

  async getMarketInfo(): Promise<void> {
    const res = await this.axios.get("/marketInfo/getMarketInfo");
    (this.marketInfo as unknown) = this._.cloneDeep(
      res.data.data[0]
    ) as MarketInfo;
    this.marketInfo &&
      localStorage.setItem("marketName", (this.marketInfo as any).marketName);
    document.title = (this.marketInfo as any).marketName;
    document.getElementsByTagName(
      "head"
    )[0].innerHTML += `<meta name="keywords" content="${(this.marketInfo as any).marketMeta
    }">`;
  }
  async mounted(): Promise<void> {
    await this.getMarketInfo();
    this.setUserInfoData.phonenumber = this.userInfo.phonenumber;
    this.setUserInfoData.address = this.userInfo.address;
    // console.log(this.$store.state.userInfo);
  }

  public goShoppingCar(): void {
    this.$router.push({
      path: "/home/shoppingCar",
    });
  }
  public openInfoDialog() {
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

  public login(): void {
    this.$router.push("/login");
    this.$store.dispatch("setShoppingCar", []);
  }

  public logout(): void {
    localStorage.removeItem("username");
    localStorage.removeItem("useruuid");
    this.$store.commit("setUserInfo", {});
    this.$store.commit("clearShoppingCar");
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

  .search {
    margin-left: 20px;
    height: 32px;
    outline: none;
    font-size: 14px;
    color: #666;
    background: #f7f7f7;
    .el-input__inner {
      border: none;
    }

    .el-input__icon {
      color: #666;
    }
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
      justify-content: flex-end;

      .userInfo-dialog-btn {
        margin-left: auto;
        margin-right: 20px;
      }
    }
  }
}
</style>
