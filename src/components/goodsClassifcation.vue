<template>
  <div
    class="classification-details-content"
    @mouseout="emitResetListBarIndex()"
  >
    <div class="details">
      {{ SelectClassification.classificationName }}
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
  transition: all 1s;
  width: 100%;
  left: 0;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .details {
    width: 1440px;
    height: 100%;
    background: #fff;
    position: relative;
  }
}
</style>
