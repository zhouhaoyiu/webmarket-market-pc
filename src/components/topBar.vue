<template>
  <div class="top-bar">
    <div class="marketName" v-if="marketInfo">
      欢迎来到{{ marketInfo.marketName }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class TopBar extends Vue {
  private marketInfo = null;
  async mounted(): Promise<void> {
    // do something
    const res = await this.axios.get("/marketInfo/getMarketInfo");
    this.marketInfo = this._.cloneDeep(res.data.data[0]);
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  width: 100%;
  background: gray;
  display: flex;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  .marketName {
    // color: white;
    margin-left: 40px;
    font-size: 20px;
  }
}
</style>
