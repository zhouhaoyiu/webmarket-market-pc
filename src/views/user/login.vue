<template>
  <div class="login">
    <div class="login-content">
      <div class="login-wrapL">
        <div class="" style="width: 100%; height: 100px">欢迎登录</div>
        <div class="" style="width: 100%; height: 100px">
          {{ marketName }}
        </div>
        <div style="width: 100%; height: 200px" class="icon">
          <i class="fas fa-shopping-cart" style="font-size: 80px"></i>
        </div>
      </div>
      <div class="login-wrapR">
        <div class="login-title">
          <h3>登录</h3>
        </div>
        <div class="login-form">
          <div>
            <div>用户名</div>
            <el-input v-model="userName"></el-input>
          </div>
          <div>
            <div>密码</div>
            <el-input v-model="passWord" show-password></el-input>
          </div>
        </div>
        <div>
          <el-button
            type="primary"
            size="medium
        "
            >注册</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Login extends Vue {
  private userName = "";
  private passWord = "";

  private marketName = localStorage.getItem("marketName");
  private login() {
    const res = this.axios.post("/user/login", {
      userName: this.userName, // 必填
      passWord: this.passWord, // TODO: 加密
    });
  }
}
</script>

<style lang="scss" scoped>
@keyframes iconSize {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.login {
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50%;
    // background: white;

    .login-wrapL {
      // background: #f5f5f5;
      color: white;
      font-size: 48px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-self: flex-start;
      align-items: center;
      text-align: center;
      height: 55%;
      width: 40%;
      padding-top: 20px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: iconSize 4s infinite ease-in-out;
      }
    }
    .login-wrapR {
      width: 45%;
      height: 100%;
      padding: 20px;
      background: white;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
      .login-title {
        font-size: 24px;
        height: 50px;
        line-height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
