<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Login extends Vue {
  private userName = "";
  private passWord = "";
  private login() {
    const res = this.axios.post("/user/login", {
      userName: this.userName, // 必填
      passWord: this.passWord, // TODO: 加密
    });
  }
}
</script>

<style lang="scss" scoped></style>
