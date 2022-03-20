<template>
  <div class="classification-details-content">
    <div class="details">
      <div class="details-title">
        <div class="details-title-link">
          {{ SelectClassification.classificationName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class GoodsClassificationDeatil extends Vue {
  @Prop({ type: Object }) public SelectClassification: any;
  public emitResetListBarIndex(): void {
    this.$emit("ResetHoverIndex");
  }
}
</script>

<style lang="scss" scoped>
.classification-details-content {
  position: fixed;
  top: 130px;
  height: 700px;
  width: 100%;
  left: 0;
  // background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: #fff;
  .details {
    width: 1440px;
    height: 100%;
    position: relative;
    padding: 24px;
    .details-title {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .details-title-link {
        position: relative;
        width: max-content;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 32px;
        font-weight: 700;
        color: #333;
        cursor: pointer;
      }
      .details-title-link:after {
        content: "";
        display: block;
        position: absolute;
        top: 100%;
        left: 50%;
        width: 0;
        margin-top: 2px;
        border-bottom: 2px solid #000;
        -webkit-transition: left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        transition: left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .details-title-link:hover {
        color: #000;
      }
      .details-title-link:hover.details-title-link:after {
        width: 100%;
        left: 0;
      }
    }
  }
}
</style>
