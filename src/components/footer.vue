<template>
  <footer class="footer">
    🌏 © 2022 mall , code by&nbsp;<b>Mystic Zhou</b>&nbsp;- Taiyuan , I'm looking for a front-end
    job. I hope someone will give me an offer
    <span style="color: red">&nbsp; ❤</span>. &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/zhouhaoyiu" target="_blank"><b>Github</b> </a>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Footer extends Vue { }
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 60px;
  margin-top: 24px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #999;
}
</style>
