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
          <div class="login-form-username">
            <div class="login-form-username-text">用户名</div>
            <el-input v-model="userName"></el-input>
          </div>
          <div class="login-form-password">
            <div class="login-form-password-text">密码</div>
            <el-input v-model="passWord" show-password></el-input>
          </div>
          <div class="login-form-btn-common">
            <button type="primary" size="medium">登录</button>
          </div>
          <div class="login-form-check">
            <el-radio v-model="agree"> </el-radio>
            为了更好的为您提供服务，在使用我们的产品前请您阅读完整版《隐私政策》和《用户协议》的所有条款。
          </div>
          <div class="login-other">
            <span class="login-other-txt"> 其他方式登录 </span>
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
  public userName = "";
  public passWord = "";

  public marketName = localStorage.getItem("marketName");
  public agree = false;

  public login() {
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
  // align-items: center;
  
  .login-content {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 600px;
    // background: white;

    .login-wrapL {
      // background: #f5f5f5;
      color: white;
      font-size: 48px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-self: center;
      align-items: center;
      text-align: center;
      height: 55%;
      width: 40%;
      // padding-top: 20px;
      padding-right: 60px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: iconSize 4s infinite ease-in-out;
      }
    }
    .login-wrapR {
      width: 550px;
      height: 550px;
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
      .login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        // height: ;
        .login-form-username {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          margin-bottom: 20px;
          .login-form-username-text {
            width: 80px;
            height: 100%;
            line-height: 50px;
            text-align: left;
          }
        }
        .login-form-password {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          margin-bottom: 20px;
          .login-form-password-text {
            width: 80px;
            height: 100%;
            line-height: 50px;
            text-align: left;
          }
        }
        .login-form-check {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          padding: 20px;
          font-size: 12px;
        }

        .login-form-btn-common {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          margin: 20px 0;
          button {
            width: 100%;
            height: 100%;
            background: #000;
            color:#fff;
            border: 1px solid #000;
            border-radius: 36px;
            outline: none;
          }
        }
        .login-other {
          width: 80%;
          height: 1px;
          background: #888;
          margin: 20px;

          position: relative;
          .login-other-txt {
            padding: 5px;
            display: block;
            position: absolute;
            left: 50%;
            top: -50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background: #fff;
            color: #888;
          }
        }
      }
    }
  }
}
</style>
