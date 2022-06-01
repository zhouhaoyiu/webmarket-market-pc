<template>
  <!-- <footer class="footer">
    🌏 © 2022 mall , code by&nbsp;<b>Mystic Zhou</b>&nbsp;- Taiyuan , I'm looking for a front-end
    job. I hope someone will give me an offer
    <span style="color: red">&nbsp; ❤</span>. &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/zhouhaoyiu" target="_blank"><b>Github</b> </a>
  </footer> -->
  <div>
    <el-button @click="openInfoDialog" type="danger" class="footer" circle>❤</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Footer extends Vue {
  public openInfoDialog(): void {
    this.$notify({
      title: '关于',
      dangerouslyUseHTMLString: true,
      message: `🌏 © 2022 mall , code by&nbsp;<b>Mystic Zhou</b> - Taiyuan.
    <div>I'm looking for a front-end job.</div>  
    <div>I hope someone will give me an offer<span style="color: red">&nbsp;❤</span>. </div>
    <a href="https://github.com/zhouhaoyiu" target="_blank"><b>Github</b> </a>`
    });
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>
