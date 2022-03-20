<template>
  <div @mouseover="emitResetListBarIndex()" class="shadow-mask"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class ShadowMask extends Vue {
  @Prop({ type: Object }) public SelectClassification: any;
  public emitResetListBarIndex(): void {
    this.$emit("ResetHoverIndex");
  }

  mounted() {
    // append to body
    document.body.appendChild(this.$el);
  }
  beforeDestroy() {
    // remove from body
    document.body.removeChild(this.$el);
  }
}
</script>

<style lang="scss" scoped>
.shadow-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
}
</style>
