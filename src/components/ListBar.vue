<template>
  <div class="classification-list-background">
    <div class="classification-list-bar">
      <div
        class="classification-list-box"
        v-for="(i, index) in GoodsClassificationTree"
        :key="i.id"
      >
        <div
          class="classification-list-out"
          :class="{ active: index === hoverIndex }"
          @mouseenter="setHoverIndex(index)"
        >
          {{ i.classificationName }}
        </div>
      </div>
      <transition name="width">
        <GoodsClassificationDeatil
          @ResetHoverIndex="resetHoverIndex"
          @SetShadowMask="shadow = false"
          v-if="hoverIndex !== -1"
          :SelectClassification="GoodsClassificationTree[hoverIndex]"
          style="max-height: 700px; overflow: hidden"
        />
      </transition>

      <ShadowMask v-if="shadow" @ResetHoverIndex="resetHoverIndex" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import GoodsClassificationDeatil from "./goodsClassifcation.vue";
import ShadowMask from "./shadowMask.vue";
@Component({
  components: { GoodsClassificationDeatil, ShadowMask },
})
export default class ListBar extends Vue {
  public shadow = false;

  @Watch("hoverIndex")
  public onHoverIndexChange(newVal: number, oldVal: number) {
    if (newVal === -1) {
      setTimeout(() => {
        this.shadow = false;
      }, 500);
    } else {
      this.shadow = true;
    }
  }
  public hoverIndex = -1;
  public setHoverIndex(index: number): void {
    this.hoverIndex = index;
  }
  public resetHoverIndex(): void {
    this.hoverIndex = -1;
  }
  get GoodsClassificationTree() {
    return this.$store.getters.getGoodsClassificationTree;
  }
}
</script>
<style lang="scss" scoped>
.classification-list-background {
  width: 100%;
  background: #fff;
  z-index: 100;
  .classification-list-bar {
    width: 1440px;
    height: 80px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding-left: 150px;
    justify-content: flex-start;
    align-items: flex-start;
    .classification-list-box {
      width: max-content;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      margin-right: 10px;
      // &:last-child {
      //   border-bottom: none;
      // }
      .classification-list-out {
        padding: 6px 12px;
        border-radius: 20px;
        cursor: pointer;
      }
      .active {
        background: #000;
        color: #fff;
      }
    }
    .width-enter-active,
    .width-leave-active {
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      ::v-deep div {
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
    .width-enter, .width-leave-to /* .width-leave-active below version 2.1.8 */ {
      // opacity: 0 !important;
      ::v-deep div {
        opacity: 0 !important;
      }
      max-height: 0px !important;
    }
  }
}
</style>
