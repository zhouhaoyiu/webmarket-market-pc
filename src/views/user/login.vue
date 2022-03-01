<template>
  <div class="login">
    <div class="login-content">
      <div class="login-wrapL">
        <div>欢迎登录</div>
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
  private userName = "雪梅墩";
  private passWord = "";
  private login() {
    const res = this.axios.post("/user/login", {
      userName: this.userName, // 必填
      passWord: this.passWord, // TODO: 加密
    });
  }
}
</script>

<style lang="scss" scoped>
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
      justify-content: center;
      align-self: flex-start;
      align-items: center;
      height: 55%;
      width: 40%;
    }
    .login-wrapR {
      width: 45%;
      height: 100%;
      background: white;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
    }
  }
}
</style>
