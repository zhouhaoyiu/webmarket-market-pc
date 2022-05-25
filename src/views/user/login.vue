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
          <h6 @click="goRegis" style="
              position: absolute;
              right: 20px;
              color: #17508c;
              cursor: pointer;
            ">
            注册
          </h6>
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
            <button type="primary" size="medium" @click="login">登录</button>
          </div>
          <div class="login-form-check">
            <el-checkbox style="margin-right: 5px" v-model="agree">
            </el-checkbox>
            <div>
              为了更好的为您提供服务，在使用我们的产品前请您阅读完整版
              <span style="color: #228aff">《隐私政策》</span>
              <span style="color: #228aff">《用户协议》</span>和的所有条款。
            </div>
          </div>
          <div class="login-form-other">
            <span class="login-form-other-txt"> 其他方式登录 </span>
          </div>
          <div class="login-form-other-btn">
            <!-- <div class="login-form-other-btn-qq">
              <i class="fab fa-qq"></i>
            </div> -->
            <div class="login-form-other-btn-wechat">
              <img
                src="data:image/png;base64,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" />
              <div class="login-form-other-btn-wechat-txt">微信账户登录</div>
            </div>
            <div class="login-form-other-btn-alipay">
              <img
                src="data:image/png;base64,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" />
              <div class="login-form-other-btn-alipay-txt">支付宝账号登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="regisDialog" title="注册" width="700px" center>
      <div class="login-form-regis-dialog-content">
        <div class="login-form-regis-dialog-content-item">
          <div class="login-form-regis-dialog-content-item-title">
            <div class="login-form-regis-dialog-content-item-title-txt">
              用户名 <span style="color: red">*</span>
            </div>
          </div>
          <div class="login-form-regis-dialog-content-item-input">
            <el-input v-model="regisForm.username" placeholder="请输入用户名"></el-input>
          </div>
        </div>
        <div class="login-form-regis-dialog-content-item">
          <div class="login-form-regis-dialog-content-item-title">
            <div class="login-form-regis-dialog-content-item-title-txt">
              密码 <span style="color: red">*</span>
            </div>
          </div>
          <div class="login-form-regis-dialog-content-item-input">
            <el-input v-model="regisForm.password" placeholder="请输入密码" type="password"></el-input>
          </div>
        </div>
        <div class="login-form-regis-dialog-content-item">
          <div class="login-form-regis-dialog-content-item-title">
            <div class="login-form-regis-dialog-content-item-title-txt">
              联系电话 <span style="color: red">*</span>
            </div>
          </div>
          <div class="login-form-regis-dialog-content-item-input">
            <el-input v-model="regisForm.phonenumber" placeholder="请输入联系电话"></el-input>
          </div>
        </div>
        <div class="login-form-regis-dialog-content-item">
          <div class="login-form-regis-dialog-content-item-title">
            <div class="login-form-regis-dialog-content-item-title-txt">
              性别 <span style="color: red">*</span>
            </div>
          </div>
          <div class="login-form-regis-dialog-content-item-radio">
            <el-radio v-model="regisForm.gender" label="1"> 男 </el-radio>
            <el-radio v-model="regisForm.gender" label="0"> 女 </el-radio>
          </div>
        </div>
        <div class="login-form-regis-dialog-content-item">
          <div class="login-form-regis-dialog-content-item-title">
            <div class="login-form-regis-dialog-content-item-title-txt">
              收货地址 <span style="color: red">*</span>
            </div>
          </div>
          <div class="login-form-regis-dialog-content-item-input">
            <el-input v-model="regisForm.address" placeholder="请输入收货地址"></el-input>
          </div>
        </div>
      </div>
      <div class="login-form-regis-dialog-submit">
        <el-button @click="cancel()">取消</el-button>
        <el-button type="primary" @click="submitRegis()">注册</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
type Result = {
  code: number;
  msg: string;
  data: any;
};

