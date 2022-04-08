<template>
  <div class="recommend">
    <div class="recommend-title">推荐商品</div>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {},
})
export default class RecommendGoods extends Vue {
  mounted() {
    // console.log("RecommendGoods mounted");
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 1440px;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  .recommend-title {
    margin-top: 12px;
    font-size: 24px;
  }
}
</style>