import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Login extends Vue {
  public userName = "";
  public passWord = "";

  public marketName = localStorage.getItem("marketName");
  public agree = false;
  public regisDialog = false;

  public regisForm = {
    username: "",
    password: "",
    gender: "1",
    phonenumber: "",
    address: "",
  };

  public async login(): Promise<void> {
    if (!this.agree) {
      this.$message.error("请先阅读并同意《用户协议》");
      return;
    }
    const res: Result = await this.axios.post("/user/login", {
      username: this.userName, // 必填
      password: this.passWord,
    });
    if (res.data.code === 0) {
      localStorage.setItem("username", res.data.data[0].username);
      localStorage.setItem("useruuid", res.data.data[0].useruuid);
      this.$store.commit("setUserInfo", res.data.data[0]);
      this.$message.success("登录成功");
      this.$router.push("/");
    } else {
      this.$message.error(res.data.msg);
    }
  }

  public clearRegisInfo(): void {
    this.regisForm.username = "";
    this.regisForm.password = "";
    this.regisForm.phonenumber = "";
    this.regisForm.address = "";
    this.regisForm.gender = "1";
  }

  public goRegis(): void {
    this.regisDialog = true;
  }

  public cancel(): void {
    this.clearRegisInfo();
    this.regisDialog = false;
  }

  public async submitRegis(): Promise<void> {
    if (this.regisForm.username === "") {
      this.$message.error("用户名不能为空");
      return;
    }
    if (this.regisForm.password === "") {
      this.$message.error("密码不能为空");
      return;
    }
    if (this.regisForm.phonenumber === "") {
      this.$message.error("联系电话不能为空");
      return;
    }
    if (this.regisForm.address === "") {
      this.$message.error("收货地址不能为空");
      return;
    }
    const res: Result = await this.axios.post("/user/userRegis", {
      username: this.regisForm.username,
      password: this.regisForm.password,
      gender: this.regisForm.gender === "1" ? true : false,
      phonenumber: this.regisForm.phonenumber,
      address: this.regisForm.address,
    });
    if (res.data.code === 0) {
      this.$message.success("注册成功");
      this.regisDialog = false;
      this.clearRegisInfo();
    } else {
      this.$message.error(res.data.msg);
    }
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
      height: 530px;
      padding: 20px;
      background: white;
      border: 1px solid #f0f0f0;
      border-radius: 10px;

      .login-title {
        position: relative;
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
          width: 90%;
          height: 50px;
          margin: 20px 0;

          button {
            width: 100%;
            height: 100%;
            background: #000;
            color: #fff;
            border: 1px solid #000;
            border-radius: 36px;
            outline: none;
            cursor: pointer;
          }

          button:active {
            background: #fff;
            color: #000;
            transform: scale(0.9);
          }
        }

        .login-form-other {
          width: 80%;
          height: 1px;
          background: #888;
          margin: 20px;

          position: relative;

          .login-form-other-txt {
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

        .login-form-other-btn {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 50%;
          height: 50px;
          margin: 20px 0;

          .login-form-other-btn-wechat,
          .login-form-other-btn-alipay {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .login-form-other-btn-wechat-txt,
            .login-form-other-btn-alipay-txt {
              font-size: 12px;
            }
          }

          img {
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  .login-form-regis-dialog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .login-form-regis-dialog-content-item {
      width: 100%;
      height: 50px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .login-form-regis-dialog-content-item-title {
        width: 80px;
        height: 100%;
        line-height: 50px;
        text-align: left;
      }

      .login-form-regis-dialog-content-item-input {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 0 10px;
        outline: none;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .login-form-regis-dialog-content-item-radio {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 0 10px;
        outline: none;
        font-size: 14px;
        display: flex;
        justify-content: left;
        align-items: center;
      }
    }
  }

  .login-form-regis-dialog-submit {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 0 10px;
    outline: none;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
